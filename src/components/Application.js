import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const Application = () => {
    
  const [banks, setBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [accountName, setAccountName] = useState("");
  const [isResolved, setIsResolved] = useState(false);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Application submitted successfully');
    // window.location.href = "/account-created";
  };
  useEffect(() => {
    fetch("https://fitted-portal-api.herokuapp.com/api/v1/bank/banks") 
      .then((response) => response.json())
      .then((data) => setBanks(data.data))
      .catch((error) => console.error("Error fetching banks:", error));
  }, []);

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  const handleAccountNoChange = (event) => {
    setAccountNo(event.target.value);
  };

  useEffect(() => {
    // Resolve the account name when the account number is changed
    if (selectedBank && accountNo) {
      // Prepare the request body
      const requestBody = {
        bankCode: selectedBank,
        accountNo: accountNo,
      };
      fetch(
        "https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.content?.data?.account_name) {
            // If the bank account was resolved successfully and accountName is not empty
            setAccountName(data.content.data.account_name);
            setIsResolved(true);
          } else {
            // If the bank code is not recognized or other error occurred
            setAccountName("");
            setIsResolved(false);
           
            console.error(data.message);
          }
        })
        .catch((error) => {
          setIsResolved(false);
          alert('Oops! Account details not found');
          console.error("Error resolving bank account:", error);
        });
    }
  }, [selectedBank, accountNo]);

  return (
    <div className="app_wrapper">
      <div className="sidebar">
        <img src="sidebar.png" alt="sidebar" />
      </div>
      <div className="application_container">
        <div className="heading">
        <h2>
          Vetted Tailor Application
          <p>
            One step closer to the goal! please provide us with your Bank
            details with which you will be recieving payment.
          </p>
        </h2>
        </div>
      
        <div className="section_b">
          <div className="my_profile">
            <img src="profile.jpg" alt="profile" />

            <form className="first_form">

                <div className="form_content">
                <label>Name:</label>
              <input type="text" placeholder="Name" />
                </div>
              
            
                <div className="form_content">
              <label>Gender:</label>
              <input type="text" placeholder="male/female" />
              </div>

              <div className="form_content">
              <label>Sew Gender:</label>
              <input type="text" placeholder="" />
              </div>

              <div className="form_content">
              <label>Phone Number:</label>
              <input type="text" placeholder="Phone Number" />
</div>
<div className="form_content">
              <label>Email Address:</label>
              <input type="email" placeholder="Email Address" />
              </div>
              <div className="form_content">
              <label>Store Name:</label>
              <input type="text" placeholder="Store Name" />
</div> 
<div className="form_content">
              <label>Location:</label>
              <input type="text" placeholder="Location" />
              </div>

            </form>
            </div>
         

          <form onSubmit={handleSubmit} className="second_form">
           <div className="sec_section">
            <div>
            <label>Gender you sew for?</label>
            <select>
                <option value='' className="placeholder">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="both">Both</option>
            </select>
            </div>
           
<div>
<label>Styles you sew</label>
            <select>
                <option value='' className="placeholder">Select Styles</option>
              <option value="native">Native</option>
              <option value="corporate">Corporate</option>
              <option value="both">Both</option>
            </select>
</div>
            
            </div>
            <label for="bankName">Bank Name:</label>
            <select
              id="bankName"
              value={selectedBank}
              onChange={handleBankChange}
            >
              <option value="" className="placeholder">Please select your bank</option>
              {banks.map((bank) => (
                <option key={bank.code} value={bank.code}>
                  {bank.name}
                </option>
              ))}
            </select>

            <label htmlFor="accountNo">Account Number:</label>
            <input
              type="text"
              id="accountNo"
              value={accountNo}
              onChange={handleAccountNoChange}
              placeholder="Please input your account number"
              required
            />

            <label htmlFor="accountName">Account Name:</label>
            <input
              type="text"
              id="accountName"
              value={isResolved ? accountName : " "}
              readOnly 
              />
              <button type='submit'
              className="btn">
                 <Link to="/account-created">
                    Submit application
                 </Link>
                </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
