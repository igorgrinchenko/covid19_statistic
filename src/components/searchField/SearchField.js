import React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from "@mui/material";
import { connect } from "react-redux";
import cn from "classnames";
import {
  enterCode,
  enterCountryForGettingInfo,
} from "../../constants/constants";

import "./SearchField.scss";

const SearchField = ({ getLatestCountryDataByName, isDark }) => {
  const [countryName, setCountryName] = useState("");
  const input = useRef(null);

  const getCountryValue = (event) => {
    const { keyCode } = event;

    const isEnterButtonPressed = keyCode === enterCode;

    if (isEnterButtonPressed) {
      getLatestCountryDataByName(countryName);
    }
  };

  const setCountryValue = (event) => {
    const { value } = event.target;
    setCountryName(value);
  };

  useEffect(() => {
    input.current.focus();
  }, [isDark]);

  return (
    <div>
      <Input
        inputRef={input}
        className={cn("input", { darkMode: isDark })}
        onChange={setCountryValue}
        onKeyDown={getCountryValue}
        placeholder={enterCountryForGettingInfo}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isDark: state.isDark,
});

export default connect(mapStateToProps)(SearchField);
