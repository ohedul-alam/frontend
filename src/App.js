import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from './UserLayout/UserLayout';
// import css
import "./assets/css/remixicon.css";

// import scss
import "./scss/style.scss";

window.addEventListener("load", function () {
  let skinMode = localStorage.getItem("skin-mode");
  let HTMLTag = document.querySelector("html");

  if (skinMode) {
    HTMLTag.setAttribute("data-skin", skinMode);
  }
});


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
          </Route>
          {/* {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={index}
              />
            )
          })} */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
