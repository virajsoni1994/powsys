import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import icon from "../../images/dummy_Icon.png";

function Services() {
  return (
    <div className="services-container">
      <h2 className="service-heading">Services</h2>
      <div className="left-services col-md-6">
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Load Flow Study</span>
            <div className="detailed-service"> The purpose of this study is to determine the voltage drops over cables and gauge the power flows on the network. We work in collaboration with
            our client to gather all the data and effectively model the system. We then use
            cutting edge software as tool to analyze the system, get insights and provide
            recommendations that benefit our client.
            </div>
        </div>
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Short Circuit Study</span>
            <div className="detailed-service"> Normal functioning of the system is something that we desire. However, events such as short circuit do occur and hence we should design our
            system to withstand such events. Short circuit study determines the short circuit
            currents – both three phase symmetrical and asymmetrical. This helps in proper
            selection of the equipment that should withstand these high currents and act as
            inputs for protective device settings
            </div>
        </div>
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Protective Device Coordination</span>
            <div className="detailed-service">Interrupting the short circuit currents as quickly
            as possible is of paramount importance for equipment health. But, at the same
            time, minimum power disruption is also desired to keep the business processes up
            and running. The purpose of protective device coordination is to determine the
            characteristics and settings of overcurrent protective devices in a way that we find
            an exact sweet spot. </div>
        </div>
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Arc Flash Study</span>
            <div className="detailed-service">Arc flash can be detrimental to the operations of a facility. The
            CSA 2462-2018 Workplace Electrical Safety standard specifies the hazard
            category depending on calculated arc flash incident energy. We carry Arc Flash
            study for all the buses in the system and on the protective devices which a working
            personnel may operate when energized. This helps to determine the protection
            boundary and personal protective equipment that the personnel must use when
            operating within the protection boundary.</div>
        </div>
      </div>
      <div className="left-services col-md-6">
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Load Flow Study</span>
            <div className="detailed-service"> The purpose of this study is to determine the voltage drops over cables and gauge the power flows on the network. We work in collaboration with
            our client to gather all the data and effectively model the system. We then use
            cutting edge software as tool to analyze the system, get insights and provide
            recommendations that benefit our client.
            </div>
        </div>
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Load Flow Study</span>
            <div className="detailed-service"> Normal functioning of the system is something that we desire. However, events such as short circuit do occur and hence we should design our
            system to withstand such events. Short circuit study determines the short circuit
            currents – both three phase symmetrical and asymmetrical. This helps in proper
            selection of the equipment that should withstand these high currents and act as
            inputs for protective device settings
            </div>
        </div>
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Load Flow Study</span>
            <div className="detailed-service">Interrupting the short circuit currents as quickly
            as possible is of paramount importance for equipment health. But, at the same
            time, minimum power disruption is also desired to keep the business processes up
            and running. The purpose of protective device coordination is to determine the
            characteristics and settings of overcurrent protective devices in a way that we find
            an exact sweet spot. </div>
        </div>
        <div className="service">
            <span><img className="img-icon" src={icon}/></span>
            <span className="service-title">Load Flow Study</span>
            <div className="detailed-service">Arc flash can be detrimental to the operations of a facility. The
            CSA 2462-2018 Workplace Electrical Safety standard specifies the hazard
            category depending on calculated arc flash incident energy. We carry Arc Flash
            study for all the buses in the system and on the protective devices which a working
            personnel may operate when energized. This helps to determine the protection
            boundary and personal protective equipment that the personnel must use when
            operating within the protection boundary.</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
