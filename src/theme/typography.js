// src/theme/typography.js
// Tipografía de ShopGT según los bocetos: Poppins para títulos y Roboto para texto. T11 · #11
//   import { typography } from '../theme/typography';
//
// Dos formas de usarla:
//   1) Estilos listos (recomendado):
//        <Text style={[typography.h1, { color: colors.primary }]}>Catálogo</Text>
//   2) Valores sueltos (compatibles con Loader/ErrorMessage):
//        fontSize: typography.fontSize.body, fontWeight: typography.fontWeight.bold
//
// FUENTES: mientras FONTS_LOADED sea false se usa la fuente del sistema (Roboto en
// Android) con el grosor correcto, así la app no falla. Cuando P1 cargue Poppins y
// Roboto en App.js (ver docs/tema.md), cambiar FONTS_LOADED a true.
export const FONTS_LOADED = false;

export const fonts = {
  headingBold: 'Poppins_700Bold',
  headingSemibold: 'Poppins_600SemiBold',
  body: 'Roboto_400Regular',
  bodyMedium: 'Roboto_500Medium',
  bodyBold: 'Roboto_700Bold',
};

const fontSize = {
  xs: 12,
  small: 14,
  body: 16,
  lg: 18,
  title: 22,
  xxl: 28,
  display: 32,
};

const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

// Arma un estilo con la fuente personalizada si está cargada, o con el grosor si no.
const font = (family, weight) => (FONTS_LOADED ? { fontFamily: family } : { fontWeight: weight });

export const typography = {
  fontSize,
  fontWeight,

  // Títulos (Poppins)
  display: { ...font(fonts.headingBold, '700'), fontSize: fontSize.display, lineHeight: 40 },  // "¡Bienvenido a ShopGT!"
  h1: { ...font(fonts.headingBold, '700'), fontSize: fontSize.xxl, lineHeight: 36 },           // título del encabezado
  h2: { ...font(fonts.headingSemibold, '600'), fontSize: fontSize.title, lineHeight: 30 },     // nombre en Detalle, "¡Compra realizada!"
  h3: { ...font(fonts.headingSemibold, '600'), fontSize: fontSize.lg, lineHeight: 26 },        // "Encuentra tu próximo favorito", Total
  logo: { ...font(fonts.headingBold, '700'), fontSize: fontSize.xxl, lineHeight: 34 },         // "ShopGT"

  // Texto (Roboto)
  body: { ...font(fonts.body, '400'), fontSize: fontSize.body, lineHeight: 22 },               // descripciones
  bodyBold: { ...font(fonts.bodyBold, '700'), fontSize: fontSize.body, lineHeight: 22 },
  caption: { ...font(fonts.body, '400'), fontSize: fontSize.small, lineHeight: 18 },           // categoría, rating
  overline: { ...font(fonts.bodyBold, '700'), fontSize: fontSize.xs, lineHeight: 16, letterSpacing: 0.5, textTransform: 'uppercase' }, // "COMPRAR BIEN SE SIENTE BIEN"
  small: { ...font(fonts.bodyMedium, '500'), fontSize: fontSize.xs, lineHeight: 16 },          // badge, etiquetas
  price: { ...font(fonts.headingBold, '700'), fontSize: fontSize.title, lineHeight: 28 },      // precios (Q349.00)
  button: { ...font(fonts.headingSemibold, '600'), fontSize: fontSize.lg, lineHeight: 24 },    // "Ver catálogo"
};

export default typography;
