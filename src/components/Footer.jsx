import React from "react";

const Footer = () => {
  return (
    <footer className="navy-blue fixed bottom-0 w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-5 py-10 px-20 w-full">
        <p className="text-[ivory]">© 2024 Meesho</p>
        <div className="text-[ivory] flex gap-5 sm:gap-10">
          <span className="">Contact Us</span>
          <span className="">|</span>
          <span className="">About Us</span>
          <span className="">|</span>
          <span className="">Contribute</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
