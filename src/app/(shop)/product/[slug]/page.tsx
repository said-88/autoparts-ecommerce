export const revalidate = 604800; // 7 days
import { QuantitySelector, SlideShow } from "@/components";
import { Metadata, ResolvingMetadata } from "next";
import { getProductBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface Props {
    params: {
        slug: string;
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug;
  
    // fetch data
    const product = await getProductBySlug(slug);
  
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
  
    return {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      openGraph: {
        title: product?.title ?? "Producto no encontrado",
        description: product?.description ?? "",
        // images: [], // https://misitioweb.com/products/image.png
        images: [ `/products/${ product?.images[1] }`],
      },
    };
  }

export default async function Product({ params }: Props) {
    const { slug } = params;
    const product = await getProductBySlug(slug);
    
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
                  Stock: {product.inStock}
                </h1>
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">${ product.price }</p>

                <AddToCart product={ product }/>

                {/* Description */}
                <h3 className="font-bold text-sm">Descripción</h3>
                <p className="font-light">{ product.description }</p>
            </div>    
        </div>
    );
}