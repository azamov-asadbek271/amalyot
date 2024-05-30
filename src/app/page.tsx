
import Link from "next/link"

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
    <div className="w-full max-w-[1200px] px-10 mr-auto ml-auto py-10">
      <h1 className="text-2xl text-center font-bold mb-10" >Products</h1>
      <div className=" grid-cols-4 grid w-full ">
        {data.products.map((pro: Product) => {
          const  {title,price,id} = pro
          const images = pro.images[0]
          
          return <div key={id} className="card w-56 bg-base-100 shadow-xl mb-10">
  <figure className="px-10 pt-10">
    <img src={images} alt="Shoes" className="rounded-xl object-cover h-40" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>${price}</p>
    <div className="card-actions">
      <Link href={`/products/${id}`} className="btn btn-primary">Buy Now</Link>
    </div>
  </div>
</div>
        })}
      </div>
        
    </div>
  
    
  )
}

export default Home