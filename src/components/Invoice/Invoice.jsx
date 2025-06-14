import React from "react";
import "./Invoice.css"; // Use normal CSS

const Invoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-container">
      <div className="invoice-card">
        <div className="invoice-header">
          <h2>Invoice</h2>
        </div>
        <div className="invoice-body">
          <div className="invoice-row">
            <div>
              <h5><strong>From:</strong></h5>
              <p><strong>The WebStart</strong></p>
              <p>Web Development Services</p>
              <p>
                Email: <a href="mailto:Umar630934@gmail.com">Umar630934@gmail.com</a><br />
                <a href="mailto:koppojuvikaskumar@gmail.com">koppojuvikaskumar@gmail.com</a>
              </p>
            </div>
            <div className="text-right">
              <h5><strong>To:</strong></h5>
              <p><strong>Dr Ibrar Ansari</strong></p>
              <p>
                Email: <a href="mailto:ansarimohammadibrar@gmail.com">ansarimohammadibrar@gmail.com</a>
              </p>
            </div>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>Product Details</th>
                <th className="text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Hostinger Plan</strong>
                  <ul>
                    <li>4-Year Web Hosting Plan</li>
                    <li>Support for Hosting Up to 100 Websites</li>
                    <li>Unlimited Bandwidth for Optimal Performance</li>
                    <li>24/7 Customer Support</li>
                    <li>Free SSL Certificate for Enhanced Security</li>
                  </ul>
                </td>
                <td className="text-right">5,845</td>
              </tr>
              <tr>
                <td>
                  <strong>WordPress Website Development</strong>
                  <ul>
                    <li>Custom Logo and Poster Design</li>
                    <li>Complete Website Design and Development</li>
                    <li>Tailored Customizations to Meet Your Requirements</li>
                    <li>Complimentary 1-Year Maintenance and Support</li>
                    <li>SEO Optimization for Enhanced Online Visibility</li>
                  </ul>
                </td>
                <td className="text-right">24,999</td>
              </tr>
              <tr>
                <td><strong>Additional 3-Year Domain Registration (GST Included)</strong></td>
                <td className="text-right">4,297</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td className="text-right"><strong>35,141</strong></td>
              </tr>
              <tr>
                <td>Amount Paid</td>
                <td className="text-right">-6,500</td>
              </tr>
              <tr>
                <td><strong>Final Amount to be Paid</strong></td>
                <td className="text-right"><strong>28,641</strong></td>
              </tr>
            </tbody>
          </table>

          <div className="text-right" style={{ marginTop: "2rem" }}>
            <button className="print-btn" onClick={handlePrint}>
              Print Invoice
            </button>
          </div>
        </div>
        <div className="invoice-footer">
          Thank you for your business! Feel free to reach out if you have any questions.
        </div>
      </div>
    </div>
  );
};

export default Invoice;
