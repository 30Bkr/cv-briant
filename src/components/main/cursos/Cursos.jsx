'use client'
import CursosCard from "./CursosCard";
import { data } from "@/data";
import styles from './cursos.module.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Cursos(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1116,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          dots:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots:false,
          infinite:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true
        }
      }
    ]
  };
  return(
    <section className={styles.contenedor} id="cursos">
      <h2>Conocimientos y Cursos Aprobados</h2>
      <div className={styles.contenedor2}>
        <Slider {...settings}>
          {data.map((datos, index)=>{
            return(
              <CursosCard data={datos} key={index}/>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}