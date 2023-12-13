import { css } from "styled-components";
export const GlobalClass = css`

    body{
        font-family: 'Poppins';
        letter-spacing: 1.6px;
        background: #8AAAE5;
    }
    /* a{
      color: #252525;
    }
    
    p{
      color: #000000;
    } */
    h1{
      color: #1C315E;
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