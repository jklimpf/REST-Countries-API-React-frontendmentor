import { Link } from "react-router-dom";
import classes from "./CountryDiv.module.css";
import { useContext } from "react";
import CountryContext from "../../store/country-context";

const CountryDiv = function (props) {
  const countryCtx = useContext(CountryContext);

  const classesList = `${classes.countryDiv} ${
    countryCtx.darkTheme ? classes.darkTheme : classes.lightTheme
  }`;

  return (
    <Link className={classes.link} to={`/countries/${props.code}`}>
      <div className={classesList}>
        <img src={props.flag} alt="flag" className={classes.image} />
        <div className={classes.details}>
          <h3 className={classes.name}>{props.name}</h3>
          <p>
            <span className={classes.span}>Population</span>:{" "}
            {props.population.toLocaleString()}
          </p>
          <p>
            <span className={classes.span}>Region</span>: {props.region}
          </p>
          <p>
            <span className={classes.span}>Capital</span>: {props.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryDiv;
