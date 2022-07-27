import CountryDiv from "./CountryDiv";
import classes from "./Country.module.css";
import LoadingSpinner from "../UI/LoadingSpinner";
import { Fragment } from "react";

const Country = function (props) {
  if (!props.countries) {
    return (
      <Fragment>
        <div className={classes.loadingSpinnerDiv}>
          <LoadingSpinner></LoadingSpinner>
        </div>
      </Fragment>
    );
  }
  return props.countries.map((country) => {
    return (
      <CountryDiv
        key={country.name}
        name={country.name}
        population={country.population}
        flag={country.flag}
        capital={country.capital}
        region={country.region}
        code={country.code}
      ></CountryDiv>
    );
  });
};

export default Country;
