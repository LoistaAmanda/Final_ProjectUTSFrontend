import axios from "axios";

// Buat instance RapidAPI (jika dibutuhkan untuk endpoint lain)
const rapidAPI = axios.create({
  baseURL: "https://covid-related-indonesias-news-article.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});

const API = {
  // Pakai endpoint lokal (hasil proxy dari server Express)
  getHospitals: async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/hospitals");
      return response.data;
    } catch (error) {
      console.error("Gagal fetch data rumah sakit:", error);
      return [];
    }
  },

};

export default API;
