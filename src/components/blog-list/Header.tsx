import Head from "next/head";
import * as S from "./BlogList.styled";

export const Header = () =>{
    return (
        <div>
            <Head>
            <title>Dubsado Developer Blog</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <S.HeaderContainer>
                <header>
                    <h1>Developer Blog</h1>
                </header>
            </S.HeaderContainer>
        </div>
    )
}

