import { createContext, useContext, useMemo, useReducer } from 'react';

// Estado inicial del carrito: una lista de productos, cada uno con su cantidad.
// Cada item tiene la forma: { ...producto, quantity: number }
const initialState = { items: [] };

// Reducer: recibe el estado actual y una acción, y devuelve el nuevo estado.
// Nunca modifica el estado original, siempre devuelve uno nuevo.
export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existe = state.items.some((item) => item.id === action.product.id);
      if (existe) {
        // Si el producto ya está en el carrito, solo se suma una unidad
        return {
          items: state.items.map((item) =>
            item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { items: [...state.items, { ...action.product, quantity: 1 }] };
    }

    case 'REMOVE_FROM_CART':
      return { items: state.items.filter((item) => item.id !== action.id) };

    case 'UPDATE_QUANTITY': {
      // Una cantidad de 0 o menos elimina el producto del carrito
      if (action.quantity <= 0) {
        return { items: state.items.filter((item) => item.id !== action.id) };
      }
      return {
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item
        ),
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

const CartContext = createContext(null);

// Provider que da acceso al carrito a toda la app.
// Se usa una sola vez, envolviendo la navegación en App.js.
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo(() => {
    // El total se calcula a partir de los items, así siempre está actualizado.
    // Se redondea a 2 decimales para evitar errores de coma flotante (ej. 0.1 + 0.2).
    const total =
      Math.round(state.items.reduce((suma, item) => suma + item.price * item.quantity, 0) * 100) /
      100;
    const itemCount = state.items.reduce((suma, item) => suma + item.quantity, 0);

    return {
      items: state.items,
      total,
      itemCount,
      // Agrega una unidad del producto (si ya existe, suma a la cantidad)
      addToCart: (product) => dispatch({ type: 'ADD_TO_CART', product }),
      // Quita el producto del carrito sin importar su cantidad
      removeFromCart: (id) => dispatch({ type: 'REMOVE_FROM_CART', id }),
      // Cambia la cantidad de un producto; con 0 o menos lo elimina
      updateQuantity: (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', id, quantity }),
      // Vacía el carrito completo
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Hook para usar el carrito desde cualquier pantalla o componente.
 * @returns {{
 *   items: Array<Object>, total: number, itemCount: number,
 *   addToCart: Function, removeFromCart: Function,
 *   updateQuantity: Function, clearCart: Function
 * }}
 * @example
 * const { items, total, addToCart } = useCart();
 */
export function useCart() {
  const contexto = useContext(CartContext);
  if (!contexto) {
    throw new Error('useCart debe usarse dentro de un CartProvider.');
  }
  return contexto;
}
