export type MenuItem = { name: string; price: string; detail?: string };
export type MenuSection = {
  id: string;
  label: string;
  title: string;
  icon: string;
  theme: string;
  description: string;
  note?: string;
  featured: MenuItem;
  images: string[];
  items: MenuItem[];
};

const gallery = (name: string) => [1, 2, 3].map((index) => "/axkan/products/" + name + "-" + index + ".webp");

export const flavors = [
  "Piña / Habanero", "Habanero", "Ajo", "Natural", "Valentina",
  "BBQ / Chipotle", "Búfalo", "BBQ Parmesano", "Tamarindo",
];

export const menuSections: MenuSection[] = [
  {
    id: "alitas", label: "Alitas", title: "Alitas", icon: "♨", theme: "red",
    description: "Orden de 10 piezas crujientes, bañadas en tu salsa favorita y hechas al momento.",
    note: "Orden de 10 piezas", featured: { name: "Alitas AXKAN", price: "$95" },
    images: gallery("alitas"),
    items: [{ name: "AXKAN", price: "$95" }, { name: "Boneless", price: "$99" }],
  },
  {
    id: "chow-mein", label: "Chow Mein", title: "Chow Mein", icon: "♨", theme: "green",
    description: "Fideos salteados al momento con vegetales y el ingrediente de tu elección.",
    featured: { name: "Chow Mein pollo", price: "$75" }, images: gallery("chow-mein"),
    items: [
      { name: "Chow Mein pollo", price: "$75" }, { name: "Chow Mein camarón", price: "$95" },
      { name: "Chow Mein mixto", price: "$99" },
    ],
  },
  {
    id: "hamburguesas", label: "Burgers", title: "Hamburguesas", icon: "●", theme: "orange",
    description: "Carne a la plancha, queso fundido y vegetales frescos en pan suave.",
    featured: { name: "Sencilla", price: "$68" }, images: gallery("hamburguesas"),
    items: [
      { name: "Sencilla", price: "$68" }, { name: "Tropical", price: "$78" },
      { name: "Pollo", price: "$78" }, { name: "Aros de cebolla", price: "$78" },
      { name: "3 quesos", price: "$90" }, { name: "Guacamole", price: "$98" },
      { name: "AXKAN", price: "$95" }, { name: "Texana", price: "$89" },
      { name: "Camarón", price: "$120" }, { name: "Sirloin Smash Burger", price: "$140" },
      { name: "Carne extra", price: "+$30" },
    ],
  },
  {
    id: "hot-dogs", label: "Hot Dogs", title: "Hot Dogs", icon: "〰", theme: "red",
    description: "Salchicha dorada, pan suave y combinaciones llenas de sabor.",
    featured: { name: "Sencillo", price: "$55" }, images: gallery("hot-dogs"),
    items: [
      { name: "Sencillo", price: "$55" }, { name: "Tropical", price: "$89" },
      { name: "3 quesos", price: "$92" }, { name: "AXKAN", price: "$95" },
      { name: "Texano · salchicha de res", price: "$120" },
    ],
  },
  {
    id: "papas", label: "Papas", title: "Papas", icon: "▥", theme: "yellow",
    description: "Papas crujientes con nuestras combinaciones de quesos, salsas y toppings.",
    note: "Ingredientes extra $15", featured: { name: "Papas a la francesa", price: "$61" },
    images: gallery("papas"),
    items: [
      { name: "Papas a la francesa", price: "$61" }, { name: "Papas gratinadas", price: "$71" },
      { name: "Papas AXKAN", price: "$90" }, { name: "Papas Hot AXKAN", price: "$95" },
      { name: "Papas locas", price: "$70" }, { name: "Papas al oil", price: "$65" },
      { name: "Papas gajo", price: "$70" }, { name: "Papas queso y tocino", price: "$90" },
    ],
  },
  {
    id: "snacks", label: "Snacks", title: "Snacks", icon: "◇", theme: "pink",
    description: "Botanas para compartir, servidas calientes y con mucho sabor.",
    featured: { name: "Nachos", price: "$65" }, images: gallery("snacks"),
    items: [
      { name: "Salchicha diabla", price: "$60" }, { name: "Salchicha con queso", price: "$65" },
      { name: "Nachos", price: "$65" }, { name: "Aros de cebolla", price: "$65" },
      { name: "Dedos de queso", price: "$80" }, { name: "Plato de carnes y quesos", price: "$115" },
      { name: "Charola botanera", price: "$220" }, { name: "AXKAN Box", price: "$385" },
    ],
  },
  {
    id: "burritos", label: "Burritos", title: "Burritos", icon: "◒", theme: "purple",
    description: "Tortilla dorada y relleno abundante preparado al momento.",
    featured: { name: "Pollo", price: "$67" }, images: gallery("burritos"),
    items: [
      { name: "Pollo", price: "$67" }, { name: "Arrachera", price: "$80" },
      { name: "Camarón", price: "$90" }, { name: "Mar y Tierra", price: "$95" },
    ],
  },
  {
    id: "baguette", label: "Baguette", title: "Baguette", icon: "▰", theme: "green",
    description: "Pan crujiente con arrachera a la plancha y aderezos de la casa.",
    featured: { name: "Baguette de arrachera", price: "$110" }, images: gallery("baguette"),
    items: [{ name: "Baguette de arrachera", price: "$110" }],
  },
  {
    id: "bebidas-calientes", label: "Calientes", title: "Bebidas calientes", icon: "☕", theme: "green",
    description: "Bebidas calientes para acompañar tu comida o cerrar con algo reconfortante.",
    featured: { name: "Café lechero", price: "$25" }, images: gallery("bebidas-calientes"),
    items: [
      { name: "Café americano", price: "$20" }, { name: "Café lechero", price: "$25" },
      { name: "Café irlandés", price: "$45" }, { name: "Tisana", price: "$35" },
    ],
  },
  {
    id: "bebidas", label: "Bebidas", title: "Bebidas", icon: "◉", theme: "pink",
    description: "Opciones frías, refrescantes y preparadas para todos los gustos.",
    featured: { name: "Malteada", price: "$40", detail: "Chocolate, vainilla o fresa" },
    images: gallery("bebidas"),
    items: [
      { name: "Cerveza de media", price: "$32" },
      { name: "Cerveza premium de media", price: "$37", detail: "XX Ámbar, Ultra o Heineken" },
      { name: "Cerveza Bohemia", price: "$42" }, { name: "Tarro chelado", price: "$15" },
      { name: "Tarro michelado", price: "$20" }, { name: "Tarro rojo · Clamato", price: "$25" },
      { name: "Caguama", price: "$70", detail: "XX Lager, Indio, Superior o Tecate" },
      { name: "Caguama Heineken", price: "$80" }, { name: "Michelada tradicional", price: "$77" },
      { name: "Michelada roja", price: "$83" }, { name: "Jarra clericot", price: "$150" },
      { name: "Tarro clericot", price: "$45" }, { name: "Refresco", price: "$30" },
      { name: "Boing", price: "$25" }, { name: "Limonada natural", price: "$30" },
      { name: "Limonada mineral", price: "$35" }, { name: "Naranjada natural", price: "$30" },
      { name: "Naranjada mineral", price: "$35" },
      { name: "Malteada", price: "$40", detail: "Chocolate, vainilla o fresa" },
      { name: "Malteada mazapán", price: "$48" },
    ],
  },
  {
    id: "cantaritos", label: "Cantaritos", title: "Cantaritos", icon: "◒", theme: "orange",
    description: "Bebidas cítricas, frutales y servidas bien frías.",
    featured: { name: "Tequila", price: "$70" }, images: gallery("cantaritos"),
    items: [
      { name: "Vodka tamarindo", price: "$75" }, { name: "Tequila", price: "$70" },
      { name: "Caña Mahuixtlán", price: "$45" },
    ],
  },
  {
    id: "cocteleria", label: "Coctelería", title: "Coctelería", icon: "▽", theme: "aqua",
    description: "Cocteles clásicos con tequila, ron, fruta fresca y hielo.",
    featured: { name: "Paloma", price: "$55" }, images: gallery("cocteleria"),
    items: [
      { name: "Paloma", price: "$55", detail: "Tequila" }, { name: "Tequila Sunrise", price: "$60" },
      { name: "Vampiro", price: "$65" }, { name: "Destornillador", price: "$75" },
      { name: "Mojito", price: "$45", detail: "Ron" }, { name: "Cuba libre", price: "$55" },
      { name: "Piña colada", price: "$60" },
    ],
  },
  {
    id: "cocteleria-axkan", label: "AXKAN drinks", title: "Coctelería AXKAN", icon: "✦", theme: "purple",
    description: "Creaciones de la casa elaboradas con aguardiente de Mahuixtlán.",
    note: "Elaborada con aguardiente de Mahuixtlán",
    featured: { name: "Negro Cósmico", price: "$40" }, images: gallery("cocteleria"),
    items: [
      { name: "Negro Cósmico · Coco AXKAN · Sangre Azul · Cerezo · Caipirinha Mojito", price: "$40" },
      { name: "Mojito y caipirinha", price: "$50", detail: "Fresa, mango, maracuyá o tamarindo" },
    ],
  },
  {
    id: "shots", label: "Shots", title: "Shots", icon: "▿", theme: "purple",
    description: "Shots frutales llenos de color, disponibles individuales o en tabla.",
    note: "Fresa · mora · maracuyá · mango · tamarindo · guanábana · piña · coco · limón",
    featured: { name: "Tabla de shots", price: "$100" }, images: gallery("shots"),
    items: [{ name: "Shot", price: "$10" }, { name: "Tabla de shots", price: "$100" }],
  },
];

export const getMenuSection = (id: string) => menuSections.find((section) => section.id === id);
