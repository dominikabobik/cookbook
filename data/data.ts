export interface RecipeData {
  title: string;
  link: string;
  filters: string[];
}
export const RecipeList: RecipeData[] = [
  {
    title: "Barszcz",
    link: "barszcz",
    filters: ["swieta"],
  },
  {
    title: "Pierogi",
    link: "pierogi",
    filters: ["swieta"],
  },
  {
    title: "Sernik",
    link: "sernik",
    filters: ["deser"],
  },
  {
    title: "Skubaniec",
    link: "skubaniec",
    filters: ["deser"],
  },
  {
    title: "Krupnik",
    link: "krupnik",
    filters: ["obiad", "zupa"],
  },
  {
    title: "Ogórkowa",
    link: "ogorkowa",
    filters: ["obiad", "zupa"],
  },
  {
    title: "Pomidorowa",
    link: "pomidorowa",
    filters: ["obiad", "zupa"],
  },
  {
    title: "Rosół",
    link: "rosol",
    filters: ["obiad", "zupa"],
  },
  {
    title: "Pieczone naleśniki",
    link: "pieczone-nalesniki",
    filters: ["sniadanie"],
  },
  {
    title: "Chleb Bananowy",
    link: "chleb-bananowy",
    filters: ["sniadanie", "deser"],
  },
  {
    title: "Szarlotka",
    link: "szarlotka",
    filters: ["deser"],
  },
  {
    title: "Ogórki Małosolne",
    link: "ogorki-malosolne",
    filters: [],
  },
  {
    title: "Budyń",
    link: "budyn",
    filters: ["deser"],
  },
  {
    title: "Chleb",
    link: "chleb",
    filters: [""],
  },
  {
    title: "Ciasto ze śliwkami",
    link: "ciasto-sliwka",
    filters: ["deser"],
  },
];
