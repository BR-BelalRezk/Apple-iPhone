export default function Section({ children, className }) {
  return (
    <section className={`sm:py-32 py-20 sm:px-10 px-5 ${className}`}>
      <div className="mx-auto relative max-w-[1120px]">{children}</div>
    </section>
  );
}
