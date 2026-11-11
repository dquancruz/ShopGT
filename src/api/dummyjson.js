// Servicio para consumir la API pública de DummyJSON.
// Documentación: https://dummyjson.com/docs/products

// URL base de la API. Es la única constante que hay que cambiar si la API se mueve.
export const BASE_URL = 'https://dummyjson.com';

/**
 * Hace una petición GET a la API y devuelve el JSON de la respuesta.
 * Si algo falla, lanza un Error con un mensaje claro en español.
 * @param {string} ruta Ruta relativa a BASE_URL, por ejemplo '/products/1'.
 * @returns {Promise<any>} Datos ya convertidos desde JSON.
 */
async function request(ruta) {
  let respuesta;

  try {
    respuesta = await fetch(`${BASE_URL}${ruta}`);
  } catch (error) {
    // fetch solo lanza error cuando no hay conexión o no se pudo llegar al servidor
    throw new Error('No se pudo conectar con el servidor. Revisa tu conexión a internet.');
  }

  if (!respuesta.ok) {
    if (respuesta.status === 404) {
      throw new Error('No se encontró lo que buscas.');
    }
    throw new Error(`El servidor respondió con un error (código ${respuesta.status}).`);
  }

  try {
    return await respuesta.json();
  } catch (error) {
    throw new Error('La respuesta del servidor no es válida.');
  }
}

/**
 * Obtiene todos los productos de la tienda.
 * @returns {Promise<Array<Object>>} Lista de productos (id, title, price, thumbnail, etc.).
 * @example
 * const productos = await getProducts();
 */
export async function getProducts() {
  // limit=0 le pide a DummyJSON todos los productos en vez de solo los primeros 30
  const datos = await request('/products?limit=0');
  return datos.products;
}

/**
 * Busca productos por texto (nombre, descripción, marca...).
 * @param {string} q Texto a buscar.
 * @returns {Promise<Array<Object>>} Productos que coinciden; arreglo vacío si no hay.
 * @example
 * const resultados = await searchProducts('phone');
 */
export async function searchProducts(q) {
  const datos = await request(`/products/search?q=${encodeURIComponent(q)}&limit=0`);
  return datos.products;
}

/**
 * Obtiene el detalle completo de un producto.
 * @param {number|string} id Identificador del producto.
 * @returns {Promise<Object>} El producto (incluye images, description, rating, reviews, etc.).
 * @example
 * const producto = await getProductById(1);
 */
export async function getProductById(id) {
  return request(`/products/${id}`);
}

/**
 * Obtiene la lista de categorías disponibles.
 * @returns {Promise<Array<{slug: string, name: string, url: string}>>} Categorías;
 *   usa `slug` para pedir sus productos y `name` para mostrarlas al usuario.
 * @example
 * const categorias = await getCategories();
 */
export async function getCategories() {
  return request('/products/categories');
}

/**
 * Obtiene los productos de una categoría.
 * @param {string} slug Identificador de la categoría (por ejemplo 'smartphones').
 * @returns {Promise<Array<Object>>} Productos de esa categoría.
 * @example
 * const celulares = await getProductsByCategory('smartphones');
 */
export async function getProductsByCategory(slug) {
  const datos = await request(`/products/category/${encodeURIComponent(slug)}?limit=0`);
  return datos.products;
}
