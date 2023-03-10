import "server-only";

import "./globals.css";

import SupabaseListener from "../components/supabase-listener";
import SupabaseProvider from "../components/supabase-provider";
import { createServerClient } from "../utils/supabase-server";

import type { Database } from "../db_types";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export type TypedSupabaseClient = SupabaseClient<Database>;

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
