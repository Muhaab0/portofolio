import React from 'react'

export default function Skills() {
    
  return (        
    <section className="skills" id="Skills">
        <div className="contenido-seccion">
            <h2>Skills</h2>
            <div className="fila">
                {/* <!-- Technical Skill --> */}
                <div className="col">
                    <h3>Technical Skills</h3>
                    <div className="skill">
                        <span>React & React Native</span>
                        <div className="barra-skill">
                            <div className="progreso htmlcss">
                                <span>89%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>NodeJs & Express</span>
                        <div className="barra-skill">
                            <div className="progreso javascript">
                                <span>85%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>BootStrap & TailWind Css</span>
                        <div className="barra-skill">
                            <div className="progreso wordpress">
                                <span>81%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Shopify Ecommerce</span>
                        <div className="barra-skill">
                            <div className="progreso drupal">
                                <span>92%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Photoshop</span>
                        <div className="barra-skill">
                            <div className="progreso photoshop">
                                <span>75%</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Professional Skills --> */}
                <div className="col">
                    <h3>Professional Skills</h3>
                    <div className="skill">
                        <span>Comunicacion</span>
                        <div className="barra-skill">
                            <div className="progreso comunicacion">
                                <span>80%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Team Work</span>
                        <div className="barra-skill">
                            <div className="progreso trabajo">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Creativity</span>
                        <div className="barra-skill">
                            <div className="progreso creatividad">
                                <span>99%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Dedication</span>
                        <div className="barra-skill">
                            <div className="progreso dedicacion">
                                <span>95%</span>
                            </div>
                        </div>
                    </div>
                    <div className="skill">
                        <span>Progect Management</span>
                        <div className="barra-skill">
                            <div className="progreso proyect">
                                <span>90%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
