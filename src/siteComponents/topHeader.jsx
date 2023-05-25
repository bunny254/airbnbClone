import React from "react";
import { FaAirbnb, FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <div>
      <header className="p-4 flex justify-between">
        <a href="/" className="flex items-center gap-1">
          <FaAirbnb size="28px" />
          <span>Airbnb</span>
        </a>
        <div className="flex border border-gray-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-gray-300">
          <div>Anywhere</div>
          <div className="border-l border-gray-300" />
          <div>Any week</div>
          <div className="border-l border-gray-300" />
          <div>Add guests</div>
          <div className="border-l border-gray-300" />
          <div>
            <button className="bg-primary text-white p-2 rounded-full">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 gap-2">
          <AiOutlineMenu />
          <Link to="/signin">
            <FaUserCircle />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default TopHeader;
