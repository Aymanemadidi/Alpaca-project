// import angryEye from "../../alpaca/eyes/angry.png";
// import defaultEye from "../../alpaca/eyes/default.png";
// import naughtyEye from "../../alpaca/eyes/naughty.png";
// import pandaEye from "../../alpaca/eyes/panda.png";
// import smartEye from "../../alpaca/eyes/smart.png";
// import starEye from "../../alpaca/eyes/star.png";
import { useReducer } from "react";
import earing from "../../alpaca/accessories/earings.png";
import flower from "../../alpaca/accessories/flower.png";
import glasses from "../../alpaca/accessories/glasses.png";
import headphone from "../../alpaca/accessories/headphone.png";

function ImgArea() {
  const butArr = [
    { butName: "earing", butAction: { type: "earing" } },
    { butName: "flower", butAction: { type: "flower" } },
    { butName: "glasses", butAction: { type: "glasses" } },
    { butName: "headphone", butAction: { type: "headphone" } },
  ];
  const eyeArr = [
    { item: earing, action: "earing", id: 1 },
    { item: flower, action: "flower", id: 2 },
    { item: glasses, action: "glasses", id: 3 },
    { item: headphone, action: "headphone", id: 4 },
  ];

  function reducerFunc(state, action) {
    if (action.type === "earing") {
      return {
        earing: true,
        flower: false,
        glasses: false,
        headphone: false,
      };
    } else if (action.type === "flower") {
      return {
        earing: false,
        flower: true,
        glasses: false,
        headphone: false,
      };
    } else if (action.type === "glasses") {
      return {
        earing: false,
        flower: false,
        glasses: true,
        headphone: false,
      };
    } else if (action.type === "headphone") {
      return {
        earing: false,
        flower: false,
        glasses: false,
        headphone: true,
      };
    }
  }

  const [state, dispatch] = useReducer(reducerFunc, {
    earing: false,
    flower: false,
    glasses: false,
    headphone: false,
  });
  return (
    <div className="flex justify-end bg-gray pt-4">
      <div className="image-container absolute top-5 left-0 z-10">
        <div className="image">
          <img
            src={earing}
            className={`${state.earing ? "block eyeCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={flower}
            className={`${state.flower ? "block eyeCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={glasses}
            className={`${state.glasses ? "block eyeCommonStyle" : "hidden"}`}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src={headphone}
            className={`${state.headphone ? "block eyeCommonStyle" : "hidden"}`}
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

export default ImgArea;
