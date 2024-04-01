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
        const totalCount = result.productos.length;
        const countByCategory = result.productos.reduce((acc, product) => {
          acc[product.categoryId] = acc[product.categoryId]
            ? acc[product.categoryId] + 1
            : 1;
          return acc;
        }, {});
        setProducts({
          count: totalCount,
          countByCategory: countByCategory,
          productos: result.productos,
        });
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
