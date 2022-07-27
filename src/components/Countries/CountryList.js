import Country from "./Country";
import classes from "./CountryList.module.css";

const CountryList = function (props) {
  return (
    <div className={classes.countryGrid}>
      <Country countries={props.countries}></Country>
    </div>
  );
};

export default CountryList;
