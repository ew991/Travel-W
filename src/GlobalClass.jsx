import { css } from "styled-components";
export const GlobalClass = css`

    body{
        font-family: 'Poppins';
        letter-spacing: 1.6px;
        background: #FFF;
    }
    a{
      color: #252525;
    }
    
    p{
      color: #FFFFFF;
    }
    h1{
      color: #1C315E;
    }

    button{
        height: 58px;
        background-color: #FF64AE;
        border-radius: 50px;
        width: 200px;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 1.6px;
        border: none;
        color: #FFFFFF;
        cursor: pointer;
        &:hover{
            background-color: #FFFFFF;
            color: #FF64AE;
           
        }
    }
    img{
      cursor: pointer;
    }
*,
*:before,
*:after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}
input,
select,
textarea {
  background-color: transparent;
  outline: none;
}
button {
  cursor: pointer;
  outline: none;
  border: 0;
}
`;