import {AppBar, Toolbar, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import ModalLogin from './login/Login';

const obtenerEstilos = makeStyles(
    (tema) => ({
        botonMenu: {
            marginRight: tema.spacing(2),
        },
        titulo: {
            flexGrow: 1,
        }
    })
);

const MenuPrincipal = () => {
    return(
        <AppBar>
            <Toolbar>
                <Button>
                    Ingresar
                </Button>
            </Toolbar>
            <ModalLogin open='true'/>
        </AppBar>
    )
}

export default MenuPrincipal;