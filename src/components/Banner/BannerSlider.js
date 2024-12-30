import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BannerSlider = ({ SliderData }) => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    return (
        <div className="movies-list">
            <button className="pre-btn" title="btn">
                <img src="/images/pre.png" alt="" />
            </button>
            <button className="nxt-btn" title="btn">
                <img src="/images/nxt.png" alt="" />
            </button>
            <div className="card-container">
                {SliderData.map((item) => (
                    <div
                        className="card"
                        key={item.id}
                        onClick={(navigateTo) => {
                            navigate(`/movie/${item.id}`);
                        }}
                    >
                        <img
                            src={item.image}
                            className="card-img"
                            alt=""
                        />
                        <div className="card-body">
                            <h2 className="name">{item.title}</h2>
                            <h6 className="des">{item.description.slice(0, 40)}...</h6>
                            <button className="watchlist-btn">+ Watchlist</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BannerSlider
