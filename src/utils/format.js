import { DUMMY_DATA } from "./data";

const merchandise_data = DUMMY_DATA;

const formattedPriceOfMerchandiseData = merchandise_data.map((item) => ({
  ...item,
  price: Intl.NumberFormat("en-nz", {
    style: "currency",
    currency: "nzd",
  }).format(item.price),
}));

export const PLANT_DATA = formattedPriceOfMerchandiseData;
