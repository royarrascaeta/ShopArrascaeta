const db = [
  {
    id: 1,
    name: "Producto 1",
    pictureUrl: "https://via.placeholder.com/300/023e8a/FFFFFF",
    description: "Descripción de producto 1",
    price: 8499,
    stock: 8
  },
  {
    id: 2,
    name: "Producto 2",
    pictureUrl: "https://via.placeholder.com/300/0077b6/FFFFFF",
    description: "Descripción de producto 2",
    price: 6899,
    stock: 3
  },
  {
    id: 3,
    name: "Producto 3",
    pictureUrl: "https://via.placeholder.com/300/0096c7/FFFFFF",
    description: "Descripción de producto 3",
    price: 7459,
    stock: 15
  },
  {
    id: 4,
    name: "Producto 4",
    pictureUrl: "https://via.placeholder.com/300/00b4d8/FFFFFF",
    description: "Descripción de producto 4",
    price: 2499,
    stock: 2
  },
  {
    id: 5,
    name: "Producto 5",
    pictureUrl: "https://via.placeholder.com/300/48cae4/FFFFFF",
    description: "Descripción de producto 5",
    price: 6399,
    stock: 6
  },
  {
    id: 6,
    name: "Producto 6",
    pictureUrl: "https://via.placeholder.com/300/90e0ef/FFFFFF",
    description: "Descripción de producto 6",
    price: 9459,
    stock: 3
  },
];

export const getData = new Promise((res, rej) => {
    setTimeout(() => {
      res(db);
    }, 2000);
})

export const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(db[0]);
    }, 2000);
})