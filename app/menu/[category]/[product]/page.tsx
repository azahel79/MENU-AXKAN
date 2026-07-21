import { notFound } from "next/navigation";
import ProductDetail from "../../ProductDetail";
import { getMenuSection, menuSections } from "../../../menu-data";
import { slugifyProduct } from "../../../product-details";

export const dynamicParams = false;

export function generateStaticParams() {
  return menuSections
    .filter((section) => section.id !== "alitas")
    .flatMap((section) =>
      section.items.map((item) => ({
        category: section.id,
        product: slugifyProduct(item.name),
      })),
    );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category, product } = await params;
  const section = getMenuSection(category);
  if (!section || category === "alitas") notFound();

  const itemIndex = section.items.findIndex((item) => slugifyProduct(item.name) === product);
  if (itemIndex < 0) notFound();

  return <ProductDetail section={section} item={section.items[itemIndex]} itemIndex={itemIndex} />;
}