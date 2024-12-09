import React, { useState, useEffect } from "react";
import requests from "../api/requests";
import axios from "../api/axios";
import "./Banner.css";

export const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    return () => {
      fetchData();
    };
  }, []);

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);
    // 랜덤으로 하나의 영화 정보를 가져오기

    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;

    // 해당 영화 정보를 가져오기
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: {
        append_to_response: "videos",
      },
    });

    setMovie(movieDetail);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button info">More Infomation</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 100)}
        </h1>
        <div className="banner--fadeBottom"></div>
      </div>
    </header>
  );
};
