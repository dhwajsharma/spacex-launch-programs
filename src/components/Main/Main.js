import React, { useEffect, useState } from "react";
import "./Main.css";
import Years from "../Years/Years";
import TandF from "../TandF/TandF";
import Rockets from "../Rockets/Rockets";

const Main = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v3/launches?limit=100`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRockets(response);
      });
  }, []);

  const handleLaunch = () => {
    const filteredLaunch = rockets.filter((rocket) => rocket.launch_success);
    setRockets(filteredLaunch);
  };

  const handleLaunchFailure = () => {
    // handle launch failure
    const filteredLaunch = rockets.filter((rocket) => !rocket.launch_success);
    setRockets(filteredLaunch);
  };

  const handleLanding = () => {
    const filteredLanding = rockets.filter(
      (roc) => roc.rocket.first_stage.cores[0].land_success
    );
    setRockets(filteredLanding);
  };

  return (
    <div className="main">
      <div className="main__left">
        <h4>Filters</h4>
        <p style={{ marginLeft: "50px" }}>Launch Year</p>
        <Years />
        <p style={{ marginLeft: "50px", marginTop: "10px" }}>
          Successful Launch
        </p>
        <div className="tandf__items">
          <div className="tandf__item" onClick={handleLaunch}>
            True
          </div>
          <div className="tandf__item" onClick={handleLaunchFailure}>
            False
          </div>
        </div>
        <p style={{ marginLeft: "50px", marginTop: "10px" }}>
          Successful Landing
        </p>
        <div className="tandf__items">
          <div className="tandf__item" onClick={handleLanding}>
            True
          </div>
          <div className="tandf__item">False</div>
        </div>
      </div>
      <div className="main__right">
        <Rockets rockets={rockets} />
      </div>
    </div>
  );
};

export default Main;
