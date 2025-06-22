import React from "react";
import qrImage from "../../assets/QR.jpg";

const Invoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-800 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#111827] text-white text-center py-4">
          <h2 className="text-2xl font-bold">Invoice</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Sender and Receiver Info */}
          <div className="flex flex-col md:flex-row justify-between text-gray-700 dark:text-gray-200">
            <div>
              <h5 className="font-bold">From:</h5>
              <p className="font-semibold">The WebStart</p>
              <p>Web Development Services</p>
              <p>
                Email:{" "}
                <a
                  className="text-blue-600 dark:text-blue-400"
                  href="mailto:Umar630934@gmail.com"
                >
                  Umar630934@gmail.com
                </a>
                <br />
                <a
                  className="text-blue-600 dark:text-blue-400"
                  href="mailto:koppojuvikaskumar@gmail.com"
                >
                  koppojuvikaskumar@gmail.com
                </a>
              </p>
            </div>

            <div className="text-left md:text-right mt-6 md:mt-0">
              <h5 className="font-bold">To:</h5>
              <p className="font-semibold">Dr Ibrar Ansari</p>
              <p>
                Email:{" "}
                <a
                  className="text-blue-600 dark:text-blue-400"
                  href="mailto:ansarimohammadibrar@gmail.com"
                >
                  ansarimohammadibrar@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Invoice Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-800 dark:text-gray-200">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                  <th className="text-left px-4 py-2">Product Details</th>
                  <th className="text-right px-4 py-2">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
                <tr>
                  <td className="px-4 py-3">
                    <strong>Hostinger Plan</strong>
                    <ul className="list-disc ml-5">
                      <li>4-Year Web Hosting Plan</li>
                      <li>Support for Hosting Up to 100 Websites</li>
                      <li>Unlimited Bandwidth</li>
                      <li>24/7 Customer Support</li>
                      <li>Free SSL Certificate</li>
                    </ul>
                  </td>
                  <td className="px-4 py-3 text-right">5,845</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <strong>WordPress Website Development</strong>
                    <ul className="list-disc ml-5">
                      <li>Custom Logo and Poster Design</li>
                      <li>Complete Website Design</li>
                      <li>Tailored Customizations</li>
                      <li>1-Year Maintenance & Support</li>
                      <li>SEO Optimization</li>
                    </ul>
                  </td>
                  <td className="px-4 py-3 text-right">24,999</td>
                </tr>
                {/* <tr>
                  <td className="px-4 py-3">
                    <strong>3-Year Domain Registration (GST Included)</strong>
                  </td>
                  <td className="px-4 py-3 text-right">4,297</td>
                </tr> */}
                <tr className="font-bold">
                  <td className="px-4 py-3">Total</td>
                  <td className="px-4 py-3 text-right">30,844</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Amount Paid</td>
                  <td className="px-4 py-3 text-right text-red-600">-6,500</td>
                </tr>
                <tr className="font-bold bg-gray-100 dark:bg-gray-700">
                  <td className="px-4 py-3">Final Amount to be Paid</td>
                  <td className="px-4 py-3 text-right text-green-600">
                    24,344
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Scan to Pay (UPI)
            </h3>
            <img
              src={qrImage} // replace with actual QR code image path or local image
              alt="QR Code to Pay"
              className="mx-auto w-80 h-100 border border-gray-300 dark:border-gray-600 rounded-md"
            />
            {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              UPI ID: yourupi@bank
            </p> */}
          </div>

          {/* Print Button */}
          <div className="text-right">
            <button
              onClick={handlePrint}
              className="px-6 py-3 bg-[#111827] hover:bg-gray-800 text-white font-medium rounded-lg shadow"
            >
              Print Invoice
            </button>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 text-center text-gray-700 dark:text-gray-300 py-4 text-sm">
          Thank you for your business! Feel free to reach out if you have any
          questions.
        </div>
      </div>
    </section>
  );
};

export default Invoice;
