"use client";
import Link from "next/link";
import { useRef } from "react";
import { registerModals } from "../../../constants/Constants";
import "../styles.css";

export default function Login({ toggleModal, submitLoginDetails }) {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const onLoginClick = () => {
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    submitLoginDetails(username, password);
  };
  return (
    <section className="flex flex-col items-center bg-amber-300 p-3">
      <h1 className="text-lg font-bold mb-4">LOGIN</h1>
      <section className="flex flex-col items-center gap-2">
        <input
          ref={usernameInputRef}
          type="username"
          placeholder="username"
          className="login-input w-100"
        />
        <input
          ref={passwordInputRef}
          type="password"
          placeholder="password"
          className="login-input w-100"
        />
        <button className="login-button mb-2" onClick={onLoginClick}>
          LOGIN
        </button>
        <Link href="https://www.google.com" className="text-sm ">
          forgot password
        </Link>
        <p
          onClick={() => {
            toggleModal(registerModals.signup);
          }}
          className="text-sm"
        >
          create new account
        </p>
      </section>
    </section>
  );
}
