import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import MentorBANNER from "../../img/MentorBANNER.png";
import TABANNER from "../../img/TABANNER.png";
import MentorHome from "../component/MentorHome";
import TeacherAssistantHome from "../component/TeacherAssistantHome";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>

      
      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}
      {/* vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/}

      {/* <h1>I'm a banner(eventually, maybe not.....)</h1> */}

      {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
      {/* ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| */}



      {/* <!-- Navtabs --> */}
      <div className="d-flex justify-content-center w-100 m-0 p-0">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item w-50" role="presentation">
            <button
              className="nav-link active"
              id="TA-tab"
              data-bs-toggle="tab"
              data-bs-target="#TA"
              type="button"
              role="tab"
              aria-controls="TA"
              aria-selected="true"
            >
              <img
                src={ MentorBANNER } 
                alt="Mentor Tab"
              />
            </button>
          </li>
          <li className="nav-item w-50" role="presentation">
            <button
              className="nav-link"
              id="mentorHome-tab"
              data-bs-toggle="tab"
              data-bs-target="#mentorHome"
              type="button"
              role="tab"
              aria-controls="mentorHome"
              aria-selected="false"
            >
              <img
                src={ TABANNER }
                alt="Teacher Assistant Tab"
              />
            </button>
          </li>
        </ul>
      </div>

      {/* <!-- Quick Teacher Assistant Details --> */}
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="TA"
          role="tabpanel"
          aria-labelledby="TA-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col">
              <TeacherAssistantHome />
            </div>
          </div>
        </div>

        {/* <!-- Quick Mentor Details--> */}
        <div
          className="tab-pane fade"
          id="mentorHome"
          role="tabpanel"
          aria-labelledby="mentorHome-tab"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <MentorHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
