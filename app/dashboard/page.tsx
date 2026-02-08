"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import QRGenerator from "@/components/QRGenerator";


export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        window.location.href = "/login";
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

return (
  <div className="min-h-screen">
    <Navbar />

    <div className="flex flex-col items-center justify-center h-[80vh] gap-6">
    <h1 className="text-3xl font-bold">
    Welcome to Dashboard
  </h1>

  <QRGenerator />
</div>

  </div>
);

}