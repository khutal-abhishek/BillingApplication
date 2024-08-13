import React, { useState } from "react";
import "./AddCustomer.css";
const AddCustomer = () => {
  // State to manage form inputs
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    taxNumber: "",
    address: "",
    isActive: true,
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCustomer((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Customer:", customer);
  };

  return (
    <div className="add-customer">
      <form onSubmit={handleSubmit}>
        <h2>Add Customer</h2>
        <div className="form-group">
          <label>Customer Name *</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            placeholder="Enter Customer Name"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label>Tax Number</label>
          <input
            type="text"
            name="taxNumber"
            value={customer.taxNumber}
            onChange={handleChange}
            placeholder="Enter Tax Number"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={customer.address}
            onChange={handleChange}
            placeholder="Enter Address"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Is Active?</label>
          <input
            type="checkbox"
            name="isActive"
            checked={customer.isActive}
            onChange={handleChange}
          />
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="save-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
