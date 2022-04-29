import { useState, useReducer } from "react";
import "./main.css";

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

/*-------------------Leg---------------------------------*/

import bubbleTea from "../../alpaca/leg/bubble-tea.png";
import cookie from "../../alpaca/leg/cookie.png";
import defaultLeg from "../../alpaca/leg/default.png";
import gameConsole from "../../alpaca/leg/game-console.png";
import tiltBackward from "../../alpaca/leg/tilt-backward.png";
import tiltForward from "../../alpaca/leg/tilt-forward.png";

/*----------------------Ears--------------------------*/
import defaultEar from "../../alpaca/ears/default.png";
import earBackward from "../../alpaca/ears/tilt-backward.png";
import earForward from "../../alpaca/ears/tilt-forward.png";

/*---------------------Acc-------------------------*/

import earings from "../../alpaca/accessories/earings.png";
import flower from "../../alpaca/accessories/flower.png";
import glasses from "../../alpaca/accessories/glasses.png";
import headphone from "../../alpaca/accessories/headphone.png";

/*----------------------------------------------------------*/

import nose from "../../alpaca/nose.png";

/*-----------------------------------------------------*/

function Background() {
  const [bgSrc, setBgSrc] = useState(blue50);
  const [hairSrc, setHairSrc] = useState(defaultHair);
  const [neckSrc, setNeckSrc] = useState(neckDefault);
  const [mouthSrc, setMouthSrc] = useState(defaultMouth);
  const [eyeSrc, setEyeSrc] = useState(defaultEye);
  const [legSrc, setLegSrc] = useState(defaultLeg);
  const [earSrc, setEarSrc] = useState(defaultEar);
  const [accSrc, setAccSrc] = useState(headphone);

  const eyeArr = [
    "Eyes",
    [
      { src: angryEye, action: "angryEye" },
      { src: defaultEye, action: "defaultEye" },
      { src: naughtyEye, action: "naughtyEye" },
      { src: pandaEye, action: "pandaEye" },
      { src: smartEye, action: "smartEye" },
      { src: starEye, action: "starEye" },
    ],
    setEyeSrc,
  ];

  const bgArr = [
    "Background",
    [
      { src: blue50, action: "blue50" },
      { src: darkblue30, action: "darkblue30" },
      { src: green50, action: "green50" },
      { src: grey40, action: "grey40" },
      { src: red50, action: "red50" },
      { src: yellow70, action: "yellow70" },
    ],
    setBgSrc,
  ];

  const hairArr = [
    "Hair",
    [
      { src: curls, action: "curls" },
      { src: defaultHair, action: "default" },
      { src: elegant, action: "elegant" },
      { src: fancy, action: "fancy" },
    ],
    setHairSrc,
  ];

  const neckArr = [
    "Neck",
    [
      { src: bendBackward, action: "bendBackward" },
      { src: bendForward, action: "bendForward" },
      { src: neckDefault, action: "defaultNeck" },
      { src: thick, action: "thick" },
    ],
    setNeckSrc,
  ];

  const mouthArr = [
    "Mouth",
    [
      { src: astonished, action: "astonished" },
      { src: defaultMouth, action: "defaultMouth" },
      { src: eating, action: "eating" },
      { src: laugh, action: "laugh" },
      { src: tongue, action: "tongue" },
    ],
    setMouthSrc,
  ];

  const legArr = [
    "Legs",
    [
      { src: bubbleTea, action: "bubbleTea" },
      { src: cookie, action: "cookie" },
      { src: defaultLeg, action: "defaultLeg" },
      { src: gameConsole, action: "gameConsole" },
      { src: tiltBackward, action: "tiltBackward" },
      { src: tiltForward, action: "tiltForward" },
    ],
    setLegSrc,
  ];

  const earArr = [
    "Ears",
    [
      { src: defaultEar, action: "defaultEar" },
      { src: earBackward, action: "earBackward" },
      { src: earForward, action: "earForward" },
    ],
    setEarSrc,
  ];

  const accArr = [
    "Accessories",
    [
      { src: earings, action: "earings" },
      { src: flower, action: "flower" },
      { src: glasses, action: "glasses" },
      { src: headphone, action: "headphone" },
    ],
    setAccSrc,
  ];

  const finalArr = [
    eyeArr,
    hairArr,
    accArr,
    earArr,
    legArr,
    mouthArr,
    neckArr,
    bgArr,
  ];

  const items1 = ["Hair", "Ears", "Eyes"];

  const items2 = ["Mouth", "Neck", "Legs"];

  const items3 = ["Accessories", "Background"];

  const [shown, setShown] = useState(null);

  return (
    <>
      <div className=" bbb flex flex-col items-center lg:flex-row lg:justify-evenly">
        <div className="bg-container">
          <img className="bg" src={bgSrc} alt="" />
          <div className="wrapper">
            <img className="hairS z-2 absolute" src={hairSrc} alt="" />
            <img className="neck z-2 absolute" src={neckSrc} alt="" />
            <img className="eye z-2 absolute" src={eyeSrc} alt="" />
            <img className="nose z-2 absolute" src={nose} alt="" />
            <img className="mouth z-2 absolute" src={mouthSrc} alt="" />
            <img className="leg z-2 absolute" src={legSrc} alt="" />
            <img className="ear absolute" src={earSrc} alt="" />
            <img className="acc absolute" src={accSrc} alt="" />
          </div>
        </div>
        <div className="buttons flex flex-wrap flex-col gap-1">
          <h3 className="customize">Customize your Alpaca</h3>
          <div className="flex flex-row gap-1">
            {items1.map((item) => (
              <button
                className="px-5 py-2 bg-navbar text-white rounded-md hover:text-navbar hover:bg-white"
                key={item}
                onClick={() => setShown(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-row gap-1">
            {items2.map((item) => (
              <button
                className="px-5 py-2 bg-navbar text-white rounded-md hover:text-navbar hover:bg-white"
                key={item}
                onClick={() => setShown(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex flex-row gap-1">
            {items3.map((item) => (
              <button
                className="px-5 py-2 bg-navbar text-white rounded-md hover:text-navbar hover:bg-white"
                key={item}
                onClick={() => setShown(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="buttons-containers">
        <h3 className="text-center" hidden={shown === null}>
          Choose one of these to change the Alpaca
        </h3>
        <div className="flex flex-row justify-center pt-7 gap-2">
          {finalArr.map((obj) => {
            return obj[1].map((objElement, i) => {
              return (
                <button
                  className="px-5 py-2 rounded-md text-sm text-white bg-navbar hover:bg-white hover:text-navbar"
                  key={i}
                  onClick={() => obj[2](objElement.src)}
                  hidden={shown !== obj[0]}
                >
                  {objElement.action}
                </button>
              );
            });
          })}
        </div>
      </div>
    </>
  );
}

export default Background;
