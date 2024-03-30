import { getPaginationProducts } from "@/actions";
import { PaginationItems, ProductGrid, Title } from "@/components";
import { Category } from "@prisma/client";
import { redirect } from "next/navigation";

interface Props {
    params: {
        id: string;
    },
    searchParams: {
        page?: string;
    }
}

export default async function CategoryId({ params, searchParams }: Props) {
    const { id } = params;

    const page = searchParams.page ? parseInt(searchParams.page) : 1;
    const { products, currentPage, totalPages } = await getPaginationProducts({ page, categoryId: id as Category['name']});

    if (products.length === 0) {
        redirect(`/category/${ id }`);
    }

    const labels: Record<string, string> = {
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

        <PaginationItems totalPages={totalPages}/>
      </>
    );
}