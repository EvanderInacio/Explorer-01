import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 *{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
 }

 body {
  background: #141417;
  font-family: Arial, Helvetica, sans-serif;
 }

 h1 {
  font-size: 1rem;
 }

 a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar{
  width: 0.6rem;
  background-color: #101017;
}
::-webkit-scrollbar-thumb{
  border-radius: 0.5rem;
  background-color: #2662d9;
}
`

export default GlobalStyle