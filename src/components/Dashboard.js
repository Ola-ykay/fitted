import React from "react";

const Dashboard = () => {
  const transactionData = [
    {
      transactionId: "#790841",
      transactionType: "Receive token",
      date: "12-June-2021",
      amount: "5 tokens",
      paymentMethod: "Token wallet",
      status: "successful",
    },
    {
      transactionId: "#790841",
      transactionType: "Transfer token",
      date: "12-June-2021",
      amount: "20 tokens",
      paymentMethod: "Token wallet",
      status: "successful",
    },
    {
      transactionId: "#790841",
      transactionType: "Product type",
      date: "12-June-2021",
      amount: "#30,000",
      paymentMethod: "Card Payment ",
      status: "successful",
    },
  ];
  return (
    <div className="dash_wrapper">
      <div className="dashboard_cont">
        <div>
          <img src="sidebar.png" alt="sidebar" className="acct_sidebar" />
        </div>

        <div className="dashboard_details">
          <div>
            <img src="profile.png" alt="profile" className="dash_image" />
          </div>
          <div className="profile_cont">
            <h2> Samuel Oladokun</h2>
            <p>Gender: male</p>
            <p>Location: Lagos</p>
            <p>Sew Gender: Male</p>
          </div>
          <div className="contact_details">
            <img src="iconMap.png" alt="iconMap" />
            <div className="phone_number">
              <p>Phone Number:</p>
              <p>+2348958484848</p>
            </div>
          </div>
          <div className="address_details">
            <img src="icon.png" alt="icon" />
            <div className="address">
              <p>Email Address</p>
              <p>samuelolaleye@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_sec">
      <div className="transaction_heading">
        <ul>
          <li>Transaction History</li>
          <li>Billing Address</li>
          <li>Account Settings</li>
        </ul>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Transaction Type</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionData.map((transaction) => (
              <tr key={transaction.transactionId}>
                <td>{transaction.transactionId}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.paymentMethod}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </div>
 
  );
};

export default Dashboard;
