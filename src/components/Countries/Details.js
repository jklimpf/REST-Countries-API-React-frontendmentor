import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import classes from "./Details.module.css";
import { useContext, Fragment } from "react";
import CountryContext from "../../store/country-context";
import LoadingSpinner from "../UI/LoadingSpinner";

const Details = function (props) {
  const countryCtx = useContext(CountryContext);
  const history = useHistory();

  const classesList = `${classes.countryDetails} ${
    countryCtx.darkTheme ? classes.darkTheme : classes.lightTheme
  }`;

  const goBackHandler = function () {
    history.goBack();
  };

  const params = useParams();

  if (!props.countries) {
    return (
      <Fragment>
        <div className={classes.loadingSpinnerDiv}>
          <LoadingSpinner></LoadingSpinner>
        </div>
      </Fragment>
    );
  }

  const country = props.countries[params.countryId.toUpperCase()];
  if (!country) {
    return <div>Wrong code</div>;
  }

  const name = country.name.common;
  const flag = country.flags.png;
  const borders = country.borders;
  const population = country.population;
  const nativeName = Object.keys(country.name.nativeName).map((key) => [
    country.name.nativeName[key],
  ])[0][0].common;
  const region = country.region;
  const subRegion = country.subregion;
  const capital = country.capital[0];
  const languages = Object.keys(country.languages).map((key, i) => [
    country.languages[key] +
      `${i < Object.keys(country.languages).length - 1 ? ", " : ""}`,
  ]);
  const currencies = Object.keys(country.currencies).map((key, i) => [
    country.currencies[key].name +
      `${i < Object.keys(country.currencies).length - 1 ? ", " : ""}`,
  ]);
  const domain = country.tld;

  const bordersName = borders
    ? borders.map((country, i) => {
        return (
          <Link
            className={classes.link}
            key={country}
            to={`/countries/${country}`}
          >
            <button
              className={`${classes.borderCountries} ${
                countryCtx.darkTheme ? classes.btnDark : classes.btnLight
              }`}
            >
              {props.countries[country].name.common}
            </button>
          </Link>
        );
      })
    : "no borders";

  return (
    <div className={classesList}>
      <button
        onClick={goBackHandler}
        className={`${classes.btn} ${
          countryCtx.darkTheme ? classes.btnDark : classes.btnLight
        }`}
      >
        &#xf060; &#160;Back
      </button>
      {country && (
        <div className={classes.detailsDiv}>
          <img className={classes.image} src={flag} alt="flag" />

          <div className={classes.details}>
            <h2 className={classes.name}>{name}</h2>
            <div className={classes.detailsRows}>
              <div className={classes.leftDetailsRow}>
                <p>
                  <span className={classes.span}>Native Name:</span>{" "}
                  {nativeName}
                </p>
                <p>
                  <span className={classes.span}>Population:</span>{" "}
                  {Number(population).toLocaleString()}
                </p>
                <p>
                  <span className={classes.span}>Region:</span> {region}
                </p>
                <p>
                  <span className={classes.span}>Sub Region:</span> {subRegion}
                </p>
                <p>
                  <span className={classes.span}>Capital:</span> {capital}
                </p>
              </div>
              <div className={classes.rightDetailsRow}>
                <p>
                  <span className={classes.span}>Top Level Domain:</span>{" "}
                  {domain}
                </p>
                <p>
                  <span className={classes.span}>Currencies:</span> {currencies}
                </p>
                <p>
                  <span className={classes.span}>Languages:</span> {languages}{" "}
                </p>
              </div>
            </div>

            <div className={classes.bordersRow}>
              <p>
                <span className={classes.span}>Border countries:</span>{" "}
                {bordersName}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
