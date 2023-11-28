import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from '../../Components/ProductDetail'
import { useContext } from "react";
import { ShoppingCarContext } from '../../Context/index';

function Home() {

  const context = useContext(ShoppingCarContext);

  const validateInformationToShow = () => {
    if (context.filteredProducts?.length > 0) {
      return (
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            context.filteredProducts?.map(product => (
              <Card key={product.id} data={product} />
            ))
          }
        </div>
      )
    } else {
      return (
        <div>We can't found that article</div>
      )
    }
  }

  return (
    <Layout>
      <div>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>
      <input
        type="text"
        placeholder='Search your products favorite'
        className='rounded-lg border border-black w-80 p-4 mb-4'
        onChange={(event) => context.setSearchedProducts(event.target.value)}
      />
      {validateInformationToShow()}
      <ProductDetail />
    </Layout>
  )
}

export default Home