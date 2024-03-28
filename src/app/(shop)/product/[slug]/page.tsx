import { QuantitySelector, SlideShow } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        slug: string;
    }
}

export default function Product({ params }: Props) {
    const { slug } = params;
    const product = initialData.products.find((product) => product.slug === slug);

    if (!product) {
        return notFound();
    }
    return (
        <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">
            {/* Slide */}
            <div className="m-auto p-10 col-span-1 md:col-span-2">
                <SlideShow 
                    images={product.images}
                    title={product.title}
                />
            </div>

            {/* Detail */}
            <div className="col-span-1 px-5 md:mt-10">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">HNL{ product.price }</p>

                {/*  Selector */}
                {/* Quantity Selector */}
                <QuantitySelector quantity={1} />
                
                <button className="p-3 rounded my-5 bg-slate-200 ">
                Agregar al carrito
                </button>

                {/* Description */}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-light">{ product.description }</p>
            </div>
         
        </div>
    );
}