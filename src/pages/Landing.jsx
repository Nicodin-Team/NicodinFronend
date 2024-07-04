import React from "react";
import { Link } from "react-router-dom";

import styles from "./landing.module.css";
import imageagreement from "../assets/Icons/agreement.png";
import imagearrow from "../assets/Icons/Arrow_icon.png";
import imagebriefcase from "../assets/Icons/briefcase.png";
import imagechat from "../assets/Icons/chat.png";
import imagemeta from "../assets/Icons/Meta.png";
import imagegoogle from "../assets/Icons/google.png";
import imagelikedin from "../assets/Icons/linkedin.png";
import MyAnimation from "../components/landing/animation";

export default function Landing() {
  return (
    <>
      <div className={styles.landing}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <img src={imagegrowth} alt="" /> */}

                <li className="nav-item">
                  <Link
                    className={`${styles.icon_custom} ms-3 mt-2 nav-link active`}
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
                  <a className="nav-link mt-2 ms-5" href="#">
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
            <Link
                    className={"me-4 mt-2"}
                    aria-current="page"
                    //   href="#"
                    to="/login"
                  >
                    Log In
                  </Link>
              

            
              <Link
                    className={styles.signup_button}
                    aria-current="page"
                    //   href="#"
                    to="/signup"
                  >
                    Sign Up
                  </Link>
            </div>
          </div>
        </nav>

        <section className={`${styles.margin_container} mt-5`}>
          <h1 className={styles.text_sec}>
            The best jobsite <br />
            for your{" "}
            <span className={`${styles.text_sec_specific} mb-2`}>future</span>
          </h1>

          <p className={`${styles.text_sec_p} mt-5`}>
            We help you to find the best job ands teams to build your future and
            build a better
            <br /> future of digital era
          </p>
        </section>

        <section classNameName="mb-3">
          <div className={styles.oval}> </div>
          <div className={styles.oval2}> </div>
          <div className={styles.oval3}> </div>
          <div className={styles.oval4}> </div>
        </section>

        <section className={`${styles.margin_container} mt-5`}>
          <a className={`${styles.button_Get} me-5`} href="">
            Get It Now
          </a>
          <a className={`${styles.link_learn} ms-5`}>
            Learn More
            <img className={styles.size_icon} src={imagearrow} alt="" />
          </a>
        </section>

        <section className={`${styles.support_sec} mt-5 `}>

        <h2 className={styles.margin_container}>Supported by 3K <br/> companies:</h2>

        <div className="d-flex mt-5 ms-4">

            <div className="ms-5">
                <h2 className={styles.support_sec_h2}>Meta</h2>
                <img src={imagemeta} alt=""/>

            </div>

            <div className="ms-5">
                <h2 className={styles.support_sec_h2}>Google</h2>
                <img src={imagegoogle} alt=""/>

            </div>

            <div className="ms-5">
                <h2 className={styles.support_sec_h2}>Linkedin</h2>
                <img src={imagelikedin} alt=""/>

            </div>

        </div>

    </section>

        <section className={`${styles.empty_sec} me-4`}>
          <MyAnimation />
        </section>

        <section className={styles.sec_info}>
          <div
            className={`${styles.sec_info_margin} justify-content-between d-flex`}
          >
            <div>
              <h2 className={styles.sec_info_h2}>
                1,9<span className={styles.c}>k+</span>
              </h2>
              <p className={styles.sec_info_p}>
                Ready job
                <br />
                Vacancy
              </p>
            </div>

            <div>
              <h2 className={styles.sec_info_h2}>
                276<span className={styles.sec_info_specific}>k+</span>{" "}
              </h2>
              <p className={styles.sec_info_p}>
                Job seekers
                <br />
                Active
              </p>
            </div>

            <div>
              <h2 className={styles.sec_info_h2}>
                3,4<span className={styles.sec_info_specific}>k+</span>
              </h2>
              <p className={styles.sec_info_p}>
                Incorporated
                <br />
                Company
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sec_find}>
          <div className={styles.space_div}></div>

          <h1 className={styles.sec_find_text}>
            More easier to find a job <br />
            with our platform
          </h1>

          <p className={styles.sec_find_p}>
            The following features make our service easier to help you find
            suitable <br />
            jobs from various companies
          </p>

          <div className={`${styles.sec_icon} d-flex justify-content-between`}>
            <div>
              <img src={imageagreement} alt="" />

              <h2 className={styles.sec_icon_h2}>Easy Applying</h2>
              <p className={styles.sec_icon_p}>
                The process of applying for a job is <br />
                easier and faster
              </p>
            </div>

            <div>
              <img src={imagebriefcase} alt="" />

              <h2 className={styles.sec_icon_h2}>Many Vacancies</h2>
              <p className={styles.sec_icon_p}>
                There are many job vacancies from <br />
                various companies
              </p>
            </div>

            <div>
              <img src={imagechat} alt="" />

              <h2 className={styles.sec_icon_h2}>Best Support</h2>
              <p className={styles.sec_icon_p}>
                We provide full support for job seekers <br />
                for better results
              </p>
            </div>
          </div>
        </section>
        <footer
          className={`${styles.footer_section} mt-5 layout_padding_top text_center`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 mt-5">
                <div className="d-flex flex-column ">
                  <h1
                    className={`${styles.footer_section_text_color} custom-font fs-1`}
                  >
                    Contact Us
                  </h1>

                  <div
                    className={`${styles.footer_section_footer_contact} d-flex flex-column mt-4`}
                  >
                    <a href="">
                      <i
                        className={`${styles.footer_section_text_color} fa fa-phone`}
                      ></i>
                      <span>Call +98 09129992222</span>
                    </a>

                    <a href="">
                      <i
                        className={`${styles.footer_section_text_color} fa fa-envelope`}
                      ></i>
                      <span>mredris2002@gmail.com</span>
                    </a>

                    <a href="https://maps.app.goo.gl/fQ72c86Pufqg1igq9">
                      <i
                        className={`${styles.footer_section_text_color} fa fa-location`}
                      ></i>
                      <span>Location</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 footer-detail">
                <div className="mt-5">
                  <h1 className={`${styles.footer_section_text_color} mb-4`}>
                    {/* <img className="size_icon mx-1" src={imagegrowth} alt="" />{" "} */}
                    Team Up
                  </h1>
                  <p className={`${styles.footer_section_text_color2} mb-3`}>
                    One of the Best site for you to find a job and good team for
                    your work.
                  </p>
                  <div
                    className={`${styles.footer_section_footer_social} d-flex ms-3 justify-content-center fs-3`}
                  >
                    <a href="">
                      <i className="fab fa-facebook"></i>
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
                  <h4 className={`${styles.footer_section_text_color} fs-1`}>
                    Info
                  </h4>
                  <p className={`${styles.footer_section_text_color2} mb-3`}>
                    There is no info avilable
                  </p>
                  <p className="mt-3"> </p>
                  <p></p>
                </div>
              </div>

              <div className="mt-5">
                <p className={`${styles.footer_section_text_color2} fs-6`}>
                  All Rights Reserved By{" "}
                  <span
                    className={`${styles.footer_section_text_color} fs-3 color`}
                  >
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
