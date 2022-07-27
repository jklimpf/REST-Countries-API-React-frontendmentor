import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllCountries from "./pages/AllCountries";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/countries"></Redirect>
        </Route>
        <Route path="/countries" exact>
          <AllCountries></AllCountries>
        </Route>
        <Route path="/countries/:countryId">
          <CountryDetails></CountryDetails>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
