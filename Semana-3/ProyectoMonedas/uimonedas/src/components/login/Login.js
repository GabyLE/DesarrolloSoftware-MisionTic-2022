import Dialog from '@material-ui/core/Dialog';
import Formulario from './Formulario';

const ModalLogin = ({open, cerrar}) => {
    return (
        <Dialog open={open}>
            <Formulario/>
        </Dialog>
    );
}

export default ModalLogin;