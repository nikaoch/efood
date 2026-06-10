import styled from "styled-components";
import { cores } from "../../styles.ts";

export const PayFormDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: flex-end;
`

export const PayFormContent = styled.div`
    display: block;
    padding: 32px 8px;
    background-color: ${cores.salmao};
    color: ${cores.beje};

    button {
        background-color: ${cores.beje};
        color: ${cores.salmao};
        width: 100%;
        margin-top: 16px;
        padding: 4px 0;
        cursor: pointer;
        font-weight: bold;
        border: none;
    }

    input {
        width: 344px;
        background-color: ${cores.beje};
        border: none;
        height: 32px;
    }

    small {
        color: ${cores.preto};
    }

    .small {
        width: 160px;
    }
`