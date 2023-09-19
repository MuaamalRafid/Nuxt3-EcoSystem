import { defineStore } from "pinia";
export const useProductsStore = defineStore("products", () => {
  const data = ref([
    {
      id: "1",
      name: "Lexma G88",
      price: "22.69",
      description: "This is product 1 description",
      image:
        "https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-pink-products-png-image_9114943.png",
      category: "mouse",
    },
    {
      id: "2",
      name: "Lexma G88",
      price: "20.88",
      description: "This is product 2 description",
      image: "https://astorekw.com/web/image/product.template/74439/image",
      category: "mouse",
    },
    {
      id: "3",
      name: "Lexma G88",
      price: "50.99",
      description: "This is product 3 description",
      image:
        "https://madastore.ps/storage/media/1SCAtD7v5xz66XFXQ6YMC66mpi5EPtjf9VE0NRU1.png",
      category: "mouse",
    },
    {
      id: "4",
      name: "Lexma G88",
      price: "22.69",
      description: "This is product 4 description",
      image:
        "https://www.omen.com/content/dam/sites/omen/worldwide/laptops/2022-omen-16-intel/Hero%20Image%201.png",
      category: "mouse",
    },
    {
      id: "5",
      name: "Lexma G88",
      price: "20.88",
      description: "This is product 5 description",
      image:
        "https://freepngimg.com/save/162894-gaming-keyboard-free-png-hq/1368x805",
      category: "mouse",
    },
    {
      id: "6",
      name: "Lexma G88",
      price: "50.99",
      description: "This is product 6 description",
      image: "https://www.pngmart.com/files/23/Router-PNG-Photos.png",
      category: "mouse",
    },
    {
      id: "7",
      name: "Lexma G88",
      price: "22.69",
      description: "This is product 7 description",
      image: "",
      category: "mouse",
    },
    {
      id: "8",
      name: "Lexma G88",
      price: "20.88",
      description: "This is product 8 description",
      image: "",
      category: "mouse",
    },
  ]);

  return {
    data,
  };
});
