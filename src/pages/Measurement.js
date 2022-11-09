import Transparency from "./Components/Transparency.png";
import RealTime from "./Components/RealTime.png";
import WellStructured from "./Components/WellStructured.png";
import Agile from "./Components/Agile.png";
import Onsite from "./Components/Onsite.png";
import Innovation from "./Components/Innovation.png";
import Clients from "./Components/Clients.png";
import Dedicated from "./Components/Dedicated.png";

function Measurement() {
  const measurement = {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    paddingBottom: "40px",
  };

  const Heading = {
    fontSize: "42px",
    color: "#00FF00",
    textAlign: "center",
    fontWeight: 800,
    paddingTop: "75px",
    fontFamily: "'Poppins', sans-serif",
  };

  const subHead = {
    textAlign: "center",
    fontSize: "11px",
    paddingBottom: "40px",
    fontFamily: "'Poppins', sans-serif",
  };

  const cardMenu = {
    paddingLeft: "60px",
  };

  const image = {
    marginRight: "30px",
    width: "70px",
    height: "70px",
  };

  const text = {
    fontSize: "13px",
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",
  };

  const row = {
    padding: "20px",
    margin: "15px",
  };

  return (
    <div className="container-fluid-sm" style={measurement}>
      <div>
        <h1 style={Heading}>
          MEASUREMENT <br />
          TO OUR SUCCESS
        </h1>
        <p style={subHead}>Our process-driven approach keeps us going</p>
      </div>

      <div style={cardMenu}>
        <div className="row" style={row}>
          <div className="col-sm-4">
            <img
              src={Transparency}
              alt="some"
              className="float-start"
              style={image}
            />
            <span style={text}>
              TRANSPARENCY AND <br /> RELIABILITY
            </span>
          </div>
          <div className="col-sm-4">
            <img
              src={RealTime}
              alt="some"
              className="float-start"
              style={image}
            />
            <span style={text}>
              REAL TIME PROJECT <br />
              STATUS
            </span>
          </div>
          <div className="col-sm-4">
            <img
              src={WellStructured}
              alt="some"
              className="float-start"
              style={image}
            />
            <span style={text}>
              WELL STRUCTURED <br />
              COMMUNICATION
            </span>
          </div>
        </div>

        <div className="row" style={row}>
          <div className="col-sm-4">
            <img src={Agile} alt="some" className="float-start" style={image} />
            <span style={text}>
              AGILE <br />
              METHODOLGY
            </span>
          </div>
          <div className="col-sm-4">
            <img
              src={Onsite}
              alt="some"
              className="float-start"
              style={image}
            />
            <span style={text}>
              ONSITE <br />
              COLLABORATION
            </span>
          </div>
          <div className="col-sm-4">
            <img
              src={Innovation}
              alt="some"
              className="float-start"
              style={image}
            />
            <span style={text}>
              INNOVATION AT <br /> WORK
            </span>
          </div>
        </div>

        <div className="row" style={row}>
          <div className="col-sm-4">
            <img
              src={Clients}
              alt="some"
              style={image}
              className="float-start"
            />
            <span style={text}>
              CLIENT'S INVOLVEMENT <br />
              IN EACH MILESTONE
            </span>
          </div>
          <div className="col-sm-4">
            <img
              src={Dedicated}
              alt="some"
              style={image}
              className="float-start"
            />
            <span style={text}>
              DEDICATED <br />
              TEAM
            </span>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}
export default Measurement;
