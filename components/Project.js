import Link from "next/link";

export default function Project({ post }) {
  return (
    <div className="card w-1/4 bg-base-100 shadow-xl mx-auto rounded-none">
        <figure><img src={post?.featuredImage?.node?.sourceUrl} alt={post?.title} className="w-full rounded-br-3xl"/></figure>
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