/*
  We have here the Routes of access routes's pages and will be render into index
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //importamos los componentes de react-router-dom
import PageEncuestas from './views/pages/PageEncuestas'; //importamos el modulo de la pagina de Encuesta
import RHo from './views/pages/RHo';

import Layout from './views/components/headers/Layout'; //importamos el layout que contiene el navbar

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/encuestas' element={<PageEncuestas />} />
          <Route exact path='/prueba' element={<RHo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
