import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import { getAllPosts } from '../lib/test-data';
import { client } from "../lib/apollo";
import { gql } from '@apollo/client';

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>UyghurRebuild</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

        <Header></Header>
        <main>
      
        <div className="hero min-h-96 w-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">URebuild Project</h1>
            <p className="mb-5">Rebuilding the foundations of Uyghur livelihood</p>
            
            <button className="btn btn-neutral">SUPPORT TODAY!</button>
          </div>
        </div>
      
      </div>
        <div className="grid">
          {
            posts.map((post) => {
              return (
                <Project key={post.uri} post={post}></Project>
              )
            })
          }
        </div>
        
      </main>

      <Footer></Footer>
    </div>
  )
}


// Statically renders pages before the client visits the page

export async function getStaticProps(){

  // GraphQL query to get all posts
  const GET_POSTS = gql`
  
    query GetAllPosts {
      posts {
        nodes {
          title
          content
          uri
          date
        }
      }
    }

  `
  const response = await client.query({
    query: GET_POSTS
  })
  const posts = response?.data?.posts?.nodes
  return {
    props: {
      posts
    }
  }
}
