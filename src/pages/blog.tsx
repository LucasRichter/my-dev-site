import { GetStaticProps } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import MainSection from '../components/pages/Blog/MainSection'
import { getMediumStories, MediumStory } from '../services/medium'

const Blog: React.FC<{
  medium: MediumStory
}> = ({ medium }) => {
  return (
    <Layout title="Blog" description={medium.description}>
      <MainSection title={medium.title} image={medium.image} />
    </Layout>
  )
}  
  
export const getStaticProps: GetStaticProps = async () => {
  const medium  = await getMediumStories()
  return {
    props: {
      medium
    }
  }
}

export default Blog
