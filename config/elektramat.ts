// config/elektramat.ts

export const elektramatConfig = {
  name: "Elektramat",
  startUrls: ["https://www.elektramat.nl"],
  baseUrl: "https://www.elektramat.nl",
  categories: [
    "groepenkasten",
    "groepenkast-componenten",
    "schakelmateriaal",
    "installatiemateriaal",
    "draad-en-kabel",
    "laadpaal",
    "elektrabuizen",
    "bevestiging",
    "verlichting",
    "netwerk-internet",
    "gereedschap",
    "zonnepaneel-materiaal",
    "ucht-en-ventilatie",
    "water-aanvoer-afvoer",
    "verwarming-en-koeling",
  ],
  selectors: {
    categoryLinks: (category: string) => `${category}/**`,
    productLinks: ".item.product.product-item a",
    productTitle: "title",
  },
  labels: {
    category: "category",
    product: "PDP",
  },
};

export type WebsiteConfig = typeof elektramatConfig;
