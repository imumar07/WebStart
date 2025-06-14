import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Invoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h2 className="mb-0">Invoice</h2>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-6">
              <h5 className="mb-3"><strong>From:</strong></h5>
              <p className="mb-1"><strong>The WebStart</strong></p>
              <p>Web Development Services</p>
              <p>
                Email:{" "}
                <a href="mailto:Umar630934@gmail.com" className="text-decoration-none">Umar630934@gmail.com</a><br />
                <a href="mailto:koppojuvikaskumar@gmail.com" className="text-decoration-none">koppojuvikaskumar@gmail.com</a>
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <h5 className="mb-3"><strong>To:</strong></h5>
              <p className="mb-1"><strong>Dr Ibrar Ansari</strong></p>
              <p>
                Email:{" "}
                <a href="mailto:ansarimohammadibrar@gmail.com" className="text-decoration-none">ansarimohammadibrar@gmail.com</a>
              </p>
            </div>
          </div>

          <table className="table table-bordered">
            <thead className="table-secondary">
              <tr>
                <th>Product Details</th>
                <th className="text-end">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Hostinger Plan</strong>
                  <ul>
                    <li>4-Year Web Hosting Plan</li>
                    {/* <li>1-Year Free Domain Registration</li> */}
                    <li>Support for Hosting Up to 100 Websites</li>
                    <li>Unlimited Bandwidth for Optimal Performance</li>
                    <li>24/7 Customer Support</li>
                    <li>Free SSL Certificate for Enhanced Security</li>
                  </ul>
                </td>
                <td className="text-end">5,845</td>
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
                <td className="text-end">24,999</td>
              </tr>
              {/* <tr className="table-success">
                <td><strong>Discount (15%) on Development</strong></td>
                <td className="text-end text-success"><strong>-4,449</strong></td>
              </tr> */}
              <tr>
                <td><strong>Additional 3-Year Domain Registration (GST Included)</strong></td>
                <td className="text-end">4,297</td>
              </tr>
              <tr className="table-warning">
                <td><strong>Total</strong></td>
                <td className="text-end"><strong>35,141</strong></td>
              </tr>
              <tr>
                <td>Amount Paid</td>
                <td className="text-end">-6,500</td>
              </tr>
              <tr className="table-info">
                <td><strong>Final Amount to be Paid</strong></td>
                <td className="text-end"><strong>28,641</strong></td>
              </tr>
              {/* <tr className="table-success">
                <td><strong>Final Amount Paid</strong></td>
                <td className="text-end"><strong>29,000</strong></td>
              </tr> */}
              {/* <tr className="table-danger">
                <td colSpan="2" className="text-center">
                  <strong>Deal Cleared</strong>
                </td>
              </tr> */}
            </tbody>
          </table>

          <div className="text-end mt-4">
            <button className="btn text-white px-4 py-2" style={{ backgroundColor: "#4caf50" }} onClick={handlePrint}>
              Print Invoice
            </button>
          </div>
        </div>
        <div className="card-footer text-center text-muted">
          Thank you for your business! Feel free to reach out if you have any questions.
        </div>
      </div>
    </div>
  );
};

export default Invoice;
