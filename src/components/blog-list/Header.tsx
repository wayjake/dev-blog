import Head from "next/head";
import * as S from "./BlogList.styled";

export const Header = () =>{
    return (
        <div>
            <Head>
            <title>Dubsado Developer Blog</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            
            </Head>
            <S.HeaderContainer>
                <header>
                    <h1>Developer Blog</h1>
                </header>
            </S.HeaderContainer>
        </div>
    )
}

