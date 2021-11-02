import Formulario from "./Formulario";
import Dialog from '@material-ui/core/Dialog';



const ModalEditar = ({ open, cerrar, moneda }) => {


    return (
        <Dialog open={open} onClose={cerrar}>
            <Formulario cerrarFormulario={cerrar} monedaEditada={moneda}/>
        </Dialog>

    )

}

export default ModalEditar;