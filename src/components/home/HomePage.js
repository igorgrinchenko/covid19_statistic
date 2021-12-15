import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import { welcome } from "../../constants/constants";
import "./HomePage.scss";

const HomePage = ({ isDark }) => {
  return (
    <div className={cn("home-page", { darkMode: isDark })}>
      <h1>{welcome}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

export default connect(mapStateToProps)(HomePage);
