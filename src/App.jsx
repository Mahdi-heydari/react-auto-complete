import AutoComplete from "./components/AutoComplete";
import "./AutoComplete.css";
import { useEffect, useState } from "react";
import getCountriesList from "./services/getCountriesList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const handleInputChange = (option) => {
    console.log("object", option);
  };

  useEffect(() => {
    getCountriesList()
      .then((data) =>
        setCountries(data.data.map((item) => item.country))
      );
  }, []);

  return (
    <div className="App">
      <h1>Autocomplete Task</h1>
      <AutoComplete options={countries} onChange={handleInputChange} />
    </div>
  );
};

export default App;
