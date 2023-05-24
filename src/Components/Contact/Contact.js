import React from "react";
import "./Contact.css";
import {RiSendPlaneFill} from "react-icons/ri";
import Fade from 'react-reveal/Fade';


const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
        < Fade left>
            <div className="contact-form-image">
                <img src="https://img.freepik.com/free-photo/workdesk-with-envelopes-laptop_1134-195.jpg?size=626&ext=jpg" alt="img email"/>
            </div>
            </Fade>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
        < Fade right>
            <div className="contact-form-design">
                <div className="text-center">
                    <h5>Contactez moi!</h5>
                </div>
                <form>
                    <div className="contact-form">
                        <label className="form-label">
                            Nom
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="contact-form">
                        <label className="form-label">
                           e-mail
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="contact-form">
                        <label className="form-label">
                            Job type
                        </label>
                        <select className="custom-select-tag">
                            <option> </option>
                            <option>Alternance</option>
                            <option>Stage</option>
                            <option>CDD</option>
                            <option>CDI</option>
                            <option>Autres</option>
                        </select>

                        <div className="contact-form">
                        <label className="form-label">
                          Message
                        </label>
                        <textarea rows={4} type="message" className="form-control"/>
                    </div>
                    <div className="button-submit">
                        <p>Envoyer  <RiSendPlaneFill className="button-submit-icon"/> </p>
                    </div>
                    </div>
                </form>
            </div>
            </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
