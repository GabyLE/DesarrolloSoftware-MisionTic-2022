import { Switch, Route } from "react-router-dom";
import Inicio from '../views/Inicio';

const Rutas = () => {
    return(
        <Switch>
            <Route path='/' component={Inicio}/>
        </Switch>
    )
}

export default Rutas;