import { QuotationsManager } from "@/components/admin/QuotationsManager";

export const metadata = { title: "Quotations — Admin" };

export default function QuotationsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px]">
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl text-white mb-1">Quotations</h1>
        <p className="text-gray-500 text-sm">Create and manage client proposals and quotations</p>
      </div>
      <QuotationsManager />
    </div>
  );
}
