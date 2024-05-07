import Head from 'next/head'
import React from 'react'

interface MetaSeoProps{
    title:string;
    desc:string;
    img_url?:string
}

const MetaSeo: React.FC<MetaSeoProps> = ({title,desc, img_url}) => {
  return (
    <Head>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content={desc} />
    <meta name="keywords" content="keyword1, keyword2, keyword3" />
    <meta name="author" content="Your Name" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={img_url} />
    <meta property="og:url" content={img_url} />
    {/* <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content="https://example.com/image.jpg" />
    <meta name="twitter:card" content="summary_large_image" /> */}
        
        </Head>
  )
}

export default MetaSeo