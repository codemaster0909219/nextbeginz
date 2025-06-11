import { Features } from "@/components/ui/features";
import { PackageSearch, Settings, Eye } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Web & App Development",
    content:
      "Custom-built platforms designed for performance, scalability, and user experience.",
    image:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
    icon: <PackageSearch className="size-6 text-primary" />,
  },
  {
    id: 2,
    title: "Branding & Design",
    content:
      "Create a visual identity that resonates across all platforms.",
    image:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
    icon: <Settings className="size-6 text-primary" />,
  },
  {
    id: 3,
    title: "Digital Strategy",
    content:
      "Marketing, automation, and analytics—built for measurable growth.",
    image:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
    icon: <Eye className="size-6 text-primary" />,
  },
  {
    id: 4,
    title: "Job Support",
    content:
      "Expert-led job search, interview prep, and career guidance tailored to you.",
    image:
      "https://res.cloudinary.com/eldoraui/image/upload/v1734107781/Screenshot_2024-12-13_at_10.06.08_PM_molet1.png",
    icon: <Eye className="size-6 text-primary" />,
  },
];

export function Service() {
  return (
    <div className="bg-black text-white py-[48px] sm:py-18 ">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Our Services</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
          Whether you're launching a startup or scaling your enterprise, we deliver results-driven design, development, and strategy—all in one place.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-4">
          <Features data={data} />
        </div>
      </div>
    </div>
  );
}
