import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faBox,
  faShoppingCart,
  faUsers,
  faUserPlus,
  faFileInvoiceDollar,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import "./Report.css";
import Navbar from "../layout/Navbar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Report = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
    ],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 85, 90],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Purchase",
        data: [-65, -59, -80, -81, -56, -55, -40, -85, -90],
        fill: false,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Purchase & Sales",
      },
    },
  };

  return (

    <>
    <div className="container-fluid p-0 m-0">
      <div className="row">
        <div className="col-md-12 p-0">
        <Navbar/>
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-12 p-0 content">
        <div className="dashboard">
      <div className="stats">
        <div className="card">
          <FontAwesomeIcon icon={faRupeeSign} size="2x" className="iconn"/>
          Total Purchase Due: Rs 0
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faBox} size="2x" className="iconn" />
          Total Sales Due: Rs 0
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" className="iconn"/>
          Total Sale Amount: Rs 0
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faRupeeSign} size="2x" className="iconn"/>
          Total Expense Amount: Rs 0
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faUsers} size="2x" className="iconn" />
          Customers: 00
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faUserPlus} size="2x" className="iconn"/>
          Suppliers: 00
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faFileInvoice} size="2x" className="iconn"/>
          Purchase Invoice: 00
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faFileInvoiceDollar} size="2x" className="iconn"/>
          Sales Invoice: 00
        </div>
      </div>
      <div className="charts">
        <div className="chart">
          <Line data={data} options={options} />
        </div>
        <div className="recent-products">
          <h2>Recent Products</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Lenovo 3rd Generation</td>
                <td>Rs 125</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bold V3.2</td>
                <td>Rs 00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Nike Jordan</td>
                <td>Rs 00</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Apple Series 5 Watch</td>
                <td>Rs 00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        </div>
      </div>

    </div>
    
    </>
  );
};

export default Report;
