import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    branco: '#fff',
    salmao: '#E66767',
    beje: '#FFEBD9',
    bejeClaro: '#FFF8F2',
    preto: '#000'
}

export const GlobalCss = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: Roboto, sans serif;

        body {
            background-color: ${cores.bejeClaro}
        }
    } 
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`