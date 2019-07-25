import React from "react";
import "./Services.css";
import icon1 from "../../images/Load_flow.svg";
import icon2 from "../../images/Short_Circuit.svg";
import icon3 from "../../images/Protective_Device_01.png";
import icon4 from "../../images/Arc_Flash.svg";
import icon6 from "../../images/Harmonic_Analysis_01.png";
import icon5 from "../../images/Grounding_01.png";
import icon7 from "../../images/Lighting_Bulb.svg";
import icon8 from "../../images/Electrical_Design.svg";
import icon9 from "../../images/Icon_8.png";
import icon10 from "../../images/Power_Generation.svg";

function Services() {
  return (
    <div className="services-container">
      <h2 className="service-heading">Services</h2>
      <div className="row">
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon1}/></span>
          <span className="service-title">Load Flow Study</span>
            <div className="detailed-service"> The purpose of this study is to determine the voltage drops over cables and gauge the power flows on the network. We work in collaboration with
            our client to gather all the data and effectively model the system. We then use
            cutting edge software as tool to analyze the system, get insights and provide
            recommendations that benefit our client.
            </div>
        </div>
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon6}/></span>
          <span className="service-title">Harmonic Analysis Study</span>
            <div className="detailed-service">Non-linear loads form a sizeable portion of industrial load nowadays. This gives rise to harmonics. Harmonics are produced majorly dueto switching activities of power electronic components. The IEEE-519 limits the
            harmonic injection from individual customers. We do a detail harmonic analysis to
            ensure the harmonic content of the system complies with this standard. We also provide recommendations to mitigate the problems arising due to harmonics such
            as heating or false operation of devices.</div>
        </div>
      </div>
      <div className="row">
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon2}/></span>
          <span className="service-title">Short Circuit Study</span>
            <div className="detailed-service"> Normal functioning of the system is something that we desire. However, events such as short circuit do occur and hence we should design our
            system to withstand such events. Short circuit study determines the short circuit
            currents – both three phase symmetrical and asymmetrical. This helps in proper
            selection of the equipment that should withstand these high currents and act as
            inputs for protective device settings
            </div>
        </div>
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon7}/></span>
          <span className="service-title">Lighting Study</span>
            <div className="detailed-service"> Lighting is a vital part of any project. We use latest lighting level and rendering software so that our client can visualize indoor/outdoor lighting details. We make sure that the lighting rendering diagrams realize in practice. 
            </div>
        </div>
      </div>
      <div className="row">
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon3}/></span>
          <span className="service-title">Protective Device Coordination</span>
            <div className="detailed-service">Interrupting the short circuit currents as quickly
            as possible is of paramount importance for equipment health. But, at the same
            time, minimum power disruption is also desired to keep the business processes up
            and running. The purpose of protective device coordination is to determine the
            characteristics and settings of overcurrent protective devices in a way that we find
            an exact sweet spot. </div>
        </div>
        <div className="services col-sm-12 col-md-12 col-lg-6">
            <span><img className="service-img" src={icon8}/></span>
            <span className="service-title">Electrical Design</span>
            <div className="detailed-service">Documenting the electrical design is important and our clients can rely on us and rest assured. We leverage the power of AutoCAD which allows us to create, modify and document designs. Drafting requires back and forth, but
            our professionals are fully capable to deliver the things timely.</div>
        </div>
      </div>
      <div className="row">
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon4}/></span>
          <span className="service-title">Arc Flash Study</span>
              <div className="detailed-service">Arc flash can be detrimental to the operations of a facility. The
              CSA 2462-2018 Workplace Electrical Safety standard specifies the hazard
              category depending on calculated arc flash incident energy. We carry Arc Flash
              study for all the buses in the system and on the protective devices which a working
              personnel may operate when energized. This helps to determine the protection
              boundary and personal protective equipment that the personnel must use when
              operating within the protection boundary.</div>
        </div>
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon9}/></span>
          <span className="service-title">Motor starting Study</span>
            <div className="detailed-service"> Large induction motors draw a high current as they start. This high current flow through the system causes voltage drop. The purpose of this study is to determine fluctuations in voltage due to motor starting. This helps in
            verifying the acceptability of the motor and starter system.</div>
        </div>
      </div>
      <div className="row">
        <div className="services col-sm-12 col-md-12 col-lg-6">
          <span><img className="service-img" src={icon5}/></span>
          <span className="service-title">Grounding Study</span>
              <div className="detailed-service">There is a rise in ground potential during fault conditions as high currents flow to the ground and create voltage drops. This could be hazardous to the working personnel. The IEEE 80-2000 limits the step and touch potential value and the proposed grounding grid design must comply with these values.
              </div>
          </div>
          <div className="services col-sm-12 col-md-12 col-lg-6">
            <span><img className="service-img" src={icon10}/></span>
            <span className="service-title">Power Generation</span>
              <div className="detailed-service">Being a competitive market structure and with capacity markets implementation just around the corner, we believe that there is an opportunity in the power generation space. Industries can use this to their advantage as they can hedge themselves against electricity price fluctuations and create a stable revenue stream. Simple cycle, combined cycle, combined heat and power are just among a few technology options for the power generation.</div>
          </div>
      </div>
    </div>
  );
}

export default Services;


         
          
         
          