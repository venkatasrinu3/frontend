import React from 'react';
import "./ar.css"

const About = (props) => {
    return (
        <div>
            <div className="container ">
                <div className="col-12 col-md-10 col-lg-7 offset-lg-2 main ">
                    {props.data.map((element) =>
                        <div className="card shadow my-5" key={element.id}>
                            <div className="row my-3">
                                <div className="col-10 offset-1 col-md-3 offset-md-0 col-lg-3 ">
                                    <img src={element.url} alt="" className="img-fluid mb-4 mx-1" />
                                </div>
                                <div className="col-6 offset-1 col-md-7 offset-md-0 col-lg-7">
                                    <h4 className="text-danger"><b>{element.name}</b></h4>
                                    <p className="text-muted">{element.menu}</p>
                                    <p className="text-muted">{element.cost}</p>
                                    <p>{element.min}</p>
                                    <p>Accepts Online Payments Only</p>
                                </div>
                                <div className="col-3 col-md-2 offset-md-0 col-lg-2">
                                    <div>
                                        <p className="bg-success rate px-2 text-light float-right mr-2 ">{element.rating}</p>
                                        <p className="vote text-muted mr-2">{element.votes} </p>
                                        <p className="review text-muted mr-2">{element.reviews} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div>
                                    <button className='btn float-right mr-1 order'>Order Online</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default About