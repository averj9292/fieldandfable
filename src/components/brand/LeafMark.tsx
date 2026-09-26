export function LeafMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M24 42c0-14 8-26 20-34-2 16-10 28-20 34Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 42C24 28 16 16 4 8c2 16 10 28 20 34Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M24 42V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
