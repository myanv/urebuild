import Link from "next/link";

export default function Project({ post }) {
  return (
    <div className="card mb-10 w-[90%] lg:w-1/4 bg-base-100 shadow-xl mx-auto rounded-lg">
        <figure><img src={post?.featuredImage?.node?.sourceUrl} alt={post?.title} className="w-[90%] rounded-br-3xl h-[280px]"/></figure>
        <div className="card-body">
            <h2 className="card-title">{post?.title}</h2>
            <p>Lorem ipsum...</p>
            <div className="card-actions justify-end">
            <button className="btn btn-neutral">Learn More</button>
            </div>
        </div>
    </div>
  );
}