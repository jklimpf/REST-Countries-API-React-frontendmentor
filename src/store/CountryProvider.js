import CountryContext from "./country-context";
import { useState } from "react";

const CountryProvider = function (props) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleThemeHandler = function () {
    setDarkTheme((state) => !state);
  };

  const countryContext = {
    darkTheme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <CountryContext.Provider value={countryContext}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
