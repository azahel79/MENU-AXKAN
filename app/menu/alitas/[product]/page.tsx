import { notFound } from "next/navigation";
import ProductDetail from "../../ProductDetail";
import { getMenuSection } from "../../../menu-data";
import { slugifyProduct } from "../../../product-details";

export const dynamicParams = false;

export function generateStaticParams() {
  const section = getMenuSection("alitas");
  return section?.items.map((item) => ({ product: slugifyProduct(item.name) })) ?? [];
}

export default async function AlitasProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  const section = getMenuSection("alitas");
  if (!section) notFound();

  const itemIndex = section.items.findIndex((item) => slugifyProduct(item.name) === product);
  if (itemIndex < 0) notFound();

  return <ProductDetail section={section} item={section.items[itemIndex]} itemIndex={itemIndex} />;
}