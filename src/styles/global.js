import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #111;
        color: #fff;
        font-family: "Roboto", sans-serif;
    }
`;
