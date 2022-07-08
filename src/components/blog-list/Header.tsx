import Head from "next/head";

export const Header = () =>{
    return (
        <div>
            <Head>
            <title>Dubsado Notion Dev</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
                <header>
                    <h1>Dubsado Developer Blog</h1>
                        <p>
                            Here you find all the developer logs currently hosted on Notion
                        </p>
                    <h2>All Posts</h2>
                </header>
        </div>
    )
}