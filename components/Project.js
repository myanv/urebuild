import Link from "next/link"

export default function Project ({ post }){
    return (
        <div>
            <div>
                <div className="hero min-h-fit w-screen bg-base-300">
                <div className="hero-content flex-col lg:flex-row">
                <img src="https://empowercommunities.org/wp-content/uploads/2021/12/empower-communities-3.png" className="max-w-sm rounded-lg shadow-2xl" />  
                <h1 className="text-5xl font-bold">{post.title}</h1>     
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <Link href={post.uri} className={"card"}>
                    <button className="btn btn-neutral">Get Started</button>
                </Link>  
                  
                  
                  </div>
                  </div>
            </div>  
        </div>
        
    )
}