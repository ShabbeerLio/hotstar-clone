import React from "react";
import SliderData from "../Slider/SliderData";
import "./Banner.css";
import { IoPlay ,IoAdd} from "react-icons/io5";
import Slider from "../Slider/Slider";
import BannerSlider from "./BannerSlider";


const Banner = () => {
  return (
    <div className="Banner">
      <div className="Banner-main">
        {SliderData.slice(2, 3).map((item, index) => (
          <div className="Banner-box" key={index}>
            <div className="Banner-image">
              <img src={item.image} alt="" />
              <div className="Banner-image-border-bottom"></div>
            </div>
            <div className="Banner-box-detail">
              <h2>{item.title}</h2>
              <div className="Banner-desc">
                <li>2024</li>
                <li>1h 55m</li>
                <li>Hindi</li>
                <li>U/A 18+</li>
              </div>
              <p>{item.description}</p>
              <h5>Drama | Betrayal | Revenge</h5>
              <div className="Banner-btn">
                <p className="play-btn"><IoPlay/> Watch Now</p>
                <p className="add-btn"><IoAdd/></p>
              </div>
            </div>
          </div>
        ))}
        <div className="Banner-slider">
            <BannerSlider SliderData={SliderData}/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
