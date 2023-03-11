import React from "react";

const MovieDetail = () => {
   
  
    return (
      <div className="container py-5">
        <h1 className="text-center">başlık</h1>
        <div className="card w-75 m-auto my-3">
        <div className="card-body">
          <div className="ratio ratio-16x9">
            <iframe
              src=""
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src=""
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 d-flex flex-column ">
              <div className="card-body">
                <h5 className="card-title">Overview</h5>
                <p className="card-text">overview acıklama</p>
              </div>
              <ul className="list-group ">
                <li className="list-group-item">
                  date
                </li>
                <li className="list-group-item">
                  avarage
                </li>
                <li className="list-group-item">
                vote_count
                </li>
                <li className="list-group-item">
                  
                   * Go Back *
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieDetail;