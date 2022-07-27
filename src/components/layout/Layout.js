import { Fragment } from "react";
import classes from "./Layout.module.css";
import Header from "./Header";
import { useContext } from "react";
import CountryContext from "../../store/country-context";

const Layout = function (props) {
  const countryCtx = useContext(CountryContext);

  const classesList = `${classes.main} ${
    countryCtx.darkTheme ? classes.darkTheme : classes.lightTheme
  } ${
    countryCtx.darkTheme
      ? (document.body.style.backgroundColor = "hsl(207, 26%, 17%)")
      : (document.body.style.backgroundColor = "hsl(0, 0%, 98%)")
  } `;

  return (
    <Fragment>
      <Header></Header>
      <main className={classesList}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
