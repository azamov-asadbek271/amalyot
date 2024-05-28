 import Link from "next/link"
function Home() {
  return (
    <div>
      <h2>home</h2>
        <Link className="underline" href="/about">about</Link>
    </div>
  
    
  )
}

export default Home