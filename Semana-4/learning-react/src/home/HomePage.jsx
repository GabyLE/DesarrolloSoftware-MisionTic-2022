import React, { Fragment } from "react";
import './homeStyles.css';
import SidebarComponent from "../shared/components/sidebar/SidebarComponent";
import HeaderComponent from "../shared/components/header/HeaderComponent";
import {Link} from 'react-router-dom';
import imgProductos from './img/1.png';
import imgVentas from './img/2.png';
import imgUsuarios from './img/3.png';

function HomePage () {
    return (
        <Fragment>
            
            <div id="content-wrapper" className="w-100">
                <HeaderComponent currentUser = "Gabriela López"/>
                <div id="content" className="container-fluid d-flex flex-column ">
                    <h5 id ="title" >Inicio</h5>
                    <div class="row row-cols-1 row-cols-md-2 g-4 align-items-center">
					<div class="col">


						<div class="card bg-dark text-white">
							<Link to="/productos">
								<img src={imgProductos} class="card-img" alt="..."/>

								<div class="card-img-overlay">
									<h5 class="card-title">Productos</h5>
									<p class="card-text">Registro y actualización de productos</p>
								</div>
							</Link>
						</div>

					</div>
					<div class="col">

						<div class="card bg-dark text-white">
							<Link to = "/ventas">
								<img src={imgVentas} class="card-img" alt="..."/>

								<div class="card-img-overlay">
									<h5 class="card-title">Ventas</h5>
									<p class="card-text">Registro y estado de ventas</p>
								</div>
							</Link>
						</div>

					</div>
					<div class="col">

						<div class="card bg-dark text-white">
							<Link to = "/usuarios">
								<img src={imgUsuarios} class="card-img" alt="..."/>

								<div class="card-img-overlay">
									<h5 class="card-title">Usuarios</h5>
									<p class="card-text">Visualización y actualización de roles y estdo de usuarios</p>
								</div>
							</Link>
						</div>

					</div>
					
				</div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomePage;