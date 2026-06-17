import { TestimonialsManager } from "@/components/admin/TestimonialsManager";

export const metadata = { title: "Testimonials — Admin" };

export default function TestimonialsPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px]">
      <TestimonialsManager />
    </div>
  );
}
