"use client"

const getData = async () => {
  const res = await  fetch("https://dummyjson.com/products")
  const data  = await res.json()
  return data
}
interface Product {
  id:number,
  title: string,
  price: number,
  images: string
}

async function Home() {
  const data = await getData()
  
  return (
    <div className="p-10">
      <h1>Products</h1>
      <div className=" grid-cols-4 grid w-full ">
        {data.products.map((pro: Product) => {
          const  {title,price,id} = pro
          const images = pro.images[0]
          
          return <div className="card w-52 bg-base-100 shadow-xl mb-10">
  <figure className="px-10 pt-10">
    <img src={images} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        })}
      </div>
        
    </div>
  
    
  )
}

export default Home