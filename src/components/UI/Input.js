import { useContext } from "react";
import CountryContext from "../../store/country-context";
import classes from "./Input.module.css";

const Input = function (props) {
  const countryCtx = useContext(CountryContext);

  const search = function (value) {
    const filteredByRegion =
      props.filterValue === "All"
        ? props.countries
        : props.countries.filter(
            (country) => country.region === props.filterValue
          );

    const filteredCountries = filteredByRegion.filter((country) => {
      return (
        country.name.toLowerCase().includes(value.toLowerCase()) ||
        (country.capital &&
          country.capital[0].toLowerCase().includes(value.toLowerCase()))
      );
    });

    if (value.length === 0) {
      props.onSearchFilter(null);
    }

    props.onSearchFilter(filteredCountries);
  };

  const inputHandler = function (e) {
    e.preventDefault();
    search(e.target.value);
  };

  const classesList = `${classes.input} ${
    countryCtx.darkTheme ? classes.darkTheme : classes.lightTheme
  }`;

  return (
    <input
      className={classesList}
      placeholder="&#xf002;     Search for a country..."
      onChange={inputHandler}
    />
  );
};

export default Input;
