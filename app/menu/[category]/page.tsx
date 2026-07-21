import { notFound } from "next/navigation";
import CategoryDetail from "../CategoryDetail";
import { getMenuSection, menuSections } from "../../menu-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return menuSections
    .filter((section) => section.id !== "alitas")
    .map((section) => ({ category: section.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const section = getMenuSection(category);
  if (!section || category === "alitas") notFound();
  return <CategoryDetail section={section} />;
}
