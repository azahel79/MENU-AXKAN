import CategoryDetail from "../CategoryDetail";
import { getMenuSection } from "../../menu-data";

export default function AlitasDetailPage() {
  const section = getMenuSection("alitas");
  if (!section) return null;
  return <CategoryDetail section={section} />;
}
