import React from "react"
import { Footer } from './Footer';
import { Head } from './Head';
import { Header } from './Header';
import MathiIMG from '../IMG/fotoTrabajo1.jpg'

export const Home = () => {

    return(
        
    <div>
        <Head/>
        <Header/>
    <h2>Quienes somos</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit odit reprehenderit dolorum, deserunt,
         unde non natus vero quaerat fugiat aliquam animi officia minus, incidunt labore ratione commodi? Consequatur, voluptates.</p>
        <div className="card">
        <img src={MathiIMG} alt="" /><p>Mathias</p>
        </div>
         
         <Footer/>
    </div>
    )
        
    }