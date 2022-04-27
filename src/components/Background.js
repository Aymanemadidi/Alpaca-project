import { useState, useReducer } from "react";
import "./test.css";

/*------------------EYES----------------------*/

import angryEye from "../../alpaca/eyes/angry.png";
import defaultEye from "../../alpaca/eyes/default.png";
import naughtyEye from "../../alpaca/eyes/naughty.png";
import pandaEye from "../../alpaca/eyes/panda.png";
import smartEye from "../../alpaca/eyes/smart.png";
import starEye from "../../alpaca/eyes/star.png";

/*-----------------BG------------------------*/

import blue50 from "../../alpaca/backgrounds/blue50.png";
import darkblue30 from "../../alpaca/backgrounds/darkblue30.png";
import green50 from "../../alpaca/backgrounds/green50.png";
import grey40 from "../../alpaca/backgrounds/grey40.png";
import red50 from "../../alpaca/backgrounds/red50.png";
import yellow70 from "../../alpaca/backgrounds/yellow70.png";

/* ---------------HAIR-------------------*/

import curls from "../../alpaca/hair/curls.png";
import defaultHair from "../../alpaca/hair/default.png";
import elegant from "../../alpaca/hair/elegant.png";
import fancy from "../../alpaca/hair/fancy.png";
import quiff from "../../alpaca/hair/quiff.png";
import short from "../../alpaca/hair/short.png";

/*----------------NECK----------------------*/

import bendBackward from "../../alpaca/neck/bend-backward.png";
import bendForward from "../../alpaca/neck/bend-forward.png";
import neckDefault from "../../alpaca/neck/default.png";
import thick from "../../alpaca/neck/thick.png";

/*-------------------MOUTH--------------------------*/

import astonished from "../../alpaca/mouth/astonished.png";
import defaultMouth from "../../alpaca/mouth/default.png";
import eating from "../../alpaca/mouth/eating.png";
import laugh from "../../alpaca/mouth/laugh.png";
import tongue from "../../alpaca/mouth/tongue.png";

import nose from "../../alpaca/nose.png";

/*-----------------------------------------------------*/

function Background() {
  const [bgSrc, setBgSrc] = useState(blue50);
  const [hairSrc, setHairSrc] = useState(defaultHair);
  const [neckSrc, setNeckSrc] = useState(neckDefault);
  const [mouthSrc, setMouthSrc] = useState(defaultMouth);
  const [eyeSrc, setEyeSrc] = useState(defaultEye);

  const eyeArr = [
    { src: angryEye, action: "angryEye", id: 1 },
    { src: defaultEye, action: "defaultEye", id: 2 },
    { src: naughtyEye, action: "naughtyEye", id: 4 },
    { src: pandaEye, action: "pandaEye", id: 5 },
    { src: smartEye, action: "smartEye", id: 6 },
    { src: starEye, action: "starEye", id: 7 },
  ];

  const bgArr = [
    { src: blue50, action: "blue50", id: 1 },
    { src: darkblue30, action: "darkblue30", id: 2 },
    { src: green50, action: "green50", id: 4 },
    { src: grey40, action: "grey40", id: 5 },
    { src: red50, action: "red50", id: 6 },
    { src: yellow70, action: "yellow70", id: 7 },
  ];

  const hairArr = [
    { src: curls, action: "curls", id: 2 },
    { src: defaultHair, action: "defaultHair", id: 4 },
    { src: elegant, action: "elegant", id: 5 },
    { src: fancy, action: "fancy", id: 6 },
    { src: quiff, action: "quiff", id: 7 },
  ];

  const neckArr = [
    { src: bendBackward, action: "bendBackward", id: 1 },
    { src: bendForward, action: "bendForward", id: 2 },
    { src: neckDefault, action: "defaultNeck", id: 3 },
    { src: thick, action: "thick", id: 4 },
  ];

  const mouthArr = [
    { src: astonished, action: "astonished", id: 1 },
    { src: defaultMouth, action: "defaultMouth", id: 2 },
    { src: eating, action: "eating", id: 3 },
    { src: laugh, action: "laugh", id: 4 },
    { src: tongue, action: "tongue", id: 5 },
  ];

  return (
    <>
      <div className=" bbb flex flex-col items-center bg-redish lg:flex-row lg:justify-around">
        <div className="bg-container">
          <img className="bg" src={bgSrc} alt="" />
          <div className="wrapper">
            <img className="hairS z-2 absolute" src={hairSrc} alt="" />
            <img className="neck z-2 absolute" src={neckSrc} alt="" />
            <img className="eye z-2 absolute" src={eyeSrc} alt="" />
            <img className="nose z-2 absolute" src={nose} alt="" />
            <img className="mouth z-2 absolute" src={mouthSrc} alt="" />
          </div>
        </div>
        <div class="buttons">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
      <div className="buttons-containers">
        <div className="flex flex-row justify-center pt-7 gap-2">
          {bgArr.map((el, index) => {
            return (
              <button
                onClick={() => {
                  setBgSrc(el.src);
                }}
                className="p-1 text-sm ml-3 text-white bg-navbar hover:bg-white hover:text-navbar"
                key={index}
              >
                {el.action}
              </button>
            );
          })}
        </div>
        <div className="flex flex-row justify-center pt-7 gap-2">
          {hairArr.map((el, index) => {
            return (
              <button
                onClick={() => {
                  setHairSrc(el.src);
                }}
                className="p-1 text-sm ml-3 text-white bg-navbar hover:bg-white hover:text-navbar"
                key={index}
              >
                {el.action}
              </button>
            );
          })}
        </div>
        <div className="flex flex-row justify-center pt-7 gap-2">
          {neckArr.map((el, index) => {
            return (
              <button
                onClick={() => {
                  setNeckSrc(el.src);
                }}
                className="p-1 text-sm ml-3 text-white bg-navbar hover:bg-white hover:text-navbar"
                key={index}
              >
                {el.action}
              </button>
            );
          })}
        </div>
      </div>
      <div className="">
        <div className="flex flex-row justify-center pt-7 gap-2">
          {mouthArr.map((el, index) => {
            return (
              <button
                onClick={() => {
                  setMouthSrc(el.src);
                }}
                className="p-1 text-sm ml-3 text-white bg-navbar hover:bg-white hover:text-navbar"
                key={index}
              >
                {el.action}
              </button>
            );
          })}
        </div>

        <div className="flex flex-row justify-center pt-7 pb-7 gap-2">
          {eyeArr.map((el, index) => {
            return (
              <button
                onClick={() => {
                  setEyeSrc(el.src);
                }}
                className="p-1 text-sm ml-3 text-white bg-navbar hover:bg-white hover:text-navbar"
                key={index}
              >
                {el.action}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Background;
