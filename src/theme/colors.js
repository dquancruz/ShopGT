// src/theme/colors.js
// Paleta de ShopGT basada en los bocetos de Figma (docs/bocetos/). T11 · #11
// NINGUNA pantalla debe escribir colores sueltos: todo sale de aquí.
//   import { colors } from '../theme/colors';
//
// Contraste verificado (WCAG AA, mínimo 4.5 : 1):
//   blanco sobre navy (encabezado, chip activo) ..... 10.8 : 1
//   navy sobre naranja (botones principales) ........  5.0 : 1
//   text sobre background (gris claro) .............. 13.3 : 1
//   textSecondary sobre background / surface ........  6.9 : 1
//   error / success / warning sobre blanco .......... ≥ 5.0 : 1
//
// ⚠️ NO usar texto blanco sobre el naranja: da 2.2 : 1 (no se lee bien).
//    En botones naranja el texto/ícono va con colors.onAccent (navy).

export const colors = {
  // Marca
  primary: '#173F68',       // navy: encabezado, títulos, precios, chip de categoría activo
  primaryLight: '#E8EEF5',  // fondo del tab activo y de chips suaves
  onPrimary: '#FFFFFF',     // texto/íconos sobre navy

  accent: '#F59E0B',        // naranja: Ver catálogo, botón +, Añadir al carrito, Finalizar compra, Reintentar, badge
  accentPressed: '#D97706', // naranja presionado
  onAccent: '#173F68',      // texto/ícono sobre naranja (navy, como en los bocetos)

  // Superficies
  background: '#F3F4F6',    // fondo gris claro de las pantallas
  surface: '#FFFFFF',       // tarjetas, barra de búsqueda, chips inactivos, tab bar
  border: '#E5E7EB',        // bordes y separadores

  // Texto
  text: '#1F2937',          // texto principal (nombre del producto)
  textSecondary: '#4B5563', // categoría, descripciones, placeholders, tab inactivo
  textMuted: '#4B5563',     // alias de textSecondary

  // Estados
  success: '#16A34A',       // ícono de compra realizada (solo ícono/fondo)
  successText: '#15803D',   // texto verde
  warning: '#B45309',       // stock bajo
  error: '#B91C1C',         // mensajes de error
  rating: '#F59E0B',        // estrellas
  disabled: '#9CA3AF',      // botón deshabilitado (no para texto importante)

  // Sombras / overlays
  shadow: '#000000',
  overlay: 'rgba(0, 0, 0, 0.4)',
};

export default colors;
