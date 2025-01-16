import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import oneOnoneicon from "../../img/oneOnoneicon.png";
import TAIcon from "../../img/TAIcon.png";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <ul className="nav nav-pills nav-justified">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    <img src={oneOnoneicon} alt="Mentor Tab" style={{ width: "100px", height: "80px" }} />
                </a>
            </li>
            <li className="nav-item">
			<a className="nav-link" aria-current="page" href="#">
                    <img src={TAIcon} alt="Teacher Assistant Tab" style={{ width: "100px", height: "80px" }} />
                </a>
            </li>
        </ul>
    );
};
