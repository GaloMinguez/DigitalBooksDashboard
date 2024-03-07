import React from 'react';
import imagenFondo from '../assets/images/QuienesSomos.jpg';


function QuienesSomos(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Quienes Somos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>Somos un sello de Argentina nacido en octubre de 2023. Publicamos libros ilustrados o libros objeto. 
                        Nos caracterizamos por explorar nuevos modos de publicación que apunten a una democratización en el 
                        acceso a la cultura y a una articulación más importante con el público lector. Creemos que estas 
                        alternativas forman parte de un nuevo paradigma de producción cultural, más solidario y colectivo, 
                        que entiende el acceso a la cultura como un derecho humano, y que podemos fortalecer desde nuestra 
                        labor editorial cotidiana de promoción de la lectura.</p>
                    <a className="btn btn-danger" target="_blank" rel="noreferrer" href="http://localhost:3002/">Ir a la web Oficial</a>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos;
