"use client";
import { registerModals } from "../../Constants/Constants";
import Login from "@/components/Register/Login/Login";
import Signup from "@/components/Register/Signup/Signup";
import { useState } from "react";

export default function Register() {
  const [activeModal, setActiveModal] = useState<String>(registerModals.login);

  const toggleActiveModal = (modal: String) => {
    setActiveModal(modal);
  };

  const renderActiveModal = () => {
    switch (activeModal) {
      case registerModals.login:
        return <Login toggleModal={toggleActiveModal} />;
      case registerModals.signup:
        return <Signup toggleModal={toggleActiveModal} />;
    }
  };

  return <main>{renderActiveModal()}</main>;
}
