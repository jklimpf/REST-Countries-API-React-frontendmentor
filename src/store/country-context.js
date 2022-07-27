import React from "react";

const CountryContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
});

export default CountryContext;
