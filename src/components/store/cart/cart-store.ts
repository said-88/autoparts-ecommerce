import { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    cart: CartProduct[];
    addProductToCart: (product: CartProduct) => void;
    updateProductQuantity: (product: CartProduct, quantity: number) => void;
    removeProduct: (product: CartProduct) => void;
    getTotalItems: () => number;

    getSummaryInformation: () => {
        subTotal: number;
        tax: number;
        total: number;
        itemsInCart: number;
      };
    
    clearCart: () => void;
}

export const useCartStore = create<State, [["zustand/persist", State]]>(
    persist(
        (set, get) => ({
            cart: [],
            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.quantity, 0);
            },

            getSummaryInformation: () => {
                const { cart } = get();
        
                const subTotal = cart.reduce(
                  (subTotal, product) => product.quantity * product.price + subTotal,
                  0
                );
                const tax = subTotal * 0.15;
                const total = subTotal + tax;
                const itemsInCart = cart.reduce(
                  (total, item) => total + item.quantity,
                  0
                );
        
                return {
                  subTotal,
                  tax,
                  total,
                  itemsInCart,
                };
              },

            addProductToCart: (product: CartProduct) => {
                const { cart } = get();
        
                const productInCart = cart.some( (cartProduct) => cartProduct.id === product.id);
        
                if (!productInCart) {
                    set({ cart: [...cart, product] });
                    return;
                }
        
                const updatedCart = cart.map( (cartProduct) => {
                    if (cartProduct.id === product.id) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + product.quantity
                        }
                    }
                    return cartProduct;
                })
                set({ cart: updatedCart });
            },

            updateProductQuantity: (product: CartProduct, quantity: number) => {
                const { cart } = get();
                const updatedCart = cart.map( (cartProduct) => {
                    if (cartProduct.id === product.id) {
                        return {
                            ...cartProduct,
                            quantity
                        }
                    }
                    return cartProduct;
                })
                set({ cart: updatedCart });
            },

            removeProduct: (product: CartProduct) => {
                const { cart } = get();
                const updatedCart = cart.filter( (cartProduct) => cartProduct.id !== product.id );
                set({ cart: updatedCart });
            },
            
            clearCart: () => {
                set({ cart: [] });
            },
        }),
        {
            name: 'cart-storage'
        }
    )    
);