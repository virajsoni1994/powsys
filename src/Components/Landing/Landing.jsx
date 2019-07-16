import React, { Component } from "react";
import Services from "../Services/Services";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import icon from "../../images/dummy_Icon.png";
import "./Landing.css";

// import Landing from "../src/Components/Landing/Landing";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
    this.handleClickEvent1 = this.handleClickEvent1.bind(this);
    this.handleClickEvent2 = this.handleClickEvent2.bind(this);
    this.handleClickEvent3 = this.handleClickEvent3.bind(this);
  }

  handleClickEvent1(){
    this.setState({ page: 0})
  }
  handleClickEvent2(){
    this.setState({ page: 1})
  }
  handleClickEvent3(){
    this.setState({ page: 2})
  }

  render(){
    const { page } = this.state;
    return (
    <div> 
         <nav class="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <a class="navbar-brand" href="/">
          PowSys Engineering
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <BrowserRouter>
              <li class={ page === 0 ? "nav-item active" : "nav-item"} 
                onClick={this.handleClickEvent1}>
                <Link class="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li class={ page === 1 ? "nav-item active" : "nav-item"} 
                  onClick={this.handleClickEvent2}>
                <Link class="nav-link" to="/services">
                  SERVICES
                </Link>
              </li>
              <li class={ page === 2 ? "nav-item active" : "nav-item"} 
                  onClick={this.handleClickEvent3}>
                <Link class="nav-link" to="/contact">
                  CONTACT US
                </Link>
              </li>
            </BrowserRouter>
          </ul>
        </div>
      </nav>
      <div className="Container">
        {page === 0 &&
          (
            <div>
              <div className="hero row">
                <div class="hero-card">
                  <div class="card-body">
                    <h5 class="card-title">About Us</h5>
                    <p class="card-text">Powsys Engineering is a professional consulting firm focusing solely on electrical
engineering practices. We provide services to the industrial and commercial sector. We
seek to understand all your needs and come up with a solution that is efficient and
optimized. Project and client needs vary and that is why we believe to be flexible in our
approach.</p>
                  </div>
                </div>
              </div>
              
            {/* //   <div
            //   id="carouselExampleIndicators"
            //   className="carousel slide"
            //   data-ride="carousel"
            // >
            //   <div className="carousel-inner">
            //     <div className="carousel-item active">
            //       <img className="d-block w-100" src={image} alt="First slide" />
            //     </div>
            //   </div>
            // </div> */}
            <div className="all-services">
              <h2 className="service-heading">Services</h2>
              <div className="row">
              <div className="left-services col-sm-6">
                <ul>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Load Flow Study</span>
                  </li>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Short Circuit Study</span>
                  </li>
                  <li className="service-li">
                  <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Protective Device Coordination</span>
                  </li>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Arc Flash Study</span>
                  </li>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Grounding Study</span>
                  </li>
                </ul>
              </div>
              <div className="right-services col-sm-6">
                <ul>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Harmonic analysis study</span>
                  </li>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Lighting Study</span>
                  </li>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Electrical Design</span>
                  </li>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Motor Starting Study</span>
                  </li>
                  <li className="service-li">
                    <span><img className="img-icon" src={icon}/></span>
                    <span className="service">Power Generation</span>
                  </li>
                </ul>
              </div>
              </div>
            </div>
            <hr className="custom-hr"/>
            <div className="row">
            <div className="card col-md-5">
              <div className="card-body">
                <h5 className="card-title">Front End Engineering Design:</h5>
                <p className="card-text">
                  <ul>
                    <li>
                    Post feasibility study phase which leads to Process and Engineering
                    documentation of sufficient depth and revised estimate on investment cost
                    </li>
                    <li>
                    Load list, cable schedules, overall SLD development takes place in this stage
                    based on which studies are done
                    </li>
                    <li>
                    Defines the project requirements for further stages such as detailed engineering,
                    procurement, construction etc.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="card col-md-5">
              <div className="card-body">
                <h5 className="card-title">Detailed Engineering:</h5>
                <p className="card-text">
                <ul>
                  <li>
                  Refinement of design is done, and plans, specifications and estimates are created
                  </li>
                  <li>All required construction documents and drawings up to IFC (Issue for
                      Construction) phase are developed
                    </li>
                    <li>Detailed bill of materials (BOM) for bulk procurement is issued</li>
                </ul>
                </p>
              </div>
            </div>
            </div>
          </div>
          )
        }
        {page === 1 &&
          (<Services/>)
        }
        {page === 2 &&
          (<Contact/>)
        }
      </div>
    </div>
       );
      }
}

export default Landing;
