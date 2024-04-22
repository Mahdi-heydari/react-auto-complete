export default async function getCountriesList() {
  return fetch("https://countriesnow.space/api/v0.1/countries").then(
    (response) => response.json()
  );
}
