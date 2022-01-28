/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import PageBanner from "../common/PageBanner";

const Registry = () => {
  return (
    <div>
      <PageBanner title="My account" />
      <div className="login">
        <div className="container">
          <form>
            <div className="w-3/5">
              <h3 className="login__title">Registry</h3>
              <label htmlFor="username">
                Username&nbsp;
                <span className="login__title__required">*</span>
              </label>
              <input
                type="text"
                className=""
                name="username"
                id="username"
                autoComplete="off"
                value=""
              />
              <label htmlFor="email">
                Username or email address&nbsp;
                <span className="login__title__required">*</span>
              </label>
              <input
                type="text"
                className=""
                name="email"
                id="email"
                autoComplete="off"
                value=""
              />
              <label htmlFor="password">
                Password&nbsp;<span className="login__title__required">*</span>
              </label>
              <span className="password-input">
                <input
                  className=""
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                />
              </span>
              <button
                type="submit"
                className="mt-4 font-bold default-btn bg-java-500"
              >
                Sign up
              </button>
              <p className="my-5 ">
                Already have an account?
                <Link
                  to="/login"
                  className="border-b text-java-500 border-b-java-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registry;
