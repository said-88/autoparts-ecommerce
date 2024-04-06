"use client";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { ProductImage } from '@/components';
import { createUpdateProduct, deleteProductImage } from "@/actions";
import { Category, SeedProduct, ProductImage as ProductWithImage } from "@/interfaces";

interface Props {
    product: Partial<SeedProduct> & { ProductImage?: ProductWithImage[] };
    categories: Category[];
}

const compatibleCarModels = ["nissan", "mercedez-benz", "ford", "suzuki", "renault", "dodge"];

interface FormInputs {
    title: string;
    slug: string;
    description: string;
    price: number;
    inStock: number;
    compatibleCarModels: string[];
    productNumber: string;
    type: string;
    brand: string;
    categoryId: string;
    images?: FileList;
}

export const ProductForm = ({ product, categories }: Props) => {

    const router = useRouter();

    const {
        handleSubmit,
        register,
        formState: { isValid },
        getValues,
        setValue,
        watch,
    } = useForm<FormInputs>({
        defaultValues: {
            ...product,

            compatibleCarModels: product.compatibleCarModels ?? [],
            images: undefined,
        },
    });

    watch("compatibleCarModels");

    const onSizeChanged = (compatibleCarModels: string) => {
        const models = new Set(getValues("compatibleCarModels"));
        models.has(compatibleCarModels) ? models.delete(compatibleCarModels) : models.add(compatibleCarModels);
        setValue("compatibleCarModels", Array.from(models));
    };

    const onSubmit = async (data: FormInputs) => {
        const formData = new FormData();

        const { images, ...productToSave } = data;

        if (product.id) {
            formData.append("id", product.id ?? "");
        }

        formData.append("title", productToSave.title);
        formData.append("slug", productToSave.slug);
        formData.append("description", productToSave.description);
        formData.append("price", productToSave.price.toString());
        formData.append("productNumber", productToSave.productNumber);
        formData.append("inStock", productToSave.inStock.toString());
        formData.append("compatibleCarModels", productToSave.compatibleCarModels.toString());
        formData.append("type", productToSave.type);
        formData.append("categoryId", productToSave.categoryId);
        formData.append("brand", productToSave.brand);

        if (images) {
            for (let i = 0; i < images.length; i++) {
                formData.append('images', images[i]);
            }
        }



        const { ok, product: updatedProduct } = await createUpdateProduct(formData);

        if (!ok) {
            alert('Producto no se pudo actualizar');
            return;
        }

        router.replace(`/admin/product/${updatedProduct?.slug}`)


    };
   
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3"
        >
            {/* Textos */}
            <div className="w-full">
                <div className="flex flex-col mb-2">
                    <span>Título</span>
                    <input
                        type="text"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("title", { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span>Slug</span>
                    <input
                        type="text"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("slug", { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span>Descripción</span>
                    <textarea
                        rows={5}
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("description", { required: true })}
                    ></textarea>
                </div>

                <div className="flex flex-col mb-2">
                    <span>Price</span>
                    <input
                        type="number"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("price", { required: true, min: 0 })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span>Tipo</span>
                    <input
                        type="text"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("type", { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span>Marcas</span>
                    <select
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("brand", { required: true })}
                    >
                        <option value="mahle original">MAHLE ORIGINAL</option>
                        <option value="ridex">RIDEX</option>
                        <option value="abakus">ABAKUS</option>
                        <option value="ashika">ASHIKA</option>
                    </select>
                </div>

                <div className="flex flex-col mb-2">
                    <span>Categoria</span>
                    <select
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("categoryId", { required: true })}
                    >
                        <option value="">[Seleccione]</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button className=" bg-slate-300 flex mx-auto items-center justify-center min-h-10 rounded w-1/2">Guardar</button>
            </div>

            {/* Selector de tallas y fotos */}
            <div className="w-full">
                <div className="flex flex-col mb-2">
                    <span>Inventario</span>
                    <input
                        type="number"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("inStock", { required: true, min: 0 })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span>Número Producto</span>
                    <input
                        type="text"
                        className="p-2 border rounded-md bg-gray-200"
                        {...register("productNumber", { required: true, min: 0 })}
                    />
                </div>

                {/* As checkboxes */}
                <div className="flex flex-col">
                    <span>Modelos Compatibles</span>
                    <div className="flex flex-wrap">
                        {compatibleCarModels.map((model) => (
                            // bg-blue-500 text-white <--- si está seleccionado
                            <div
                                key={model}
                                onClick={() => onSizeChanged(model)}
                                className={clsx(
                                    "p-2 border cursor-pointer rounded-md mr-2 mb-2 w-auto transition-all text-center",
                                    {
                                        "bg-blue-500 text-white": getValues("compatibleCarModels").includes(model),
                                    }
                                )}
                            >
                                <span>{model}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col mb-2">
                        <span>Fotos</span>
                        <input
                            type="file"
                            {...register('images')}
                            multiple
                            className="p-2 border rounded-md bg-gray-200"
                            accept="image/png, image/jpg, image/avif, image/jpeg"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {product.ProductImage?.map((image) => (
                            <div key={image.id}>
                                <ProductImage
                                    alt={product.title ?? ""}
                                    src={image.url}
                                    width={300}
                                    height={300}
                                    className="rounded-t shadow-md"
                                />

                                <button
                                    type="button"
                                    onClick={() => deleteProductImage(image.id, image.url)}
                                    className="bg-red-500 w-full rounded-b-xl"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </form>
    );
};