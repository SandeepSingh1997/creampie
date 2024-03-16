"use client";
import { registerModals } from "../../constants/Constants";
import Login from "@/components/register/login/Login";
import Signup from "@/components/register/signup/Signup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/slices/UserSlice";
import { useRouter } from "next/navigation";

export default function Register() {
  const [activeModal, setActiveModal] = useState<String>(registerModals.login);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const router = useRouter();

  const toggleActiveModal = (modal: String) => {
    setActiveModal(modal);
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      router.push("/");
    }
  });

  const handleLogin = (username, password) => {
    const payload = { username, email: "email" };
    dispatch(login(payload));
  };

  const renderActiveModal = () => {
    switch (activeModal) {
      case registerModals.login:
        return (
          <Login
            toggleModal={toggleActiveModal}
            submitLoginDetails={handleLogin}
          />
        );
      case registerModals.signup:
        return <Signup toggleModal={toggleActiveModal} />;
    }
  };

  return <main>{renderActiveModal()}</main>;
}
