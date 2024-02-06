import React, { useState } from "react";

import "./photoGallery.css";
import Gallery1Photo1 from "../../../assets/Home/photo_gallery/1/photo1.png";
import Gallery1Photo2 from "../../../assets/Home/photo_gallery/1/photo2.png";
import Gallery1Photo3 from "../../../assets/Home/photo_gallery/1/photo3.png";
import Gallery1Photo4 from "../../../assets/Home/photo_gallery/1/photo4.png";
import Gallery1Photo5 from "../../../assets/Home/photo_gallery/1/photo5.png";
import Gallery1Photo6 from "../../../assets/Home/photo_gallery/1/photo6.png";
import Gallery1Photo7 from "../../../assets/Home/photo_gallery/1/photo7.png";

import Gallery2Photo1 from "../../../assets/Home/photo_gallery/2/photo1.png";
import Gallery2Photo2 from "../../../assets/Home/photo_gallery/2/photo2.png";
import Gallery2Photo3 from "../../../assets/Home/photo_gallery/2/photo3.png";
import Gallery2Photo4 from "../../../assets/Home/photo_gallery/2/photo4.png";
import Gallery2Photo5 from "../../../assets/Home/photo_gallery/2/photo5.png";
import Gallery2Photo6 from "../../../assets/Home/photo_gallery/2/photo6.png";
import Gallery2Photo7 from "../../../assets/Home/photo_gallery/2/photo7.png";

import Gallery3Photo1 from "../../../assets/Home/photo_gallery/3/photo1.png";
import Gallery3Photo2 from "../../../assets/Home/photo_gallery/3/photo2.png";
import Gallery3Photo3 from "../../../assets/Home/photo_gallery/3/photo3.png";
import Gallery3Photo4 from "../../../assets/Home/photo_gallery/3/photo4.png";
import Gallery3Photo5 from "../../../assets/Home/photo_gallery/3/photo5.png";
import Gallery3Photo6 from "../../../assets/Home/photo_gallery/3/photo6.png";
import Gallery3Photo7 from "../../../assets/Home/photo_gallery/3/photo7.png";

