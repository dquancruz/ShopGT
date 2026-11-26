// src/theme/spacing.js
// Espaciados, bordes y sombras de ShopGT (escala de 4 en 4). T11 · #11
//   import { spacing, radius, shadow } from '../theme/spacing';
//   card: { padding: spacing.md, borderRadius: radius.lg, ...shadow.card }

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,   // padding de tarjetas
  lg: 24,   // margen lateral de las pantallas
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 8,     // botón + de las tarjetas, etiqueta de descuento
  md: 12,    // inputs
  lg: 20,    // tarjetas, barra de búsqueda, botones grandes
  pill: 999, // chips de categoría, badge, botón de perfil
};

export const shadow = {
  card: {
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // Android
  },
  button: {
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
};

// Altura mínima táctil recomendada para botones (accesibilidad).
export const touchTarget = 48;

export default spacing;
