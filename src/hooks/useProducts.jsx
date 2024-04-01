import { useState, useEffect } from "react";
import { getProducts } from "../service/product.service";

// Función para obtener la cantidad de categorías únicas y las categorías
const obtenerCategoryCount = (productos) => {
  let categorias = [];

  productos.forEach((producto) => {
    const { category } = producto;

    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  });

  const categoryCount = categorias.length;

  return {
    categoryCount: categoryCount,
    categorias: categorias,
  };
};

// Función para agrupar productos por categoría
const agruparProductosPorCategoria = (categorias, productos) => {
  let productosPorCategoria = {};

  categorias.forEach((categoria) => {
    productosPorCategoria[categoria] = [];
  });

  productos.forEach((producto) => {
    const { category } = producto;

    if (productosPorCategoria.hasOwnProperty(category)) {
      productosPorCategoria[category].push(producto);
    }
  });

  return productosPorCategoria;
};

const useProduct = () => {
  const [products, setProducts] = useState({
    count: 0,
    countByCategory: {},
    productos: [],
    productsByCategory: {},
    categoryCount: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getProducts();
        const totalCount = result.productos.length;

        // Obtener la cantidad de categorías únicas y las categorías
        const { categoryCount, categorias } = obtenerCategoryCount(
          result.productos
        );

        // Agrupar productos por categoría
        const productsByCategory = agruparProductosPorCategoria(
          categorias,
          result.productos
        );

        // Contar la cantidad de productos por categoría
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
          productsByCategory: productsByCategory,
          categoryCount: categoryCount,
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
    productsByCategory: products.productsByCategory,
    categoryCount: products.categoryCount,
  };
};

export { useProduct };
