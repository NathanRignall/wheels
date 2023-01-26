export default function BareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen flex flex-1 flex-col items-center justify-center overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
