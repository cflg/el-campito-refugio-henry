import React from "react";
import { Link } from "react-router-dom";
import homeimg from '../../img/homeimg.svg'
import style from './Home.module.css'

const Home = () => {
  return (
    <div>
      <div className={style.homeContenedor}>
        <div>
          <p className={style.pHome}>Somos una ONG sin fines de lucro que trabaja rescatando, recuperando y
             dando en adopción. Además buscamos generar conciencia para lograr una
             sociedad más inclusiva y respetuosa. <br></br>Orgullosos de ser un refugio de
             puertas abiertas te invitamos a conocernos.<br></br> Estamos en Esteban
             Echeverria, Bs As, Argentina.</p>
          <h2 className={style.h2Home}>Vale la pena involucrarse</h2>
        </div>
        <img src={homeimg} alt="homeImage" />
      </div>
      <div className={style.homeMenu}> {/* En este div le pase por porops descripcion y className para poder trabajar con cada componente por separado */}
       <Link to='/adoptar' className={style.adoptar}>Quiero adoptar</Link>
       <Link to='/colaborar' className={style.donaciones}>Donaciones y padrinazgos</Link>
       <Link to='/visitas' className={style.visitas}>Visitas</Link>
       <Link to='/home' className={style.veterinaria}>Veterinaria y Unidad de Cuidados Intensivos</Link>
       <Link to ='/campito'className={style.campito}>El Campito escolar</Link>
       <Link to='/home' className={style.comunicacion}>Comunicación, prensa y redes Sociales</Link>
       <Link to ='/voluntario' className={style.voluntario}>Quiero ser voluntario</Link>
       <Link className={style.comportamiento}>Comportamiento y sociabilizacion</Link>
      </div>
    </div>
  );
};

export default Home;
