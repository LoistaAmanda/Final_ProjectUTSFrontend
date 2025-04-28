import React, { useState } from "react";
import FormCovid from "../FormCovid/FormCovid";
import TabelProvinsi from "../Tabel/Tabel";
import CovidStatus from "../CovidStatus/CovidStatus";
import provincesData from "../../utils/constants/provinces";
import indonesiaData from "../../utils/constants/indonesia";

const Dashboard = () => {
  const [provinsi, setProvinsi] = useState(provincesData.provinces);
  const [indonesia, setIndonesia] = useState(indonesiaData.indonesia);

  const handleSubmit = (formData) => {
    const { provinsi: provinsiNama, status, jumlah } = formData;

    // Validasi provinsi
    const provinsiExist = provincesData.provinces.find(
      (item) => item.kota.toLowerCase() === provinsiNama.toLowerCase()
    );
    if (!provinsiExist) {
      alert(
        `Provinsi "${provinsiNama}" tidak ditemukan! Pastikan penulisan benar.`
      );
      return;
    }

    // Validasi status
    const allowedStatus = ["positif", "sembuh", "dirawat", "meninggal"];
    if (!allowedStatus.includes(status.toLowerCase())) {
      alert(
        `Status "${status}" tidak valid! Harus Positif, Sembuh, Dirawat, atau Meninggal.`
      );
      return;
    }

    // Update data Provinsi (tabel)
    setProvinsi((prev) =>
      prev.map((item) =>
        item.kota.toLowerCase() === provinsiNama.toLowerCase()
          ? {
              ...item,
              kasus:
                status.toLowerCase() === "positif"
                  ? item.kasus + Number(jumlah)
                  : item.kasus,
              sembuh:
                status.toLowerCase() === "sembuh"
                  ? item.sembuh + Number(jumlah)
                  : item.sembuh,
              meninggal:
                status.toLowerCase() === "meninggal"
                  ? item.meninggal + Number(jumlah)
                  : item.meninggal,
              dirawat:
                status.toLowerCase() === "dirawat"
                  ? item.dirawat + Number(jumlah)
                  : item.dirawat,
            }
          : item
      )
    );

    // Update data Indonesia (card)
    setIndonesia((prev) =>
      prev.map((item) =>
        item.status.toLowerCase() === status.toLowerCase()
          ? { ...item, total: item.total + Number(jumlah) }
          : item
      )
    );
  };

  return (
    <div>
      {/* 1. Covid Status */}
      <CovidStatus data={indonesia} />

      {/* 2. Tabel Provinsi */}
      <TabelProvinsi data={provinsi} />

      {/* 3. Form Covid */}
      <FormCovid onSubmit={handleSubmit} />
    </div>
  );
};

export default Dashboard;
