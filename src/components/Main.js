import { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import download from "downloadjs";

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

function Main() {
  const [bgSrc, setBgSrc] = useState(yellow70);
  const [hairSrc, setHairSrc] = useState(defaultHair);
  const [neckSrc, setNeckSrc] = useState(bendForward);
  const [mouthSrc, setMouthSrc] = useState(eating);
  const [eyeSrc, setEyeSrc] = useState(starEye);
  const [legSrc, setLegSrc] = useState(tiltForward);
  const [earSrc, setEarSrc] = useState(earForward);
  const [accSrc, setAccSrc] = useState(glasses);

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

  const ref = useRef(null);

  const random = () => {
    let random4 = Math.floor(Math.random() * 4);
    let random3 = Math.floor(Math.random() * 3);
    let random6 = Math.floor(Math.random() * 6);

    setBgSrc(bgArr[1][random6].src);
    setHairSrc(hairArr[1][random4].src);
    setNeckSrc(neckArr[1][random4].src);
    setMouthSrc(mouthArr[1][random4].src);
    setEyeSrc(eyeArr[1][random6].src);
    setLegSrc(legArr[1][random6].src);
    setEarSrc(earArr[1][random3].src);
    setAccSrc(accArr[1][random4].src);
  };

  const downloadPng = () => {
    toPng(document.getElementById("alpaca-image")).then(function (dataUrl) {
      download(dataUrl, "alpaca.png");
    });
  };

  return (
    <>
      <div className=" bbb flex flex-col items-center lg:flex-row lg:justify-evenly">
        <div className="bg-container">
          <div className="-translate-y-10" id="alpaca-image">
            <img className="bg " src={bgSrc} alt="" />
            <div className="wrapper">
              <img className=" hairS z-2 absolute" src={hairSrc} alt="" />
              <img className=" neck z-2 absolute" src={neckSrc} alt="" />
              <img className=" eye z-2 absolute" src={eyeSrc} alt="" />
              <img className="  nose z-2 absolute" src={nose} alt="" />
              <img className="  mouth z-2 absolute" src={mouthSrc} alt="" />
              <img className="  leg z-2 absolute" src={legSrc} alt="" />
              <img className=" ear absolute" src={earSrc} alt="" />
              <img className=" acc absolute" src={accSrc} alt="" />
            </div>
          </div>
          <div className=" -translate-y-5 text-center mt-2">
            <button
              className="bg-navbar text-white px-4 py-2 rounded-md"
              onClick={() => downloadPng()}
            >
              Download
            </button>
            <button
              className="ml-4 bg-navbar text-white px-4 py-2 rounded-md"
              onClick={() => random()}
            >
              Random
            </button>
          </div>
        </div>
        <div className="buttons flex flex-wrap flex-col gap-1">
          <h3 className="customize text-lg text-navbar font-semibold">
            Customize your Alpaca
          </h3>
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
        <p
          className="translate-y-4 text-center text-lg text-navbar font-semibold"
          hidden={shown === null}
        >
          Choose one of these to change the Alpaca
        </p>
        <div className=" w-15 flex flex-wrap wra justify-center pt-7 gap-2">
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

export default Main;
