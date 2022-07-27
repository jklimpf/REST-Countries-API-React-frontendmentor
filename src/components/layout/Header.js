import classes from "./Header.module.css";
import { useContext } from "react";
import CountryContext from "../../store/country-context";

const Header = function () {
  const countryCtx = useContext(CountryContext);

  const toggleTheme = function () {
    countryCtx.toggleTheme();
  };

  const classesList = `${classes.header} ${
    countryCtx.darkTheme ? classes.darkTheme : classes.lightTheme
  }`;

  return (
    <header className={classesList}>
      <h3>Where in the world?</h3>
      <button className={classes.btn} onClick={toggleTheme}>
        &#xf186; &#160; Dark mode
      </button>
    </header>
  );
};

export default Header;
