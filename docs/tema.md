# Tema visual de ShopGT (T11 · #11)

Basado en los bocetos de [`docs/bocetos/`](bocetos/). Todo el estilo sale de `src/theme/`: **ninguna pantalla define colores, tamaños ni fuentes sueltos.**

```js
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, radius, shadow } from '../theme/spacing';
// o todo junto:
import { colors, typography, spacing, radius, shadow } from '../theme';
```

## Colores

| Nombre | Hex | Uso en los bocetos |
|---|---|---|
| `primary` | `#173F68` | Navy: encabezado, títulos, precios, chip de categoría activo |
| `onPrimary` | `#FFFFFF` | Texto sobre navy |
| `primaryLight` | `#E8EEF5` | Fondo del tab activo (Tienda) |
| `accent` | `#F59E0B` | Naranja: Ver catálogo, botón +, Añadir al carrito, Finalizar compra, Reintentar, badge, descuento |
| `onAccent` | `#173F68` | **Texto/ícono sobre naranja (navy, no blanco)** |
| `background` | `#F3F4F6` | Fondo gris claro de las pantallas |
| `surface` | `#FFFFFF` | Tarjetas, barra de búsqueda, chips inactivos, tab bar |
| `text` | `#1F2937` | Nombre del producto, texto principal |
| `textSecondary` | `#4B5563` | Categoría, descripciones, placeholders, tab inactivo |
| `success` | `#16A34A` | Ícono de compra realizada |
| `error` | `#B91C1C` | Errores |
| `warning` | `#B45309` | Stock bajo |

> ⚠️ **Texto blanco sobre naranja no se lee bien (contraste 2.2:1).** En botones naranja usa `colors.onAccent`.

## Tipografía

| Estilo | Fuente | Ejemplo en los bocetos |
|---|---|---|
| `typography.display` | Poppins Bold 32 | ¡Bienvenido a ShopGT! |
| `typography.h1` | Poppins Bold 28 | Catálogo (encabezado) |
| `typography.logo` | Poppins Bold 28 | ShopGT |
| `typography.h2` | Poppins SemiBold 22 | Nombre en Detalle, ¡Compra realizada! |
| `typography.h3` | Poppins SemiBold 18 | Encuentra tu próximo favorito |
| `typography.price` | Poppins Bold 22 | Q349.00 |
| `typography.button` | Poppins SemiBold 18 | Ver catálogo |
| `typography.body` | Roboto 16 | Descripciones |
| `typography.caption` | Roboto 14 | Tecnología, rating |
| `typography.overline` | Roboto Bold 12 mayúsculas | COMPRAR BIEN SE SIENTE BIEN |

También existen `typography.fontSize` (`small`, `body`, `title`…) y `typography.fontWeight` (`regular`, `bold`…) para estilos sueltos.

## Espaciados, bordes y sombras

- `spacing`: `xs` 4 · `sm` 8 · `md` 16 · `lg` 24 (margen de pantalla) · `xl` 32 · `xxl` 48
- `radius`: `sm` 8 (botón +) · `md` 12 · `lg` 20 (tarjetas, búsqueda, botones grandes) · `pill` 999 (chips, badge)
- `shadow.card`, `shadow.button`

## Ejemplo: botón naranja

```js
<Pressable style={{
  backgroundColor: colors.accent,
  borderRadius: radius.lg,
  paddingVertical: spacing.md,
  alignItems: 'center',
}}>
  <Text style={[typography.button, { color: colors.onAccent }]}>Añadir al carrito</Text>
</Pressable>
```

## Pendiente para P1 (Daniel)

**1. Cargar las fuentes** (opcional; sin esto se usa Roboto del sistema y la app funciona igual):

```bash
npx expo install expo-font @expo-google-fonts/poppins @expo-google-fonts/roboto
```

```js
// App.js
import { useFonts, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold, Poppins_700Bold,
    Roboto_400Regular, Roboto_500Medium, Roboto_700Bold,
  });
  if (!fontsLoaded) return null;
  // ...lo que ya tiene App.js
}
```

Después cambiar `FONTS_LOADED = true` en `src/theme/typography.js`.

**2. Encabezado y tabs como en los bocetos** (en `TiendaStack`, `CarritoStack` y `AppNavigator`):

```js
// Stacks
screenOptions={{
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: colors.onPrimary,
  headerTitleStyle: typography.h1,
  contentStyle: { backgroundColor: colors.background },
}}

// Tabs
screenOptions={{
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textSecondary,
  tabBarActiveBackgroundColor: colors.primaryLight,
  tabBarBadgeStyle: { backgroundColor: colors.accent, color: colors.onAccent },
}}
```

**3. Moneda:** los bocetos muestran precios en quetzales (Q349.00), pero `formatPrice` usa dólares ($). Decidir cuál usar. DummyJSON da los precios en USD.
