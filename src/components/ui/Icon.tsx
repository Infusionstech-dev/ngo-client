// Minimal stroke icons so the page has no icon-library dependency
const paths = {
  press: "M4 5h12v14H6a2 2 0 0 1-2-2V5Zm12 4h4v8a2 2 0 0 1-2 2M8 9h4M8 13h4",
  mic: "M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-6 8a6 6 0 0 0 12 0M12 17v4",
  wave: "M4 12h2M8 8v8M12 5v14M16 8v8M20 12h-2",
  screen: "M3 5h18v11H3zM8 20h8M12 16v4",
  minus: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8 12h8",
  people: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 9a6 6 0 0 1 12 0M17 11a3 3 0 1 0 0-6M21 20a6 6 0 0 0-4-5.6",
  chat: "M4 5h16v11H8l-4 4V5Z",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4-4M11 8v6M8 11h6",
  list: "M4 4h16v16H4zM8 9h1M8 15h1M12 9h4M12 15h4",
  chart: "M5 20V12M10 20V6M15 20V9M20 20V4M3 20h18",
  cycle: "M12 3a9 9 0 1 0 9 9M21 3v6h-6M9 9l6 6M15 9l-6 6",
  userPlus: "M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 10a7 7 0 0 1 14 0M19 8v6M16 11h6",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  checkCircle: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM8 12l3 3 5-6",
  mail: "M3 6h18v12H3zM3 6l9 7 9-7",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  pin: "M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Zm0-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
