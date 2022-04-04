import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body{
        margin: 0;
        padding: 0;
        font-family: Open Sans, sans-serif;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    *, :after, :before {
    box-sizing: border-box;
}
`
export default GlobalStyle