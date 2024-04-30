import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import { getAllPosts } from '../lib/test-data';
import { client } from "../lib/apollo";
import { gql } from '@apollo/client';
import Statistics from '../components/Statistics';

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>UyghurRebuild</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

        <Header></Header>
        <main>
      
        <div className="hero h-96 w-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-xl">
            <h1 className="mb-10 text-5xl font-bold">URebuild Project</h1>
            <button className="btn btn-neutral size-1/2 text-lg">SUPPORT TODAY!</button>
          </div>
        </div>
      
      </div>
      <h2 className="m-16 text-3xl text-center w-screen">We are rebuilding the foundations of Uyghur livelihood
through:</h2>
      <div className="flex flex-row w-screen align-middle justify-between">
          {
            posts.map((post) => {
              return (
                <Project key={post.uri} post={post}></Project>
              )
            })
          }
      </div>
      <h2 className="mt-36 text-3xl text-center w-screen">Our numbers:</h2>
      <div className="flex items-center content-center w-screen my-20 mr-20">
        <Statistics></Statistics>
      </div>

      <div className="hero h-80 w-screen bg-red-300 mb-20">
        <p className="text-xl">SOCIAL MEDIA STRIP (GraphAPI)</p>
      </div>

      <div className="hero h-fit w-screen mx-12">
      <div className="hero-content text-center">
        <div className="w-3/4">
          <h1 className="text-3xl font-bold">Let’s rebuild
our Uyghur future together!</h1>
          <p className="py-6 text-xl">With the current crisis, most of the efforts of NFPs have been addressed to overcome the injustice, leaving out the vital support of everyday Uyghur initiatives and livelihood. We believe supporting community in this way would be victorious step in rebuilding our future together!</p>
          <button className="btn btn-neutral size-1/2 text-xl mb-36">Would you join us?</button>
        </div>
      </div>
    </div>
    <div className="hero h-80 w-screen bg-blue-300">
        <p className="text-xl">NEWSLETTER STRIP (SendGrid API) or DONATE (StripeAPI)</p>
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
          featuredImage {
            node {
              sourceUrl
            }
          }
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
