import React from "react";
import "./Years.css";

const Years = ({ rockets, setRockets }) => {
  const handle2006 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2006";
    });
    setRockets(launchYears);
  };

  const handle2007 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2007";
    });
    setRockets(launchYears);
  };

  const handle2008 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2008";
    });
    setRockets(launchYears);
  };

  const handle2009 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2009";
    });
    setRockets(launchYears);
  };

  const handle2010 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2010";
    });
    setRockets(launchYears);
  };

  const handle2011 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2011";
    });
    setRockets(launchYears);
  };

  const handle2012 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2012";
    });
    setRockets(launchYears);
  };

  const handle2013 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2013";
    });
    setRockets(launchYears);
  };

  const handle2014 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2014";
    });
    setRockets(launchYears);
  };

  const handle2015 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2015";
    });
    setRockets(launchYears);
  };

  const handle2016 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2016";
    });
    setRockets(launchYears);
  };

  const handle2017 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2017";
    });
    setRockets(launchYears);
  };

  const handle2018 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2018";
    });
    setRockets(launchYears);
  };

  const handle2019 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2019";
    });
    setRockets(launchYears);
  };

  const handle2020 = () => {
    const launchYears = rockets.filter((rocket) => {
      return rocket.launch_year === "2020";
    });
    setRockets(launchYears);
  };

  return (
    <div className="years">
      <div className="years__item" onClick={handle2006}>
        2006
      </div>
      <div className="years__item" onClick={handle2007}>
        2007
      </div>
      <div className="years__item" onClick={handle2008}>
        2008
      </div>
      <div className="years__item" onClick={handle2009}>
        2009
      </div>
      <div className="years__item" onClick={handle2010}>
        2010
      </div>
      <div className="years__item" onClick={handle2011}>
        2011
      </div>
      <div className="years__item" onClick={handle2012}>
        2012
      </div>
      <div className="years__item" onClick={handle2013}>
        2013
      </div>
      <div className="years__item" onClick={handle2014}>
        2014
      </div>
      <div className="years__item" onClick={handle2015}>
        2015
      </div>
      <div className="years__item" onClick={handle2016}>
        2016
      </div>
      <div className="years__item" onClick={handle2017}>
        2017
      </div>
      <div className="years__item" onClick={handle2018}>
        2018
      </div>
      <div className="years__item" onClick={handle2019}>
        2019
      </div>
      <div className="years__item" onClick={handle2020}>
        2020
      </div>
    </div>
  );
};

export default Years;
