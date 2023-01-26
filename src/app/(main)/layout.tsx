import { AdminNavbar } from "@/containers";

export default function BareLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <AdminNavbar />
        <main>{children}</main>
      </>
    );
  }
  