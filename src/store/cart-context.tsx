import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

interface CartContextProps extends CartState {
  addToCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);
const ADD_TO_CART = 'ADD_TO_CART';

type CartAction = 
  | { type: typeof ADD_TO_CART; payload: CartItem };


const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedItems = [...state.items, action.payload];
      const updatedTotalAmount = state.totalAmount + action.payload.price;
      const updatedTotalQuantity = state.totalQuantity + 1;
      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        totalQuantity: updatedTotalQuantity,
      };
    default:
      return state;
  }
};


interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItem) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('...');
  }
  return context;
};
