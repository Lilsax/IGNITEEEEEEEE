import react, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import Home from './Pages/Home';
import GlobalStyler from './Componts/GlobalStyler';
function App() {
  return (
    <div>
      <GlobalStyler />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
