import { ProductGrid, Title } from "@/components";
import { ValidCategory } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
    params: {
        id: ValidCategory;
    }
}

const SeedProducts = initialData.products;

export default function CategoryId({ params }: Props) {
    const { id } = params;
    const products = SeedProducts.filter((product) => product.category === id);

    const labels: Record<ValidCategory, string> = {
        'amortiguadores': 'Amortiguación',
        'frenos': 'Frenos',
        'filtros': 'Filtros'
    }
    // if (id === 'filtros') {
    //     notFound();
    // }

    return (
        <>
        <Title 
          title={`Artículos para ${labels[id]}`}
          subtitle="This is the home page"
          className='mb-10'
        />
        <ProductGrid products={products} />
      </>
    );
}