import { useState } from "react";
import logo from "../../public/واصبر نفسك-cropped.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./test.css";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className="bg-navbar py-4 ">
      <div className=" flex justify-between items-center px-3">
        <div>
          {isOpen ? (
            <FontAwesomeIcon
              onClick={() => setIsopen(!isOpen)}
              icon={faXmark}
              className="text-white test"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setIsopen(!isOpen)}
              icon={faBars}
              className="text-white test"
            />
          )}
        </div>
        <div className="logo">
          <img className="h-10" src={logo} />
        </div>
      </div>
      <div className={`text-white text-lg ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex justify-end flex-col items-end gap-3 px-4 py-3 text-lg">
          <li>البرنامج</li>
          <li>الغياب</li>
          <li>محاضرات</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
