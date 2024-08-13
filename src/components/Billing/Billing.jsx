import React, { useState, useEffect } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axios from "axios";
import AddCustomerModal from "./AddCustomerModal";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Billing.css";

const BillingPage = ({ items, setItems }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch customer data once when the component mounts
    axios.get("http://localhost:8080/GoMart/customer")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
      });
  }, []);

  useEffect(() => {
    // Filter suggestions based on search term
    if (searchTerm.length > 1) {
      const filteredSuggestions = customers.filter((customer) =>
        customer.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, customers]);

  const handleDelete = (productid) => {
    const updatedItems = items.filter((item) => item.productid !== productid);
    setItems(updatedItems);
  };

  const handleQuantityChange = (productid, increment) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productid === productid
          ? { ...item, qty: Math.max(1, item.qty + increment) }
          : item
      )
    );
  };

  const handleSuggestionClick = (fullname) => {
    setSearchTerm(fullname);
    setSuggestions([]); // Clear suggestions after selection
  };

  const addNewCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  return (
    <div className="billing-page">
      <div className="header">
        <input
          type="text"
          placeholder="Walk-In Customer"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-success add-btn" onClick={() => setModalOpen(true)}>
          <PersonAddIcon style={{ color: "white", marginRight: "5px" }} /> Add
        </button>
        {suggestions.length > 0 && (
          <div className="suggestions-box">
            {suggestions.map((customer) => (
              <div
                key={customer.customer_id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(customer.fullname)}
              >
                {customer.fullname} - {customer.mobile}
              </div>
            ))}
          </div>
        )}
      </div>
      <table className="table table-striped item-table">
        <thead className="tableHead">
          <tr>
            <th>Sl</th>
            <th>Item</th>
            <th className="ss">Price</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.productname}</td>
              <td> ₹ {item.product_price}</td>
              <td>
                <FaMinus
                  className="quantity-icon"
                  onClick={() => handleQuantityChange(item.productid, -1)}
                />
                <span className="quantity-value">{item.qty}</span>
                <FaPlus
                  className="quantity-icon"
                  onClick={() => handleQuantityChange(item.productid, 1)}
                />
              </td>
              <td> ₹ {item.product_price * item.qty}</td>
              <td>
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDelete(item.productid)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddCustomerModal open={modalOpen} handleClose={() => setModalOpen(false)} addNewCustomer={addNewCustomer} />
      <ToastContainer />
    </div>
  );
};

export default BillingPage;
