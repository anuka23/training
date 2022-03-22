import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
`
export default GlobalStyle