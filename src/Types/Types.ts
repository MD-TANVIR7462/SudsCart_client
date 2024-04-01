export type Tproduct = {
  name: string;
  title: string;
  price: number;
  ratings: number;
  description: string;
  flashSale: boolean;
  _id: string;
  image: string;
};
export type TflasProduct = {
  data: Tproduct[];
  Sectiontitle: string;
  route: string;
};
