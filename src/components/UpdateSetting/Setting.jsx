import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import axios from "axios";
import "./Setting.css";

const Setting = ({ settingId, addSetting }) => {
  const [businessName, setBusinessName] = useState("");
  const [businessMobile, setBusinessMobile] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [businessGstNumber, setBusinessGstNumber] = useState("");
  const [businessLogo, setBusinessLogo] = useState(null);
  const [logoUrl, setLogoUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (settingId) {
      axios.get(`http://localhost:8080/GoMart/Settings/${settingId}`)
        .then(response => {
          const { data } = response;
          setBusinessName(data.business_name);
          setBusinessMobile(data.business_mobile);
          setBusinessEmail(data.business_email);
          setBusinessAddress(data.business_address);
          setBusinessGstNumber(data.business_gst_number);
          setLogoUrl(data.business_logo);
        })
        .catch(error => {
          console.error("Error fetching settings:", error);
        });
    }
  }, [settingId]);

  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleBusinessMobileChange = (event) => {
    setBusinessMobile(event.target.value);
  };

  const handleBusinessEmailChange = (event) => {
    setBusinessEmail(event.target.value);
  };

  const handleBusinessAddressChange = (event) => {
    setBusinessAddress(event.target.value);
  };

  const handleBusinessGstNumberChange = (event) => {
    setBusinessGstNumber(event.target.value);
  };

  const handleBusinessLogoChange = (event) => {
    setBusinessLogo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("business_name", businessName);
    formData.append("business_mobile", businessMobile);
    formData.append("business_email", businessEmail);
    formData.append("business_address", businessAddress);
    formData.append("business_gst_number", businessGstNumber);
    if (businessLogo) {
      formData.append("image", businessLogo);
    }

    const url = settingId
      ? `http://localhost:8080/GoMart/Settings/updateSettings/${settingId}`
      : `http://localhost:8080/GoMart/Settings/addSettings`;

    axios.post(url, formData)
      .then(response => {
        console.log(response.data);
        addSetting(response.data);
        navigate("/setting-list");
      })
      .catch(error => {
        console.error("Error saving settings:", error);
      });
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="setting-form mt-2">
        <h2>Business Settings</h2>

        <TextField
          label="Business Name"
          value={businessName}
          onChange={handleBusinessNameChange}
          required
          fullWidth
        />

        <TextField
          label="Mobile Number"
          type="tel"
          value={businessMobile}
          onChange={handleBusinessMobileChange}
          required
          fullWidth
        />

        <TextField
          label="Email"
          type="email"
          value={businessEmail}
          onChange={handleBusinessEmailChange}
          required
          fullWidth
        />

        <TextField
          label="Address"
          value={businessAddress}
          onChange={handleBusinessAddressChange}
          required
          fullWidth
        />

        <TextField
          label="GST Number"
          value={businessGstNumber}
          onChange={handleBusinessGstNumberChange}
          required
          fullWidth
        />

        <div className="button-group">
          <Button
            variant="contained"
            component="label"
            startIcon={<PhotoCamera />}
          >
            Upload Logo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleBusinessLogoChange}
            />
          </Button>

          <Button type="submit" variant="contained">
            Save Settings
          </Button>
        </div>

        {logoUrl && (
          <div className="logo-preview">
            <img src={logoUrl} alt="Business Logo" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            <p>{logoUrl.split('/').pop()}</p>
          </div>
        )}
        {businessLogo && <p>{businessLogo.name}</p>}
      </form>
    </>
  );
};

export default Setting;
