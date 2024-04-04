'use client';
import { QuantitySelector } from "@/components"
import { useCartStore } from "@/components/store";
import { CartProduct, SeedProduct } from "@/interfaces";
import { useState } from "react";

interface Props {
    product: SeedProduct;
}

export const AddToCart = ({ product }: Props) => {
    const addProductToCart = useCartStore( state => state.addProductToCart)
    const [quantity, setQuantity] = useState<number>(1);
    // const [posted, setPosted] = useState(false);

    const AddToCart = () => {

        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quantity,
            image: product.images[0]
        }
        addProductToCart(cartProduct);
        setQuantity(1);
    }
  return (
    <>
        {/* Quantity Selector */}
        <QuantitySelector quantity={ quantity } onQuantityChange={ setQuantity }/>
                
        <button className="p-3 rounded my-5 bg-slate-200" onClick={ AddToCart }>
            Agregar al Carrito
        </button>
    </>
  )
}
