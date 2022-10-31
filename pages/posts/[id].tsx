import {BlogPost} from "../../comps/BlogPost";
import {client} from "../../lib/contentful";
import React from "react";
import Image from 'next/image'
import {ContentfulItem} from "../index";
import styles from '../../styles/Home.module.css'


const Details = ({item}: { item: ContentfulItem }) => {
  console.log('item', item);
  return <>
    <h1>{item.fields.title}</h1>
    <div className={styles.container}>
      <img src={item.fields.thumbnail.fields.file.url} alt="" className={styles.img}/>
    </div>
    <p>{item.fields.content}</p>
  </>
}

Details.getInitialProps = async ({query}: { query: { id: string } }) => {
  const response = await client.getEntry(query.id)
  console.log('response', response);
  return {
    item: response
  }
}

export default Details