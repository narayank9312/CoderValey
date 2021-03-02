import React from 'react';
import {NavLink} from 'react-router-dom';


const Common = (props) => {

 
  return (
    <>
      <section id="header" className=" d-flex align-items-centre">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-4 col-10 mx-auto">
                  <h1>
                    {props.name}
                    <br />
                    <strong className="brand-name"> CodersValey </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer solving your doubts
                  </h2>
                  <div className="col-md-6  d-flex justify-content-center  flex-colmun ">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-md-4 col-10 mx-auto">
                  <img
                    src={props. imgsrc}
                    className="img-fluid animated"
                    alt=" hom img "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
