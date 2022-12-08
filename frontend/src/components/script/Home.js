import React from "react"
import '../style/Home.css'
import { Link } from "react-router-dom";


function Home(){
  const image = require('../images/SD.jpeg');
  return (
    <div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center flex column ' >
        <div className='row container'>
                <div 
                    className='Header col-lg-6 d-flex justify-content-start align-items-center flex column' 
                    style={{height: '91.5vh'}}>
                        <div style={{height:'360px'}}>
                          <h2 id='header' style={{fontSize: '80px'}}>BOOK {'\u00A0'}STORE</h2>
                          <h3 id='header' style={{fontSize: '70px'}}>FOR {'\u00A0'}YOU</h3>
                          <p className='mb-3' style={{fontSize:'22px'}}>Checkout The Books From Here.</p>
                          <Link className='viewBook my-1' to='/books'>View Books</Link>
                        </div>
                </div>

                <div 
                    className='Header col-lg-6 d-flex justify-content-center align-items-center flex column' 
                    style={{height: '90.5vh'}}>
                    <img className='home-img' src={image}/>

                </div>

          </div>

        </div>

  )
};

export default Home;
