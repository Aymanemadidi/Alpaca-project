// import angryEye from "../../alpaca/eyes/angry.png";
// import defaultEye from "../../alpaca/eyes/default.png";
// import naughtyEye from "../../alpaca/eyes/naughty.png";
// import pandaEye from "../../alpaca/eyes/panda.png";
// import smartEye from "../../alpaca/eyes/smart.png";
// import starEye from "../../alpaca/eyes/star.png";
import { useReducer } from "react";
import "./test.css";
import bang from "../../alpaca/hair/bang.png";
import curls from "../../alpaca/hair/curls.png";
import defaultHair from "../../alpaca/hair/default.png";
import elegant from "../../alpaca/hair/elegant.png";
import fancy from "../../alpaca/hair/fancy.png";
import quiff from "../../alpaca/hair/quiff.png";
import short from "../../alpaca/hair/short.png";

function Hair() {
  const butArr = [
    { butName: "bang", butAction: { type: "bang" } },
    { butName: "curls", butAction: { type: "curls" } },
    { butName: "defaultHair", butAction: { type: "defaultHair" } },
    { butName: "elegant", butAction: { type: "elegant" } },
    { butName: "fancy", butAction: { type: "fancy" } },
    { butName: "quiff", butAction: { type: "quiff" } },
    { butName: "short", butAction: { type: "short" } },
  ];
  const eyeArr = [
    { item: bang, action: "bang", id: 1 },
    { item: curls, action: "curls", id: 2 },
    { item: defaultHair, action: "defaultHair", id: 3 },
    { item: elegant, action: "elegant", id: 4 },
    { item: fancy, action: "fancy", id: 5 },
    { item: quiff, action: "quiff", id: 6 },
    { item: short, action: "sohrt", id: 7 },
  ];

  function reducerFunc(state, action) {
    if (action.type === "bang") {
      return {
        bang: true,
        curls: false,
        defaultHair: false,
        elegant: false,
        fancy: false,
        quiff: false,
        short: false,
      };
    } else if (action.type === "curls") {
      return {
        bang: false,
        curls: true,
        defaultHair: false,
        elegant: false,
        fancy: false,
        quiff: false,
        short: false,
      };
    } else if (action.type === "defaultHair") {
      return {
        bang: false,
        curls: false,
        defaultHair: true,
        elegant: false,
        fancy: false,
        quiff: false,
        short: false,
      };
    } else if (action.type === "elegant") {
      return {
        bang: false,
        curls: false,
        defaultHair: false,
        elegant: true,
        fancy: false,
        quiff: false,
        short: false,
      };
    } else if (action.type === "fancy") {
      return {
        bang: false,
        curls: false,
        defaultHair: false,
        elegant: false,
        fancy: true,
        quiff: false,
        short: false,
      };
    } else if (action.type === "quiff") {
      return {
        bang: false,
        curls: false,
        defaultHair: false,
        elegant: false,
        fancy: false,
        quiff: true,
        short: false,
      };
    } else if (action.type === "short") {
      return {
        bang: false,
        curls: false,
        defaultHair: false,
        elegant: false,
        fancy: false,
        quiff: false,
        short: true,
      };
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, {
    bang: false,
    curls: false,
    defaultHair: false,
    elegant: false,
    fancy: false,
    quiff: false,
    short: false,
  });
  return (
    <div className="flex justify-end bg-gray pt-4">
      <div className="image-container absolute top-0 left-0">
        <div className="image">
          <img
            src={bang}
            className={`${state.bang ? "block hairCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={curls}
            className={`${state.curls ? "block hairCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={defaultHair}
            className={`${
              state.defaultHair ? "block hairCommonStyle" : "hidden"
            }`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={elegant}
            className={`${state.elegant ? "block hairCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={fancy}
            className={`${state.fancy ? "block hairCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={quiff}
            className={`${state.quiff ? "block hairCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={short}
            className={`${state.short ? "block hairCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
      </div>
      <div className="buttons-containers">
        <div className="button">
          {butArr.map((item, index) => {
            return (
              <button
                onClick={() => {
                  dispatch(item.butAction);
                }}
                className="p-4 ml-3 text-white bg-navbar hover:bg-white hover:text-navbar"
                key={index}
              >
                {item.butName}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hair;
