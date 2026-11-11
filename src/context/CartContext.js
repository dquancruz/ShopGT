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
