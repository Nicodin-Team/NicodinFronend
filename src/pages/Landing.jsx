import React from "react";
import { Link } from "react-router-dom";

import "./landing.css";
import imageagreement from "../assets/Icons/agreement.png";
import imagearrow from "../assets/Icons/Arrow_icon.png";
import imagebriefcase from "../assets/Icons/briefcase.png";
import imagechat from "../assets/Icons/chat.png";
import MyAnimation from "../components/landing/animation";

export default function Landing() {
  return (
    <>
      <div className="landing">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <img src={imagegrowth} alt="" /> */}

                <li className="nav-item">
                  <Link
                    className=" ms-3 mt-2 icon-custom nav-link active"
                    aria-current="page"
                    //   href="#"
                    to="/login"
                  >
                    Team Up
                  </Link>
                </li>

                <li className="nav-item">
                  <a
                    className=" ms-5  mt-2 nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link  mt-2 ms-5" href="#">
                    Category
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mt-2 ms-5" href="#">
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link mt-2  ms-5" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex ">
              <a className="me-4  mt-2" href="">
                Log In
              </a>

              <a className=" signup-button " href="">
                Sign Up
              </a>
            </div>
          </div>
        </nav>

        <section className="mt-5 margin-container">
          <h1 className="text-sec">
            The best jobsite <br />
            for your <span className=" mb-2 text-sec-specific">future</span>
          </h1>

          <p className="text-sec-p  mt-5">
            We help you to find the best job ands teams to build your future and
            build a better
            <br /> future of digital era
          </p>
        </section>

        <section classNameName="mb-3">
          <div className="oval"> </div>
          <div className="oval2"> </div>
          <div className="oval3"> </div>
          <div className="oval4"> </div>
        </section>

        <section className="mt-5  margin-container">
          <a className="button-Get me-5" href="">
            Get It Now
          </a>
          <a className="ms-5  link-learn">
            Learn More
            <img className="size-icon" src={imagearrow} alt="" />
          </a>
        </section>

        {/* <section className="support-sec mt-5 ">

        <h2 className="  margin-container ">Supported by 3K <br/> companies:</h2>

        <div className="d-flex  mt-5 ms-4">

            <div className="ms-5">
                <h2 className="   support-sec--h2">Meta</h2>
                <img src="./Icons/Meta.png" alt=""/>

            </div>

            <div className="ms-5">
                <h2 className=" support-sec--h2">Google</h2>
                <img src="./Icons/google.png" alt=""/>

            </div>

            <div className="ms-5">
                <h2 className="    support-sec--h2">Linkedin</h2>
                <img src="./Icons/linkedin.png" alt=""/>

            </div>

        </div>

    </section> */}

        <section className="empty-sec me-4">
          <MyAnimation />
        </section>

        <section className="sec-info ">
          <div className="d-flex justify-content-between sec-info--margin ">
            <div>
              <h2 className="sec-info--h2">
                1,9<span className="sec-info--specific">k+</span>
              </h2>
              <p className="sec-info--p">
                Ready job
                <br />
                Vacancy
              </p>
            </div>

            <div>
              <h2 className="sec-info--h2">
                276<span className="sec-info--specific">k+</span>{" "}
              </h2>
              <p className="sec-info--p">
                Job seekers
                <br />
                Active
              </p>
            </div>

            <div>
              <h2 className="sec-info--h2">
                3,4<span className="sec-info--specific">k+</span>
              </h2>
              <p className="sec-info--p">
                Incorporated
                <br />
                Company
              </p>
            </div>
          </div>
        </section>

        <section className="sec-find  ">
          <div className=" space-div"></div>

          <h1 className="sec-find--text ">
            More easier to find a job <br />
            with our platform
          </h1>

          <p className="sec-find--p ">
            The following features make our service easier to help you find
            suitable <br />
            jobs from various companies
          </p>

          <div className="sec-icon d-flex justify-content-between  ">
            <div>
              <img src={imageagreement} alt="" />

              <h2 className="sec-icon--h2">Easy Applying</h2>
              <p className="sec-icon--p">
                The process of applying for a job is <br />
                easier and faster
              </p>
            </div>

            <div>
              <img src={imagebriefcase} alt="" />

              <h2 className="sec-icon--h2">Many Vacancies</h2>
              <p className="sec-icon--p">
                There are many job vacancies from <br />
                various companies
              </p>
            </div>

            <div>
              <img src={imagechat} alt="" />

              <h2 className="sec-icon--h2">Best Support</h2>
              <p className="sec-icon--p">
                We provide full support for job seekers <br />
                for better results
              </p>
            </div>
          </div>
        </section>
        <footer className="footer-section mt-5  layout_padding_top text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mt-5">
                <div className="d-flex flex-column ">
                  <h1 className="custom-font fs-1 footer-section__text-color">
                    Contact Us
                  </h1>

                  <div className="d-flex flex-column footer-section__footer-contact  mt-4">
                    <a href="">
                      <i className=" fa fa-phone  footer-section__text-color "></i>
                      <span>Call +98 09129992222</span>
                    </a>

                    <a href="">
                      <i className="fa fa-envelope footer-section__text-color "></i>
                      <span>mredris2002@gmail.com</span>
                    </a>

                    <a href="https://maps.app.goo.gl/u8GdcF2UgtyVS5MRA">
                      <i className="fa fa-location  footer-section__text-color "></i>
                      <span>Location</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 footer-detail ">
                <div className="  mt-5 ">
                  <h1 className=" mb-4  footer-section__text-color">
                    {/* <img className="size_icon mx-1" src={imagegrowth} alt="" />{" "} */}
                    Team Up
                  </h1>
                  <p className="mb-3 footer-section__text-color2">
                    One of the Best site for you to find a job and good team for
                    your work.
                  </p>
                  <div className="  d-flex footer-section__footer-social ms-3 justify-content-center fs-3">
                    <a href="">
                      <i className="fab fa-facebook  "></i>
                    </a>
                    <a href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-telegram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 info-section">
                <div className=" --text-color text-center mt-5 ">
                  <h4 className="fs-1 footer-section__text-color ">Info</h4>
                  <p className="mt-3"></p>
                  <p></p>
                </div>
              </div>

              <div className="mt-5">
                <p className="fs-6  footer-section__text-color2">
                  All Rights Reserved By{" "}
                  <span className="fs-3 footer-section__text-color color">
                    Team Up
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
