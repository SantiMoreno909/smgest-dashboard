import { useState, useEffect } from "react";
import { getProducts } from "../service/product.service";

const useProduct = () => {
  const [products, setProducts] = useState({
    count: 0,
    countByCategory: {},
    productos: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getProducts();
        setProducts(result);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    }

    fetchData();
  }, []);

  return {
    count: products.count,
    countByCategory: products.countByCategory,
    productos: products.productos,
  };
};

export { useProduct };
