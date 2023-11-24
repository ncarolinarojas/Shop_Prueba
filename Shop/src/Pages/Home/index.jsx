import { useState, useEffect } from 'react'
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {

  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  console.log(products)

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          products?.map(product => (
            <Card key={product.id} data={product} />
          ))
        }
      </div>
    </Layout>
  )
}

export default Home