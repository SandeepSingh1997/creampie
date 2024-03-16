import Link from "../../../../node_modules/next/link";

import { registerModals } from "../../../Constants/Constants";
import "../styles.css";

export default function Login({ toggleModal }) {
  return (
    <section className="flex flex-col items-center bg-amber-300 p-3">
      <h1 className="text-lg font-bold mb-4">LOGIN</h1>
      <form className="flex flex-col items-center gap-2">
        <input
          type="username"
          placeholder="username"
          className="login-input w-100"
        />
        <input
          type="password"
          placeholder="password"
          className="login-input w-100"
        />
        <button type="submit" className="login-button mb-2">
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
      </form>
    </section>
  );
}
