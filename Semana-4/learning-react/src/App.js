import React, { Fragment } from 'react';
import VentasPage from './ventas/VentasPage';
import ProductosPage from './productos/ProductosPage';
import HomePage from './home/HomePage';
import SidebarComponent from './shared/components/sidebar/SidebarComponent';
import UsersPage from './gestorUsuarios/UsersPage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div id="wrapper" className="d-flex">
      <SidebarComponent/>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/ventas" exact>
          <VentasPage />
        </Route>
        <Route path="/productos" exact>
          <ProductosPage />
        </Route>
        <Route path="/usuarios" exact>
          <UsersPage />
        </Route>
      </Switch>
</div>
    </BrowserRouter>
  );
}

export default App;
