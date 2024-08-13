import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import LoginPage from "./components/LoginPage/LoginPage";
import Category from "./components/Category/Category";
import Billing from "./components/Billing/Billing";
import HomePage from "./components/HomePage/HomePage";

import Table from "./components/Table/Table";

import ViewCategory from "./components/AddCategory/ViewCategory";
import ViewProduct from "./components/AddProduct/ViewProduct";
import Report from "./components/Report/Report";
import Setting from "./components/UpdateSetting/Setting";
import UpdateSetting from "./components/UpdateSetting/UpdateSetting";



const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="table" element={<Table />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/homePage" element={<HomePage />} />
         
          <Route path="/view-category" element={<ViewCategory />} />
         
          <Route path="/view-product" element={<ViewProduct/>} />
         
          <Route path="/report" element={<Report/>} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/updsetting" element={<UpdateSetting/>} />

          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
