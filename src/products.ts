export interface MRP {
  currency: string,
  value: number
}

export interface Image {
  height: number;
  position: number;
  id: number;
  width: number;
  src: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  MRP: MRP;
  discountPercent: number;
  images: Image[];
  price: MRP;
  shopifyId: number;
  title: string;
  vendor: string;
  brand: Brand[];
}

export const products: Product[] = [
  {
    MRP: { currency: 'INR', value: 2499 },
    brand: [
      { id: '635fa72cf9432ef244462b70', name: 'Purezento' }
    ],
    discountPercent: 40,
    id: "65015e4fce3b8d5927458584",
    images: [ {
      "id": 41064914321639,
      "position": 1,
      "width": 1080,
      "height": 1440,
      "src": "https://cdn.shopify.com/s/files/1/0645/8559/7159/files/1080_1440px_0001_PVNDW12I-5.jpg?v=1693991637"
  }],
    price: { value: 1499, currency: 'INR' },
    shopifyId: 8476969566439,
    title: "Nordic Donut Vase",
    vendor: "PUREZENTO.IN",
  }, {
    MRP: { currency: 'INR', value: 799 },
brand: [{ id: '635fa72cf9432ef244462b70', name: 'Purezento'  }],
discountPercent: 5,
id: "656d7393271e513e37410f59",
images: [{
  "id": 31419749400714,
  "position": 1,
  "width": 1080,
  "height": 1440,
  "src": "https://cdn.shopify.com/s/files/1/0334/2781/6586/products/DH1SAIYEWDBLA21_1.jpg?v=1670406620"
}],
price: { value: 759, currency: 'INR' },
shopifyId: 8746861330716,
title: "Pretty Pink Please Planter",
vendor: "THE ORBY HOUSE"
  }
  // Add more products as needed
];
