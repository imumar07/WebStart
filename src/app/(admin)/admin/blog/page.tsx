import { BlogManager } from "@/components/admin/BlogManager";

export const metadata = { title: "Blog — Admin" };

export default function BlogPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1400px]">
      <BlogManager />
    </div>
  );
}
