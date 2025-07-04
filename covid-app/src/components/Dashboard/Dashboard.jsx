import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCovid from "../FormCovid/FormCovid";
import TabelGlobal from "../Tabel/Tabel";
import CovidStatus from "../CovidStatus/CovidStatus";

const Dashboard = () => {
  const [globalTable, setGlobalTable] = useState([]);
  const [globalStatus, setGlobalStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesRes = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        const countryList = countriesRes.data.map((item) => ({
          country: item.country,
          cases: item.cases,
          recovered: item.recovered,
          active: item.active,
          deaths: item.deaths,
        }));
        setGlobalTable(countryList);

        const globalRes = await axios.get("https://disease.sh/v3/covid-19/all");
        const summary = [
          { status: "Positif", total: globalRes.data.cases },
          { status: "Sembuh", total: globalRes.data.recovered },
          { status: "Dirawat", total: globalRes.data.active },
          { status: "Meninggal", total: globalRes.data.deaths },
        ];
        setGlobalStatus(summary);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (formData) => {
    const { negara: countryName, status, jumlah } = formData;

    const allowedStatus = ["positif", "sembuh", "dirawat", "meninggal"];
    if (!allowedStatus.includes(status.toLowerCase())) {
      alert(
        `Status "${status}" tidak valid! Harus Positif, Sembuh, Dirawat, atau Meninggal.`
      );
      return;
    }

    const isExist = globalTable.find(
      (item) => item.country.toLowerCase() === countryName.toLowerCase()
    );

    if (!isExist) {
      const newItem = {
        country: countryName,
        cases: status.toLowerCase() === "positif" ? Number(jumlah) : 0,
        recovered: status.toLowerCase() === "sembuh" ? Number(jumlah) : 0,
        active: status.toLowerCase() === "dirawat" ? Number(jumlah) : 0,
        deaths: status.toLowerCase() === "meninggal" ? Number(jumlah) : 0,
      };
      setGlobalTable([...globalTable, newItem]);
    } else {
      setGlobalTable((prev) =>
        prev.map((item) =>
          item.country.toLowerCase() === countryName.toLowerCase()
            ? {
                ...item,
                cases:
                  status.toLowerCase() === "positif"
                    ? item.cases + Number(jumlah)
                    : item.cases,
                recovered:
                  status.toLowerCase() === "sembuh"
                    ? item.recovered + Number(jumlah)
                    : item.recovered,
                active:
                  status.toLowerCase() === "dirawat"
                    ? item.active + Number(jumlah)
                    : item.active,
                deaths:
                  status.toLowerCase() === "meninggal"
                    ? item.deaths + Number(jumlah)
                    : item.deaths,
              }
            : item
        )
      );
    }

    setGlobalStatus((prev) =>
      prev.map((item) =>
        item.status.toLowerCase() === status.toLowerCase()
          ? { ...item, total: item.total + Number(jumlah) }
          : item
      )
    );
  };

  return (
    <div>
      <CovidStatus data={globalStatus} />
      <TabelGlobal data={globalTable} />
      <FormCovid onSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
