import Image from "next/image";
import React from "react";

const NavDash = ({profileImage}) => {
  return (
    <div className="flex items-center justify-between mt-8 max-lg:mt-0 max-md:flex-col">
      <h1 className="text-2xl font-bold font-montserrat leading-normal tracking-[0.05rem]">
        Dashboard
      </h1>
      <div className="flex items-center justify-end gap-7">
        <div className="flex items-center justify-between relative">
          <input
            type="text"
            className="p-2 pl-5 text-sm rounded-[10px]"
            placeholder="Search.."
          />
          <Image
            src={"/icons/searchIcon.png"}
            width={23}
            height={23}
            alt="Search icon"
            className="cursor-pointer absolute right-5 p-1"
          />
        </div>
        <Image
          src={"/icons/bellIcon.png"}
          width={20}
          height={20}
          alt="Bell icon"
        />
        <Image
          src={profileImage}
          width={50}
          height={50}
          alt="Avatar Icon"
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavDash;
