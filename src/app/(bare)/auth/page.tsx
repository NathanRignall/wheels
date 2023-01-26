"use client";

import { useSupabase } from "../../../components/supabase-provider";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function Login() {
  const { supabase } = useSupabase();

  return (
    <section className="w-full max-w-sm">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
      />
    </section>
  );
}
