import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { userSignUp, updateUser, setUser } = use(AuthContext);
  const handleUserSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, phone, email, password);
    userSignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser({ displayName: name, phoneNumber: phone })
          .then(() => {
            setUser({ ...user, displayName: name, phoneNumber: phone });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex mx-auto flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm text-gray-600">Sign Up Your Account</p>
      </div>
      <form onSubmit={handleUserSignUp} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              User Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              // placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              // placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Phone Number
            </label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="+088"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50"
            >
              Sign Up
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-600">
            Have an Account Yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-600"
            >
              Sign In
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
