'use client';
import { SeedProduct } from "@/interfaces"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
    product: SeedProduct;
}

export const ProductGridItem = ({product}: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  
  const handleMouseEnter = () => {
    setDisplayImage(product.images[1]);
  }

  const handleMouseLeave = () => {
    setDisplayImage(product.images[0]);
  }

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
      <Image
        src={`/products/${displayImage}`}
        alt={product.title}
        width={500}
        height={300}
        objectFit="cover"
        style={{
          width: "90%",
          height: "400px",
        }}
        priority={true}
        className="rounded border-2 border-gray-200 hover:border-blue-500 transition-all cursor-pointer"
        onMouseEnter= {handleMouseEnter}
        onMouseLeave= {handleMouseLeave}
      />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-500" href={`/product${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">L{ product.price }</span>
      </div>
    </div>
  )
}
