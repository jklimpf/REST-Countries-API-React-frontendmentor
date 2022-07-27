import { useContext } from "react";
import CountryContext from "../../store/country-context";
import classes from "./Filter.module.css";

const Filter = function (props) {
  const countryCtx = useContext(CountryContext);

  const selectHandler = function (e) {
    if (e.target.value === "All") {
      props.onFilterValue(e.target.value);
      return props.onFilter(props.countries);
    }

    const filteredCountriesByRegion = props.countries.filter(
      (country) => country.region === e.target.value
    );
    props.onFilter(filteredCountriesByRegion);
    props.onFilterValue(e.target.value);
  };

  const classesList = `${classes.filter} ${
    countryCtx.darkTheme ? classes.darkTheme : classes.lightTheme
  }`;

  return (
    <select className={classesList} onChange={selectHandler}>
      <option value="All">All countries</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
