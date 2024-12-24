import "./Slider.css";

import React from "react";

const Slider = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5681/1415681-h-d4156275b3b3"
                className=""
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Sita Ram</h1>
                <p className="content-des">
                  On a letter-delivering task, Afreen learns of a 20-year-old
                  romance set amidst a war. Her quest to trace the lovers makes
                  her embrace humanity beyond borders.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Anupama</h1>
                <p className="content-des">
                  Despite the many challenges thrown her way, Anupama begins a
                  new chapter of her life post-divorce. Head held always high,
                  what's waiting for her next?r
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5979/1425979-h-34e430222f41"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Freddy</h1>
                <p className="content-des">
                  Dr. Freddy Ginwala is a shy and socially awkward dentist in
                  Mumbai. He goes on multiple dates with women, only to get
                  rejected everytime.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5600/1425600-h-135c54b9c793"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Monster</h1>
                <p className="content-des">
                  Bhamini and Anil Chandra are a married couple who have a
                  daughter named Kunjatta from Anil's first wife, and live a
                  happy life with their caretaker Durga. Anil, who used to be a
                  software engineer but was fired from his company, becomes a
                  taxi driver to survive.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-image-box">
              <img
                src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h"
                className="w-60"
                alt="..."
              />
              <div className="carousel-image-border-left"></div>
            </div>
            <div className="carousel-content-box">
              <div className="carousel-content">
                <h1 className="content-title">Chhichhore</h1>
                <p className="content-des">
                  Anirudh "Anni" Pathak is a divorced middle-aged man living
                  with his teenage son Raghav Pathak, an aspiring engineer, who
                  is awaiting the results of his entrance examination in the
                  hope of enrolling in the Indian Institute of Technology.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>
  );
};

export default Slider;
