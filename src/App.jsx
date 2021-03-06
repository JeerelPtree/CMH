/*
  We have here the Routes of access routes's pages and will be render into index
*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //importamos los componentes de react-router-dom
import PageEncuestas from './views/pages/PageEncuestas'; //importamos el modulo de la pagina de Encuesta
import PagePerfiles from './views/pages/PagePerfiles'; //importamos el modulo de la pagina de Perfiles
import PageHospitales from './views/pages/PageHospitales'; //importamos el modulo de la pagina de Hospitales

import Layout from './views/components/headers/Layout'; //importamos el layout que contiene el navbar

//pagina de pruebas
import PagePrueba from './views/pages/PagePrueba';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/encuestas' element={<PageEncuestas />} />
          <Route exact path='/perfiles' element={<PagePerfiles />} />
          <Route exact path='/prueba' element={<PagePrueba />} />
          <Route exact path='/hospitales' element={<PageHospitales />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
