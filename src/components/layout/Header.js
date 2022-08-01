import classes from "./Header.module.css";
import { useContext } from "react";
import CountryContext from "../../store/country-context";
import { Link } from "react-router-dom";

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
      <Link to="/countries">
        <button className={classes.homepageBtn}>
          <h3
            className={
              countryCtx.darkTheme ? classes.lightTitle : classes.darkTitle
            }
          >
            Where in the world?
          </h3>
        </button>
      </Link>
      <button className={classes.btn} onClick={toggleTheme}>
        &#xf186; &#160; Dark mode
      </button>
    </header>
  );
};

export default Header;
