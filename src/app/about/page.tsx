import { ExportTimeline } from "@/features/export-process/components/ExportTimeline";

export const metadata = {
  title: "How We Do It - StopShop",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <ExportTimeline />
    </div>
  );
}