function PhotoGallery({...props}) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="gallery-container" id={props.id}>
      <div className="gallery-tabs">
        <span
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          className={`tab ${openTab === 1 ? "tab-active" : ""}`}
        >
          Congressos
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          className={`tab ${openTab === 2 ? "tab-active" : ""}`}
        >
          Workshop
        </span>
        <span
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          className={`tab ${openTab === 3 ? "tab-active" : ""}`}
        >
          Parceiros
        </span>
      </div>
      {openTab === 1 && (
        <div className="gallery-wrapper1 gallery-1">
          <div
            className="gallery-item"
            style={{
              height: "342px",
              gridColumn: 1,
              gridRow: 1,
              gridArea: "photo1",
              gridRowStart: 1,
              gridRowEnd: 1,
            }}
          >
            <img src={Gallery1Photo1} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "234px",
              gridColumn: 1,
              gridRow: 2,
              gridArea: "photo2",
              gridRowStart: 2,
              gridRowEnd: 2,
              alignSelf: "start",
              position: "absolute",
              top: 440,
              left: 2,
            }}
          >
            <img src={Gallery1Photo2} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "596px",
              gridColumn: 2,
              gridRow: 1,
              gridArea: "photo3",
              gridRowStart: 1,
              gridRowEnd: 2,
            }}
          >
            <img src={Gallery1Photo3} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "192px",
              gridColumn: 3,
              gridRow: 1,
              gridArea: "photo4",
              gridRowStart: 1,
              gridRowEnd: 2,
            }}
          >
            <img src={Gallery1Photo4} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "384px",
              gridColumn: 3,
              gridRow: 2,
              gridArea: "photo5",
              gridRowStart: 2,
              gridRowEnd: 2,
              position: "absolute",
              top: 288,
              right: 332,
            }}
          >
            <img src={Gallery1Photo6} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "407px",
              gridColumn: 4,
              gridRow: 1,
              gridArea: "photo6",
              gridRowStart: 1,
              gridRowEnd: 1,
            }}
          >
            <img src={Gallery1Photo5} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "169px",
              gridColumn: 4,
              gridRow: 2,
              gridArea: "photo7",
              gridRowStart: 2,
              gridRowEnd: 2,
              position: "absolute",
              top: 500,
              right: 2,
            }}
          >
            <img src={Gallery1Photo7} alt="" />
          </div>
        </div>
      )}
      {openTab === 2 && (
        <div className="gallery-wrapper1 gallery-1">
          <div
            className="gallery-item"
            style={{
              height: "342px",
              gridColumn: 1,
              gridRow: 1,
              gridArea: "photo1",
              gridRowStart: 1,
              gridRowEnd: 1,
            }}
          >
            <img src={Gallery2Photo1} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "234px",
              gridColumn: 1,
              gridRow: 2,
              gridArea: "photo2",
              gridRowStart: 1,
              gridRowEnd: 2,
              position: "absolute",
              top: 440,
              left: 2,
            }}
          >
            <img src={Gallery2Photo4} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "596px",
              gridColumn: 2,
              gridRow: 1,
              gridArea: "photo3",
              gridRowStart: 1,
              gridRowEnd: 2,
            }}
          >
            <img src={Gallery2Photo2} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "192px",
              gridColumn: 3,
              gridRow: 1,
              gridArea: "photo4",
              gridRowStart: 1,
              gridRowEnd: 2,
            }}
          >
            <img src={Gallery2Photo3} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "384px",
              gridColumn: 3,
              gridRow: 2,
              gridArea: "photo5",
              gridRowStart: 2,
              gridRowEnd: 2,
              position: "absolute",
              top: 288,
              right: 332,
            }}
          >
            <img src={Gallery2Photo6} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "407px",
              gridColumn: 4,
              gridRow: 1,
              gridArea: "photo6",
              gridRowStart: 1,
              gridRowEnd: 1,
            }}
          >
            <img src={Gallery2Photo5} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "169px",
              gridColumn: 4,
              gridRow: 2,
              gridArea: "photo7",
              gridRowStart: 2,
              gridRowEnd: 2,
              position: "absolute",
              top: 500,
              right: 2,
            }}
          >
            <img src={Gallery2Photo7} alt="" />
          </div>
        </div>
      )}
      {openTab === 3 && (
        <div className="gallery-wrapper1 gallery-1">
          <div
            className="gallery-item"
            style={{
              height: "342px",
              gridColumn: 1,
              gridRow: 1,
              gridArea: "photo1",
              gridRowStart: 1,
              gridRowEnd: 1,
            }}
          >
            <img src={Gallery3Photo1} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "234px",
              gridColumn: 1,
              gridRow: 2,
              gridArea: "photo2",
              gridRowStart: 1,
              gridRowEnd: 2,
              position: "absolute",
              top: 440,
              left: 2,
            }}
          >
            <img src={Gallery3Photo2} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "596px",
              gridColumn: 2,
              gridRow: 1,
              gridArea: "photo3",
              gridRowStart: 1,
              gridRowEnd: 2,
            }}
          >
            <img src={Gallery3Photo3} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "192px",
              gridColumn: 3,
              gridRow: 1,
              gridArea: "photo4",
              gridRowStart: 1,
              gridRowEnd: 2,
            }}
          >
            <img src={Gallery3Photo4} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "384px",
              gridColumn: 3,
              gridRow: 2,
              gridArea: "photo5",
              gridRowStart: 2,
              gridRowEnd: 2,
              position: "absolute",
              top: 288,
              right: 332,
            }}
          >
            <img src={Gallery3Photo5} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "407px",
              gridColumn: 4,
              gridRow: 1,
              gridArea: "photo6",
              gridRowStart: 1,
              gridRowEnd: 1,
            }}
          >
            <img src={Gallery3Photo6} alt="" />
          </div>
          <div
            className="gallery-item"
            style={{
              height: "169px",
              gridColumn: 4,
              gridRow: 2,
              gridArea: "photo7",
              gridRowStart: 2,
              gridRowEnd: 2,
              position: "absolute",
              top: 500,
              right: 2,
            }}
          >
            <img src={Gallery3Photo7} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
