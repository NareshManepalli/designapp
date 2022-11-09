import React from "react";
import HomePic from "./Components/Home.png";

function Innovation() {
  const Home = {
    backgroundColor: "#00FF00",
    color: "#000000",
    paddingLeft: "60px",
    paddingTop: "10px",
    borderRadius: "0px 0px 0px 260px",
  };

  const Design = {
    fontWeight: 900,
    padding: 0,
    margin: 0,
    fontSize: "28px",
    fontFamily: "'Poppins', sans-serif",
  };
  const Agency = {
    fontSize: "22px",
    paddingRight: "70px",
    margin: 0,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
  };
  const Menu = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    marginRight: "20px",
  };
  const LButton = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    paddingLeft: "25px",
    paddingRight: "25px",
  };

  const image = {
    position: "absolute",
    paddingLeft: "60px",
    marginTop: "30px",
    width: 760,
    height: 530,
  };

  const HomeText = {
    fontSize: "78px",
    fontWeight: 900,
    paddingTop: "160px",
    paddingLeft: "140px",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
  };
  const SubText = {
    fontWeight: 900,
    fontSize: "21px",
    paddingLeft: "140px",
    paddingBottom: "120px",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
  };

  return (
    <div style={{ marginBottom: "70px" }}>
      <div className="container-fluid" style={Home}>
        <nav className="navbar navbar-expand-sm navbar-dark pt-4">
          <div className="container-fluid">
            <div>
              <a
                className="navbar-brand text-dark"
                href="javascript:void(0)"
                style={{ padding: 0, margin: 0 }}
              >
                <h4 style={Design}>
                  <b>DESIGN</b>
                </h4>
                <h6 style={Agency}>AGENCY</h6>
              </a>
              <button
                className="navbar-toggler bg-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                    className="nav-link text-dark h6 p-2"
                    href="javascript:void(0)"
                    style={Menu}
                  >
                    Specialize in
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark h6 p-2"
                    href="javascript:void(0)"
                    style={Menu}
                  >
                    Case Study
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark h6 p-2"
                    href="javascript:void(0)"
                    style={Menu}
                  >
                    Process
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-dark h6 p-2"
                    href="javascript:void(0)"
                    style={Menu}
                  >
                    Industries
                  </a>
                </li>
              </ul>

              <div className="d-flex">
                <button
                  className="btn btn-dark rounded-pill m-1"
                  type="button"
                  style={LButton}
                >
                  Schedule A Call
                </button>
                <button
                  className="btn btn-light rounded-pill m-1"
                  type="button"
                  style={LButton}
                >
                  We are Hiring
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <img src={HomePic} alt="home" style={image} />
          <h1 style={HomeText}>
            INNOVATION DIGITAL <br />
            TECHNOLOGY
          </h1>
          <p style={SubText}>
            everything we do is the consumer, imagination and you.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Innovation;
