import { ProductGrid, Title } from '@/components'
import { initialData } from '@/seed/seed'

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title 
        title="Home"
        subtitle="This is the home page"
        className='mb-10'
      />
      <ProductGrid products={products} />
    </>
  )
}
