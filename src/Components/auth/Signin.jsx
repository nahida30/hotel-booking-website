import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-2">Sign in or create an account</h2>
        <p className="text-gray-600 mb-4">
          You can sign in using your Booking.com account to access our services.
        </p>

        <div className="text-left mb-4">
          <label className="text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
          Continue with email
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-2 text-gray-500 text-sm">or use one of these options</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
          </button>
          <button className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-6 h-6" />
          </button>
          <button className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-6 h-6" />
          </button>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          By signing in or creating an account, you agree with our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms & conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy statement
          </a>
          .
        </p>

        <p className="mt-4 text-gray-500 text-sm">
          All rights reserved. <br />
          Copyright (2006 - 2025) - Booking.com™
        </p>
      </div>
    </div>
  );
};

export default Signin;
