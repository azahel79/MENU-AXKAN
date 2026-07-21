import type { MenuItem, MenuSection } from "./menu-data";
import { flavors } from "./menu-data";

export type ProductInsight = {
  eyebrow: string;
  heading: string;
  description: string;
  values: string[];
};

export const slugifyProduct = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const burgerIngredients: Record<string, string[]> = {
  sencilla: ["Carne a la plancha", "Queso fundido", "Lechuga", "Jitomate", "Cebolla", "Pan suave"],
  tropical: ["Carne a la plancha", "Queso fundido", "Piña", "Vegetales frescos", "Pan suave"],
  pollo: ["Pollo a la plancha", "Queso fundido", "Vegetales frescos", "Pan suave"],
  "aros de cebolla": ["Carne a la plancha", "Queso fundido", "Aros de cebolla", "Vegetales frescos", "Pan suave"],
  "3 quesos": ["Carne a la plancha", "Mezcla de tres quesos", "Vegetales frescos", "Pan suave"],
  guacamole: ["Carne a la plancha", "Guacamole", "Queso fundido", "Vegetales frescos", "Pan suave"],
  axkan: ["Carne a la plancha", "Queso fundido", "Vegetales frescos", "Aderezo de la casa", "Pan suave"],
  texana: ["Carne a la plancha", "Queso fundido", "Preparación estilo texano", "Vegetales frescos", "Pan suave"],
  camarón: ["Camarón", "Queso fundido", "Vegetales frescos", "Pan suave"],
  "sirloin smash burger": ["Carne de sirloin", "Estilo smash", "Queso fundido", "Vegetales frescos", "Pan suave"],
  "carne extra": ["Porción adicional de carne", "Complemento para hamburguesa"],
};

const sectionBases: Record<string, string[]> = {
  "chow-mein": ["Fideos salteados", "Vegetales", "Preparado al momento"],
  "hot-dogs": ["Salchicha dorada", "Pan suave", "Queso", "Aderezos de la casa"],
  papas: ["Papas crujientes", "Queso", "Salsas de la casa", "Toppings según la variedad"],
  snacks: ["Preparado caliente", "Ideal para compartir", "Aderezos de la casa"],
  burritos: ["Tortilla dorada", "Relleno abundante", "Queso", "Preparado al momento"],
  baguette: ["Pan crujiente", "Arrachera a la plancha", "Vegetales", "Aderezos de la casa"],
};

const beverageValues = (item: MenuItem, section: MenuSection) => {
  if (item.detail) return item.detail.split(/,|\so\s|·/).map((value) => value.trim()).filter(Boolean);
  if (section.note) return section.note.split("·").map((value) => value.trim()).filter(Boolean);
  return [item.name, "Se sirve al momento", "Consulta disponibilidad"];
};

export function getProductInsight(section: MenuSection, item: MenuItem): ProductInsight {
  const key = item.name.toLocaleLowerCase("es-MX");

  if (section.id === "alitas") {
    return {
      eyebrow: section.note ?? "Orden preparada al momento",
      heading: "Sabores disponibles",
      description: `${item.name}: piezas crujientes bañadas en la salsa que elijas.`,
      values: flavors,
    };
  }

  if (section.id === "hamburguesas") {
    return {
      eyebrow: "Preparada al momento",
      heading: "Ingredientes principales",
      description: `${item.name}, una opción de la categoría de hamburguesas AXKAN servida recién preparada.`,
      values: burgerIngredients[key] ?? burgerIngredients.sencilla,
    };
  }

  if (sectionBases[section.id]) {
    const protein = ["pollo", "camarón", "arrachera", "mar y tierra"].find((name) => key.includes(name));
    return {
      eyebrow: "Información del platillo",
      heading: "Ingredientes principales",
      description: item.detail ?? `${item.name}, preparado al momento como parte del menú de ${section.title}.`,
      values: [...sectionBases[section.id], ...(protein ? [`Proteína: ${protein}`] : [])],
    };
  }

  if (["bebidas", "bebidas-calientes"].includes(section.id)) {
    return {
      eyebrow: "Información de la bebida",
      heading: item.detail ? "Sabores o presentaciones" : "Presentación",
      description: item.detail ?? `${item.name}, una opción para acompañar tu comida.`,
      values: beverageValues(item, section),
    };
  }

  if (["cantaritos", "cocteleria", "cocteleria-axkan"].includes(section.id)) {
    return {
      eyebrow: "Preparado al momento",
      heading: "Base y perfil",
      description: item.detail ?? `${item.name}, bebida preparada de la carta AXKAN.`,
      values: beverageValues(item, section),
    };
  }

  if (section.id === "shots") {
    return {
      eyebrow: "Individual o para compartir",
      heading: "Sabores disponibles",
      description: `${item.name}, opción frutal de la carta AXKAN.`,
      values: beverageValues(item, section),
    };
  }

  return {
    eyebrow: "Conoce el platillo",
    heading: "Lo más importante",
    description: item.detail ?? section.description,
    values: ["Preparado al momento", "Ingredientes frescos", "Consulta disponibilidad"],
  };
}