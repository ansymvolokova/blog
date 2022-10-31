import type {NextPage} from 'next'
import Head from 'next/head'
import {BlogPost} from "../comps/BlogPost";
import {client} from "../lib/contentful";
import styles from './../styles/Home.module.css'
import * as React from 'react';



export const getStaticProps = async () => {
// it's where we fetch the data; this runs before the comp is rendered
  const response = await client.getEntries()
  return {
    props: {
      items: response.items
    },
  };
};


export type ContentfulItem ={
  fields: FieldsType
  metadata: {tags: []}
  sys: {
    createdAt: string
    id: string
    locale: string
    revision: number
    space: {sys: { type: 'Link', linkType: 'Space', id: string }
    type: 'Asset' }
    updatedAt: string
  }
}

type FieldsType ={
  content: string
  slug: string
  tags: string[]
  thumbnail: {fields: ThumbnailType}
  title: string
}

type ImageType = {
  image: {height: number, width: number}
  size: number
}

type ThumbnailType = {
  file: {
    contentType: string,
    details: ImageType
    fileName: string
    url: string
   }
}

type IndexProps = { items: ContentfulItem[] }

const Index: NextPage<IndexProps> = ({items}) => {

  return (<>
    <Head>
      <title>Home page</title>
    </Head>
    <h1>Congratulations! There are your posts from Contentful🎉🎉🎉</h1>
    <div className={styles.grid}>
      {
        items.slice(0, 5)
          .map(el => (
              <BlogPost key={el.sys.id}
                        id={el.sys.id}
                        heading={el.fields.title}
                        imgUrl={el.fields.thumbnail.fields.file.url}
                        text={el.fields.content}
                        createdAt={el.sys.createdAt}
              />
            )
          )
      }
    </div>

  </>)
}

export default Index
