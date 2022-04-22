import React from "react";
import "./Rockets.css";

const Rockets = ({ rockets }) => {
  return (
    <div className="rockets">
      {rockets?.map((roc, i) => (
        <div key={i} className="rockets__item">
          <img
            className="rockets__img"
            src={roc?.links?.mission_patch}
            alt=""
          />
          <h3 style={{ color: "#65689d" }}>
            {roc?.mission_name} #{i}
          </h3>
          <div className="rockets__mission_id">
            <h3>Mission Ids: </h3>
            <p>{roc?.mission_id}</p>
          </div>
          <div className="rockets__launch_year">
            <h3>Launch Year: </h3>
            <p style={{ marginLeft: "10px" }}>{roc?.launch_year}</p>
          </div>
          <div className="rockets__launch_success">
            <h3>Successful Launch: </h3>
            <p>{roc?.rocket.first_stage.cores[0].land_success}</p>
          </div>

          <div className="rockets__launch_landing">
            <h3>Successful Landing: </h3>
            <p>{roc?.launch_site.site_name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
