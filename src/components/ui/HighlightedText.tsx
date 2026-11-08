import type { TextSegment } from "@/types/home";

/** Renders heading segments, colouring the highlighted ones in the brand colour */
export function HighlightedText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment) =>
        segment.isHighlighted ? (
          <span key={segment.text} className="text-brand">
            {segment.text}
          </span>
        ) : (
          segment.text
        ),
      )}
    </>
  );
}
