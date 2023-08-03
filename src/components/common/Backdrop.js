// components/Backdrop.js
import { SidebarContext } from "@/context/SidebarContext";
import React, { useContext, useEffect } from "react";

const Backdrop = ({ onClick }) => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  useEffect(() => {
    const handleResize = () => {
      // Handle the window resize event here, if needed
      // For example, you can update the state to keep the backdrop open on window resize
      closeSidebar();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black opacity-50 z-40"
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
