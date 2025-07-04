import axios from "axios";

const API = {
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
