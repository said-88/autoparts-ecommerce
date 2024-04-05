export const revalidate = 60;
import { getPaginationProducts } from '@/actions';
import { PaginationItems, ProductGrid, Title } from '@/components'
import { redirect } from 'next/navigation';


interface Props {
  searchParams: {
    page?: string;
  }
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } = await getPaginationProducts({page});
  
  if (products.length === 0) {
    redirect('/');
  }

  return (
    <>
      <Title 
        title="Tienda"
        subtitle="Todos los productos"
        className='mb-10'
      />
      <ProductGrid products={products} />
      <div className='m-5'>
        <PaginationItems totalPages={ totalPages }/>
      </div>
    </>
  )
}
