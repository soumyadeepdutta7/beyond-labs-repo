"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [summary, setSummary] = useState(false);

  const handleNext = () => {
    if (!fullName || !email) {
      alert("Please fill in the required fields");
    } else {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    if (!role || !termsAccepted) {
      alert("Please fill in the required fields");
    } else {
      setSummary(true);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'role':
        setRole(value);
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (e: any) => {
    setTermsAccepted(e.target.checked);
  };

  if (summary) {
    return (
      <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-md shadow-md border">
        <h2 className="text-lg font-bold mb-2 text-black">**Summary**</h2>
        <p className="text-black"><b>Full Name:</b> {fullName}</p>
        <p className="text-black"><b>Email:</b> {email}</p>
        <p className="text-black"><b>Role:</b> {role}</p>
        <p className="text-black"><b>Terms Accepted:</b> {termsAccepted ? 'Yes' : 'No'}</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-md shadow-md border">
      {step === 1 ? (
        <div>
          <h2 className="text-lg font-bold mb-4 text-black">**Basic Information**</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">**Full Name**</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">**Email**</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >Next</button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-4 text-black">**Additional Details**</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">**Role**</label>
            <select
              value={role}
              onChange={handleInputChange}
              name="role"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="">**Select Role**</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="terms">**Terms & Conditions**</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label className="text-gray-700 text-sm" htmlFor="terms">**Accept Terms & Conditions**</label>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >**Back**</button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}