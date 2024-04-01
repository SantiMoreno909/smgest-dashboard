import { useState, useEffect } from "react";
import { getProducts } from "../service/product.service";

const obtenerCategoryCount = (productos) => {
  // Array para almacenar las categorías únicas
  let categorias = [];
  // Contador para contar las categorías únicas no encontradas
  let contadorCategoriasNoEncontradas = 0;

  // Recorrer todos los productos
  productos.forEach((producto) => {
    const { category } = producto;

    // Verificar si la categoría ya está en el array de categorías
    if (!categorias.includes(category)) {
      // Si no se encuentra, incrementar el contador y agregar la categoría al array
      contadorCategoriasNoEncontradas++;
      categorias.push(category);
    }
  });

  // Asignar la longitud del array de categorías al categoryCount
  const categoryCount = categorias.length;

  return categoryCount;
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

        // Contar la cantidad de productos por categoría
        const countByCategory = result.productos.reduce((acc, product) => {
          acc[product.categoryId] = acc[product.categoryId]
            ? acc[product.categoryId] + 1
            : 1;
          return acc;
        }, {});

        // Agrupar productos por categoría
        const productsByCategory = result.productos.reduce((acc, product) => {
          const { categoryId } = product;
          if (!acc[categoryId]) {
            acc[categoryId] = [];
          }
          acc[categoryId].push(product);
          return acc;
        }, {});

        // Obtener la cantidad de categorías únicas
        const categoryCount = obtenerCategoryCount(result.productos);

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
