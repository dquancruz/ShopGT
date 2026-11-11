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
