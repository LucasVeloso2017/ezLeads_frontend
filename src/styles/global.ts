import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    *:focus {
      outline: 0;
    }
    :root{
      --white:#FFFF;
      --gray-100:#e1e1e6;
      --gray-300:#a8a8b3;
      --gray-700:#323238;
      --gray-800:#29292e;
      --gray-850:#1f2729;
      --gray-900:#121214;
      
      --gray-400:#787878;
      --red-500:#fd003a;
      --red-900:#e50027;
      --puple-700:#570fcd;

    }


    html, body {
      height: 100vh;
    }
    body {
      //background:#f5f8fb;
      background:#e5e5e5;
      color:#FFF;
      -webkit-font-smoothing: antialiased;
    }
    body, input, button {
      font: 16px 'Roboto', sans-serif;
    }
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
    }
    button {
      cursor: pointer;
    }
    h1,h2,h3,h4,h5,h6,strong{
      font-weight:500px;
    }

    button{
      cursor:pointer;
    }


`