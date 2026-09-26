export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-rule my-2">
      <p className="tracked shrink-0 text-[11px] font-medium text-muted md:text-xs">
        {children}
      </p>
    </div>
  );
}
