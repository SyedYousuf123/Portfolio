import React from "react";
const Footer = () => (
  <div className="">
    <footer className="bg-primary border-t border-gray-600">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">FrotendDeveloper</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          syousufa68@gmail.com{" "}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <div className="flex">
            <a className="w-[45px] h-[45px] flex items-center justify-center bg-secondary rounded-[50%] my-[22px] mx-[10px] text-white text-[20px]"
              href="https://github.com/SyedYousuf123?tab=repositories"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </span>
      </div>
    </footer>
  </div>
);

export default Footer;

/* 
.social a {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9004d;
  border-radius: 50%;
  margin: 22px 10px;
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.social a:hover {
  transform: scale(1.3);
  transition: 0.3s;
}
*/