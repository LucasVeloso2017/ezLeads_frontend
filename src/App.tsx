import React from 'react';
import GlobalStyles from './styles/global'


import PrimeReact from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import Signin from './pages/Signin';

function App() {
  PrimeReact.ripple = true
  return (
    <>
      <GlobalStyles/>
      <Signin/>
    </>
  );
}

export default App;
