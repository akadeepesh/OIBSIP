import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Add New Pizza",
    description: "Post A New Pizza To The Menu",
    link: "/admin/add-new-pizza",
  },
  {
    title: "Change A Listed Pizza",
    description: "Edit A Listed Pizza On The Menu",
    link: "/admin/change-pizza",
  },
  {
    title: "Delete Pizza",
    description: "Remove A Listed Pizza From The Menu",
    link: "/admin/delete-pizza",
  },
  {
    title: "Check Buy Orders",
    description: "Check The Orders Made By Customers",
    link: "/admin/check-buy-orders",
  },
  // {
  //   title: "Amazon",
  //   description:
  //     "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //   link: "https://amazon.com",
  // },
  // {
  //   title: "Microsoft",
  //   description:
  //     "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  // },
];
