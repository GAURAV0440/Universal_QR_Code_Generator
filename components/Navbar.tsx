"use client";

import { supabase } from "@/lib/supabaseClient";

export default function Navbar() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-[color:var(--foreground)]">
      <h1 className="font-bold text-[color:var(--foreground)]">
        Universal QR
      </h1>

      <button
        onClick={handleLogout}
        className="bg-[color:var(--foreground)] text-[color:var(--background)] px-4 py-2 rounded transition-colors"
      >
        Logout
      </button>
    </nav>
  );
}
