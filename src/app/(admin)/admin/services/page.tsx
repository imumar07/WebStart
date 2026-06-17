import { ServicesManager } from "@/components/admin/ServicesManager";

export const metadata = { title: "Services — Admin" };

export default function ServicesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px]">
      <ServicesManager />
    </div>
  );
}
