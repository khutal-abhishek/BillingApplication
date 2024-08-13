// import React, { useState } from "react";
// import "./HomePage.css";
// import Navbar from "../layout/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Category from "../Category/Category";
// import BillingPage from "../Billing/Billing";

// const HomePage = () => {
//   const [items, setItems] = useState([
   
//   ]);
  
 
//   const addItemToBilling = (item) => {
//     setItems(prevItems => {
//       const existingItem = prevItems.find(i => i.productid === item.productid);
//       if (existingItem) {
//         return prevItems.map(i =>
//           i.productid === item.productid ? { ...i, qty: i.qty + 1 } : i
//         );
//       } else {
//         return [...prevItems, { ...item, qty: 1 }];
//       }
//     });
//   };
  
  

//   return (
//     <>
//       <div className="container-fluid p-0">
//         <div className="row">
//           <Navbar />
//         </div>
//         <div className="row">
//           <div className="col-md-7 categories">
          
//             <Category addItemToBilling={addItemToBilling} />

//           </div>
//           <div className="col-md-5 billing-section">
//             <BillingPage items={items} setItems={setItems} />
//           </div>
//         </div>

//         <div className="row ">
//           <div className="col-md-7 footerBill">
//             <div className="row pt-1">

//               <div className="col-md-2">
//                 <label className="fw-bold">Sub Total :</label>
               
//               </div>
//               <div className="col-md-2">
//               <label className="fw-bold">Discount :</label>
             
//               </div>
//               <div className="col-md-2">
//               <label className="fw-bold">Service Charge :</label>
             
//               </div>
//               <div className="col-md-2">
//               <label className="fw-bold">Tax Amount(0%)</label>
              
//               </div>
//               <div className="col-md-2">
//               <label className="fw-bold">Paid Amount:</label>
              
//               </div>
//               <div className="col-md-2">
//               <label className="fw-bold">Payment Type:</label>
              
//               </div>

//             </div>
//             <div className="row mt-2">
//             <div className="col-md-2">
               
//                 <p style={{color:'blue'}}>₹ 100.00</p>
//               </div>
//               <div className="col-md-2">
               
//               <input type="text" name="discount" placeholder="Enter Discount" style={{width:'100px'}}/>
//               </div>
//               <div className="col-md-2">
                
//               <input type="text" name="discount" placeholder="0" style={{width:'100px'}}/>
//               </div>
//               <div className="col-md-2">
                
//               <p style={{color:'blue'}}>₹ 00.00</p>
//               </div>
//               <div className="col-md-2">
               
//               <input type="text" name="discount" placeholder="0" style={{width:'100px'}}/>
//               </div>
//               <div className="col-md-2">
                
//               <select>
//               <option value="option1">Cash</option>
//               <option value="option2">UPI</option>
//               <option value="option3">Cards</option>
              
//             </select>
//               </div>
              
//             </div>




//           </div>


//           <div className="col-md-5">
//             <div className="row pt-3">
//             <div className="col-md-4">
//               <label className="fw-bold"> Bill Total</label>

//                 <p className="fw-bold" style={{color:"green"}}>₹ 00.00</p>
        
//               </div>
//               <div className="col-md-8">
         
//         <button className="btn btn-danger clear-btn" onClick={() => setItems([])} style={{marginRight:"20px",marginLeft:"90px"}}>
//           Clear All
//         </button>
//         <button className="btn btn-primary order-btn">Place Order</button> 
//               </div>
//             </div>
         
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;


import React, { useState } from "react";
import "./HomePage.css";
import Navbar from "../layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "../Category/Category";
import BillingPage from "../Billing/Billing";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addItemToBilling = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.productid === item.productid
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.productid === item.productid ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, qty: 1 }];
      }
    });
  };

  const calculateSubtotal = () => {
    return items.reduce(
      (total, item) => total + item.product_price * item.qty,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discountAmount = (subtotal * discount) / 100;
    return subtotal - discountAmount;
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-md-7 categories">
            <Category addItemToBilling={addItemToBilling} />
          </div>
          <div className="col-md-5 billing-section">
            <BillingPage items={items} setItems={setItems} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-7 footerBill">
            <div className="row pt-1">
              <div className="col-md-2">
                <label className="fw-bold">Sub Total :</label>
              </div>
              <div className="col-md-2">
                <label className="fw-bold">Discount :</label>
              </div>
              <div className="col-md-2">
                <label className="fw-bold">Discount Amount({discount}%)</label>
              </div>
              <div className="col-md-2">
                <label className="fw-bold">Total:</label>
              </div>
              <div className="col-md-4">
                <label className="fw-bold">Payment Type:</label>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-md-2">
                <p style={{ color: "blue" }}>₹ {calculateSubtotal().toFixed(2)}</p>
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  name="discount"
                  placeholder="Enter Discount %"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  style={{ width: "100px" }}
                />
              </div>
              <div className="col-md-2">
                <p style={{ color: "blue" }}>₹ {(calculateSubtotal() * (discount / 100)).toFixed(2)}</p>
              </div>
              <div className="col-md-2">
                <p style={{ color: "green" }}>₹ {calculateTotal().toFixed(2)}</p>
              </div>
              <div className="col-md-4">
                <select>
                  <option value="option1">Cash</option>
                  <option value="option2">UPI</option>
                  <option value="option3">Cards</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="row pt-3">
              <div className="col-md-4">
                <label className="fw-bold"> Net Bill </label>
                <p className="fw-bold" style={{ color: "green" }}>
                  ₹ {calculateTotal().toFixed(2)}
                </p>
              </div>
              <div className="col-md-8">
                <button
                  className="btn btn-danger clear-btn"
                  onClick={() => setItems([])}
                  style={{ marginRight: "20px", marginLeft: "90px" }}
                >
                  Clear All
                </button>
                <button className="btn btn-primary order-btn">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

