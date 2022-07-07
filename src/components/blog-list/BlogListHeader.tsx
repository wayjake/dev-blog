import Head from "next/head";

export const BlogListHeader = () =>{
    return (
        <div>
        <Head>
        <title>Dubsado Notion Dev</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
            <header>
            <div>
            </div>
            <h1 className="heading">Dubsado Developer Blog</h1>
            <p>
                Here you find all the developer logs currently hosted on Notion
            </p>
            <h2>All Posts</h2>
            </header>
        </div>
    )
}