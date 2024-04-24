export type Tproduct = {
  name: string;
  title: string;
  price: number;
  ratings: number;
  description: string;
  flashSale: boolean;
  category:string
  _id: string;
  image: string;
};
export type TflasProduct = {
  data: Tproduct[];
  Sectiontitle: string;
  route: string;
};


export type SearchParams = {
  category: string;
  price: string;
  rating: string;
};
export type Inputs = {
  name: string;
  email: string;
  password: any;
};