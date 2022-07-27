import Details from "../components/Countries/Details";
import { useEffect, useCallback, useState } from "react";

const CountryDetails = function () {
  const [countries, setCountries] = useState(null);

  const fetchCountries = useCallback(async function () {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const countryObject = {};

      data.forEach((country) => {
        countryObject[`${country.cca3}`] = country;
      });

      setCountries(countryObject);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return <Details countries={countries}></Details>;
};
export default CountryDetails;
