"use client";

import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { supabase } from "@/lib/supabaseClient";

export default function QRGenerator() {
  const ref = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState<string | null>(null);

  const generateSlug = () =>
    Math.random().toString(36).substring(2, 8);

  const createQR = async () => {
    if (!url) return;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const newSlug = generateSlug();

    const { error } = await supabase.from("qr_codes").insert({
      slug: newSlug,
      destination_url: url,
      user_id: user.id,
    });

    if (error) {
      console.error(error);
      return;
    }

    setSlug(newSlug);
  };

  useEffect(() => {
    if (!slug) return;

    qrCode.current = new QRCodeStyling({
      width: 250,
      height: 250,
      data: `http://localhost:3000/q/${slug}`,
    });

    if (ref.current) {
      ref.current.innerHTML = "";
      qrCode.current.append(ref.current);
    }
  }, [slug]);

  const downloadQR = () => {
    qrCode.current?.download({ extension: "png" });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="url"
        placeholder="Enter URL"
        className="border p-2 rounded w-72 bg-[color:var(--background)] text-[color:var(--foreground)]"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        onClick={createQR}
        className="bg-[color:var(--foreground)] text-[color:var(--background)] px-4 py-2 rounded transition-colors"
      >
        Generate QR
      </button>

      <div ref={ref} />

      {slug && (
        <button
          onClick={downloadQR}
          className="bg-[color:var(--foreground)] text-[color:var(--background)] px-4 py-2 rounded transition-colors"
        >
          Download QR
        </button>
      )}
    </div>
  );
}
