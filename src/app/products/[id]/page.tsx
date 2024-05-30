"use client"

const getData = async (id:string) => {
  const res = await  fetch("https://dummyjson.com/products/" + id)
  const data  = await res.json()
  return data
}
interface ProductTs {
  id:number,
  title: string,
  price: number,
  images: string
}
 async function Products({params: {id}} : {params : {id:string}}) {
    const products = await getData(id)
    console.log(products);
      const  {title,price,description
} = products
          const images = products.images[0]
    
  return (
    <div className="w-full max-w-[1200px] px-10 mr-auto ml-auto py-10 flex items-center justify-center h-[100vh]">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={images} alt="Album" className="w-96 h-96 object-contain"/></figure>
  <div className="card-body">
    <h2 className="card-title">  {title}</h2>
    <p className="w-56">{description}</p>
    <p>${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            </div>
  )
}

export default Products