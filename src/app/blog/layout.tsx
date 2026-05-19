export default function BlogLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
      <section className="min-h-full flex flex-col">
        <h1>Welcome To BlogLayout</h1>
        {children}
      </section>
    );
}