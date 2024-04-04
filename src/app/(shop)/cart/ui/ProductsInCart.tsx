'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { QuantitySelector } from "@/components";
import { useCartStore } from "@/components/store";
import { ProductImage } from "@/components/product/product-image/ProductImage";


export const ProductsInCart = () => {
    const updateProductQuantity = useCartStore( state => state.updateProductQuantity );
    const removeProduct = useCartStore( state => state.removeProduct );
  
    const [loaded, setLoaded] = useState(false);
    const productsInCart = useCartStore( state => state.cart );
  
  
    useEffect(() => {
      setLoaded(true) ;
    },[]);
  
  
  
  
    if( !loaded ) {
      return <p>Loading...</p>
    }
  
    return (
      <>
        {productsInCart.map((product, key) => (
          <div key={ `${ product.slug }- ${ key }` } className="flex mb-5">
            <ProductImage
              src={product.image }
              width={100}
              height={100}
              style={{
                width: "100px",
                height: "100px",
              }}
              alt={product.title}
              className="mr-5 rounded"
            />
  
            <div>
              <Link 
                className="hover:underline cursor-pointer"
                href={ `/product/${ product.slug } ` }>
                    - {product.title}
              </Link>
              
              <p>${product.price}</p>
              <QuantitySelector 
                quantity={ product.quantity } 
                onQuantityChange={ quantity => updateProductQuantity(product, quantity) }
              />
  
              <button 
                onClick={ () => removeProduct(product) }
                className="underline mt-3">Remover</button>
            </div>
          </div>
        ))}
      </>
    );
}
