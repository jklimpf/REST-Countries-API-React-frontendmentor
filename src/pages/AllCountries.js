import { useCallback, useEffect, useState } from "react";
import classes from "./AllCountries.module.css";
import CountryList from "../components/Countries/CountryList";
import Filter from "../components/UI/Filter";
import Input from "../components/UI/Input";

const AllCountries = function () {
  const [countries, setCountries] = useState(null);
  const [filterValue, setFilterValue] = useState("All");
  const [filterCountries, setFilterCountries] = useState(null);

  const fetchCountries = useCallback(async function () {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedCountries = data.map((country) => {
        return {
          name: country.name.common,
          population: country.population,
          flag: country.flags.png,
          capital: country.capital,
          region: country.region,
          code: country.cca3,
        };
      });

      setCountries(transformedCountries);
      setFilterCountries(transformedCountries);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <div className={classes.main}>
      {countries && (
        <div className={classes.filterDiv}>
          <Input
            countries={countries}
            onSearchFilter={setFilterCountries}
            filterValue={filterValue}
          ></Input>

          <Filter
            countries={countries}
            onFilter={setFilterCountries}
            onFilterValue={setFilterValue}
          ></Filter>
        </div>
      )}

      <CountryList countries={filterCountries}></CountryList>
    </div>
  );
};

export default AllCountries;
