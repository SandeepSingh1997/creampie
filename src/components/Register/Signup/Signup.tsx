import Link from "../../../../node_modules/next/link";
import { registerModals } from "../../../Constants/Constants";

export default function Signup({ toggleModal }) {
  return (
    <section className="flex flex-col items-center bg-amber-300 p-3">
      <h1 className="text-lg font-bold mb-4">SIGN UP</h1>
      <form className="flex flex-col items-center gap-2">
        <input
          type="text"
          placeholder="username"
          className="login-input w-100"
        />
        <input type="email" placeholder="email" className="login-input w-100" />
        <input
          type="text"
          placeholder="first name"
          className="login-input w-100"
        />
        <input
          type="text"
          placeholder="last name"
          className="login-input w-100"
        />
        <input
          type="password"
          placeholder="password"
          className="login-input w-100"
        />
        <input
          type="password"
          placeholder="confirm password"
          className="login-input w-100"
        />
        <button type="submit" className="login-button mb-2">
          Signup
        </button>
        <p
          onClick={() => {
            toggleModal(registerModals.login);
          }}
          className="text-sm"
        >
          already have an account
        </p>
      </form>{" "}
    </section>
  );
}
