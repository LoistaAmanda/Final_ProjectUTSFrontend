import axios from "axios";

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  params: { country: "Indonesia" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

export async function fetchGlobalCovid() {
  try {
    const response = await axios.request(options);
    const data = response.data.response[0];
    return {
      confirmed: data.cases.total,
      recovered: data.cases.recovered,
      deaths: data.deaths.total,
    };
  } catch (error) {
    console.error("Error fetching global COVID data:", error);
    return null;
  }
}
