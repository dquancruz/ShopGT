// Formateador reutilizable: crear un Intl.NumberFormat es costoso, por eso se hace una sola vez.
const formateador = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/**
 * Convierte un número en un precio con formato de moneda (USD, siempre 2 decimales).
 * @param {number} valor Precio a formatear.
 * @returns {string} Precio formateado, por ejemplo "$1,299.99".
 * @example
 * formatPrice(1299.9); // "$1,299.90"
 */
export function formatPrice(valor) {
  return formateador.format(valor);
}
