import { PortfolioManager } from "@/components/admin/PortfolioManager";

export const metadata = { title: "Portfolio — Admin" };

export default function PortfolioPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px]">
      <PortfolioManager />
    </div>
  );
}
