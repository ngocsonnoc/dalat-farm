import { createGlobalStyle } from "styled-components";
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const GlobalStyle = createGlobalStyle`
:root{
        --bg-dark: #1e1e1e;
        --white-text:#fffff;
        --primary-gold:#f7c400;
}
*{
margin: 0;
padding: 0;
box-sizing: border-box;

}

li{
    list-style: none;
}
img{
    height: 100%;
    width: 100%;
}
a{
    text-decoration: none;
}
`