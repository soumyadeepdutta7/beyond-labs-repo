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

  const handleRestart = () => {
    setSummary(false);
    setStep(1);
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg border">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Summary
          </h2>

          <div className="space-y-2 text-gray-700">
            <p><b>Full Name:</b> {fullName}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Role:</b> {role}</p>
            <p><b>Terms Accepted:</b> {termsAccepted ? 'Yes' : 'No'}</p>
          </div>

          <button
            onClick={handleRestart}
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 px-4 rounded-lg shadow-md"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg border">
        {step === 1 ? (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Basic Information
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="border rounded-lg w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 px-4 rounded-lg shadow-md"
            >
              Next
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Additional Details
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Role
              </label>
              <select
                value={role}
                onChange={handleInputChange}
                name="role"
                className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Role</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
                <option value="Manager">Manager</option>
              </select>
            </div>

            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleCheckboxChange}
                className="mr-2 accent-blue-500"
              />
              <label className="text-gray-700 text-sm">
                Accept Terms & Conditions
              </label>
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={handleBack}
                className="w-1/2 bg-gray-300 hover:bg-gray-400 transition text-gray-800 font-semibold py-2 px-4 rounded-lg"
              >
                Back
              </button>

              <button
                onClick={handleSubmit}
                className="w-1/2 bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 px-4 rounded-lg shadow-md"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
