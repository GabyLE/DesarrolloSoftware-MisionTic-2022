import { Switch, Route } from "react-router-dom";
import Paises from '../views/Paises';
import Inicio from '../views/Inicio';
import Monedas from "../views/Monedas";

const Rutas = () => {
    return(
        <Switch>
            <Route exact path='/' component={Inicio}/>
            <Route exact path='/Monedas' component={Monedas} />
            <Route exact path='/Paises' component={Paises} />
        </Switch>
    )
}

export default Rutas;