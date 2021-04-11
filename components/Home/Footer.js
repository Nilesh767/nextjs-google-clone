import React, { useEffect, useState } from "react";

const Footer = () => {
  const [country, setCountry] = useState("");
  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log("Country: ", response.country);
        setCountry(response.country);
      })
      .catch((data, status) => {
        console.log("Request failed");
      });
  }, []);

  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-gray-500">
      <div className="px-0 py-3">
        <p className="ml-7 text-base text-gray-600 ">{country}</p>
      </div>
      <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-y-4 grid-flow-row-dense">
        <div className="ml-5 flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How search works</p>
        </div>
        <div className=" mr-5 flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
