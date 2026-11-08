import { Icon } from "@/components/ui/Icon";

type EventMetaProps = {
  date: string;
  location: string;
};

/** Date and location line shown above each publication title */
export function EventMeta({ date, location }: EventMetaProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-sm">
      <span className="flex items-center gap-1.5 font-semibold">
        <Icon name="calendar" className="h-4 w-4" />
        {date}
      </span>
      <span className="flex items-center gap-1.5">
        <Icon name="pin" className="h-4 w-4" />
        {location}
      </span>
    </div>
  );
}
