import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import "../css/landing.css";
import Axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
// import image from "../img/undraw_lost_bqr2.svg";
// import {annotate} from "rough-notation"
import image from "../img/iis.jpg";
import Sign from "../img/sign.jpg";

import kip from "../img/kip.jpg"
// import developer from "../img/developer_outline I.svg";
// import login from "../img/login-1.svg";
// import list_item from "../img/list-item.svg";
import list from "../img/list.jpg";
// import notification from "../img/notification.svg";
import note from "../img/note.webp"
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import instagram from "../img/instagram.svg";
import mail from "../img/mail.svg";
import feature from "../img/feature.svg";

// import image from "../img/earth.svg";
import { Container, Row, Button, Form } from "react-bootstrap";
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const postitem = () => {
  //   if (localStorage.getItem("user") !== null) {
  //     console.log("User already logged in !");
  //   } else {
  //     console.log("Not logged in");
  //   }
  // };
  const ref = useRef();
  AOS.init();

  // You can also pass an optional settings object
  // below listed default settings
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  // const e=document.getElementById('.title-h')
  // const annotation=annotate(e,{ type: 'underline' })
  // annotation.show()
  const sendMessage = () => {
    const data = {
      name,
      email,
      message,
    };
    Axios({
      method: "POST",
      url: "http://localhost:5000/sendmessage",
      data: data,
    })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <Navbar />
      <div data-aos="fade-right" className="main">
        <div className="intro">
          <div className="part-1">
            <div className="title">
              <h1 id="title-h">Item Finder</h1>
              <p>HAVE YOU FOUND OR LOST ANYTHING ?</p>
              <Button
                variant="custom"
                size="lg"
                onClick={() => {
                  ref.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="part-2">
            <div className="image">
              <img
                src={image}
                style={{ width: "500px", height: "500px" }}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <div className="post-item">
          <button class="button" onClick={postitem}>Post Item</button>
        </div>         */}
      </div>
      {/* <div className="project-inspiration">
        <h6>My Project Inspiration</h6>
        <p>Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.</p>
      </div> */}
      <div data-aos="fade-right">
        <Container fluid className="total-inspiration">
          <div>
            <img className="kip-img" src={kip} alt=""  height="400" width="400" />
          </div>
          <Row className="inspiration">
            <h6 className="section-heading">HOW IT STARTED!</h6>
            <p>
             Colleges are the place where students like us usually misplace their belongings.So to 
             overcome this most common issue in colleges this website will help the students to find
             their respective belongings.

            </p>
            {/* <Button variant="custom" size="lg" onClick={()=>{ref.current.scrollIntoView({ behavior: 'smooth' })}}>
              Get Started
            </Button> */}
          </Row>
        </Container>
      </div>
      {/* <div data-aos="fade-left">
        <Container fluid>
          <div className="feature">
            <div>
              <h6 className="section-heading">What makes this Unique?</h6>
              <div>
                <p>
                  Personal informartion are is something which should be taken
                  utmost care and should be shared only to the right user.
                </p>
              </div>
            </div>
            <div>
              <img className="feature-img" src={feature} alt="" />
            </div>
          </div>
        </Container>
      </div> */}
      <div data-aos="fade-left">
        <Container fluid>
          <div className="total-about">
            <div ref={ref} className="about-heading">
              <h6 className="section-heading">How it works ?</h6>
            </div>
            <div className="about-card">
              <div className="info">
                <img
                  src={Sign}
                  style={{ width: "260px", height: "260px" }}
                  alt=""
                />
                <h4>Sign Up</h4>
                <p>Sign Up to get started.</p>
                <a href="/log-in">
                  <Button variant="custom" size="lg">
                    Sign Up
                  </Button>
                </a>
              </div>
              <div className="info">
                <img
                  src={list}
                  style={{ width: "260px", height: "260px" }}
                  alt=""
                />
                <h4>List Missing Items</h4>
                <p>
                  List the missing item details with the image.
                </p>
              </div>


              <div className="info">
                <img
                  src={note}
                  style={{ width: "260px", height: "260px" }}
                  alt=""
                />
                <h4>Get Alert</h4>
                <p>
                  If any registered user post any information about the missing item in Colleges
                  it will send aware notification immediately.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>


      <div data-aos="fade-right">
        <Container fluid>
          <div className="total-contact-form">
            <div className="contact-title">
              <h6 className="section-heading"> HELP & SUPPORT</h6>
              <p>
                  For Help and Support please reach out Admin Block.
              </p>
            </div>
            <div className="contact-form">
              <Form>
                <Form.Label>Email Address :</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                    type="text"
                    size="lg"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message :</Form.Label>
                  <Form.Control
                    size="lg"
                    as="textarea"
                    rows={6}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </Form.Group>
                <Button variant="custom" onClick={sendMessage}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
      
    </>
  );
}