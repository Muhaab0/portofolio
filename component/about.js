import React from 'react'
import {VideogameAsset , Headphones , Flight , Apple , Hiking , LibraryBooks, TwoWheeler, PhotoCamera} from '@mui/icons-material';
import Link from 'next/link'


export default function About() {
  return (
        
        <section id="About" className="sobremi">
        <div className="contenido-seccion">
            <div className="aboutText">
            <h2>About Me</h2>
            <p><span>Hi, I'm Muhaab Medhat.</span> I grew up in Egypt and lived there most of my life  I speak Arabic, English I love gaming, and I stream on Twitch almost every day, Do you know why I love programing? Because it makes me feel like I have a superpower! Now, tell me about yourselves. What do you love the most?”.</p>
            </div>
            <div className="flex align-center justify-center gap10">
            <button> 
                <Link href='/portofolio' >
                My Portofolio
                </Link>
                <span className="overlay"></span>
            </button>
            </div>

            <div className="fila">
                {/* <!-- datos personales --> */}
                <div className="col">
                    <h3>Personal information</h3>
                    <ul>
                        <li>
                            <strong>BirthDay</strong>
                            15-01-2000
                        </li>
                        <li>
                            <strong>Phone</strong>
                            010 175 283 79
                        </li>
                        <li>
                            <strong>Email</strong>
                            muuhaab@gmail.com
                        </li>
                        <li>
                            <strong>Adress</strong>
                            Harm, Giza
                        </li>
                        <li>
                            <strong>Work</strong>
                            <span>FREELANCE</span>
                        </li>
                    </ul>
                </div>

  
    
    {/* <!-- intereses --> */}
                <div className="col">
                    <h3 style={{textAlign: "center"}}>Interest</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <VideogameAsset />
                            <span>Games</span>
                        </div>
                        <div className="interes">
                            <Headphones />
                            <span>Music</span>
                        </div>
                        <div className="interes">
                            <Flight />
                            <span>Travel</span>
                        </div>
                        <div className="interes">
                            <Apple />
                            <span>Mac Os</span>
                        </div>
                        <div className="interes">
                            <Hiking />
                            <span>Deporte</span>
                        </div>
                        <div className="interes">
                            <LibraryBooks />
                            <span>Books</span>
                        </div>
                        <div className="interes">
                            <TwoWheeler />
                            <span>Bikes</span>
                        </div>
                        <div className="interes">
                            <PhotoCamera />
                            <span>Photos</span>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>

            <div className="flex align-center justify-center gap10">
            <button> 
                <a href='/assets/MUHABCV.pdf' download>
                Download CV 
                </a>
                <span className="overlay"></span>
            </button>
            <button> 
                <Link href='/contact' >
                Contact Me
                </Link>
                <span className="overlay"></span>
            </button>
            </div>
            </section>
  )
}
