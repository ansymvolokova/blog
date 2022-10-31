import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from './../styles/Home.module.css'

type BlogPostProps = {
  id: string
  heading: string
  text?: string
  imgUrl: string
  createdAt: string

}

export const BlogPost = ({heading, text, id, imgUrl, createdAt}: BlogPostProps) => {
  const paragraph =  text?.slice(0, 120);
  const date = createdAt.slice(0, 10)

  return (
    <>
      <Card sx={{ maxWidth: 345, maxHeight: 450 }}>
        <CardActionArea>
          <img src={imgUrl} alt="" width={400}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={styles.text}>
              {heading}
              <p>{date}</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {
                `${paragraph}...`
              }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href={'/posts/' + id} key={id}>
              Read more
            </Link>
          </Button>
        </CardActions>
      </Card>

    </>
  )
}
