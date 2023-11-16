import Avatar from "../img/avatar.jpeg";
import Image1 from "../img/image1.webp";
import Image2 from "../img/image2.jpeg";
import Image3 from "../img/image3.webp";

import Image from "next/image";


const menuItem = [
  "Home Page",
  "About us",
  "Generators",
  "Features",
  "Pricing Plan",
  "Collection-2023",
  "Blog-News",
  "Career",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className=" bg-primary px-5 md:px-10 pt-6 pb-10 md:pb-16">
        <div className="flex flex-row justify-between items-center lg:items-start">
          <div className="text-xl text-black font-bold">AIPatrn</div>

          <div className="hidden lg:flex flex-row w-[600px] items-start">
            <div className="flex-1 grid grid-cols-2 gap-2">
              {menuItem.map((menu) => {
                return (
                  <div
                    key={menu}
                    className={`text-sm text-gray-400 ${
                      menu === "Home Page" && "font-bold !text-black"
                    }`}
                  >
                    {menu}
                  </div>
                );
              })}
            </div>
            <div className="px-10 py-2 border rounded-full cursor-pointer font-semibold">
              Menu
            </div>
          </div>

          <div className="lg:hidden px-10 py-2 border rounded-full cursor-pointer font-semibold">
            Menu
          </div>
        </div>

        <div className="text-gray-400 text-lg md:text-xl font-medium mt-5 md:mt-auto">
          Revolutionize your
        </div>

        <div className="text-2xl md:text-5xl text-black font-medium w-full md:w-[60%] leading-snug">
          Creative Projects with the Ultimate AI-Powered Pattern
          <div className="flex flex-col-reverse md:flex-row md:gap-10 gap-5 md:items-center lg:w-[70%]">
            <div className="flex">
              <div className="bg-black text-white rounded-full text-sm px-8 md:px-10 py-5 uppercase">
                start generating
              </div>
            </div>
            <div className="flex-1 text-gray-400 text-xl mt-2 md:mt-4">
              The Next generation <span className="text-black">Production</span>{" "}
              For Designers
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row overflow-y-hidden md:gap-1">
        <div className="w-full md:w-[25%] relative">
          <div className="absolute border border-white text-white rounded-full px-5 py-1 top-5 left-5">
            01
          </div>

          <div className="absolute bottom-4 px-4">
            <div className="flex">
              <div className="w-[50px] h-[50px] bg-red-600 rounded-full border-white border-2 overflow-hidden">
                <Image src={Avatar} alt="avatart" />
              </div>
              <div className="w-[50px] h-[50px] bg-red-600 rounded-full border-white border-2 overflow-hidden relative -left-5">
                <Image src={Avatar} alt="avatart" />
              </div>
              <div className="w-[50px] h-[50px] bg-red-600 rounded-full border-white border-2 overflow-hidden relative -left-10">
                <Image src={Avatar} alt="avatart" />
              </div>
            </div>
            <div className="text-white text-xl my-4">
              Learn from best mentors
            </div>
            <div className="flex">
              <div className="px-4 py-3 uppercase border border-white rounded-full text-white">
                start learning
              </div>
            </div>
          </div>

          <Image
            src={Image1}
            alt="Image"
            className="w-full h-[400px]"
          />
        </div>
        <div className="w-full md:w-[25%] relative">
          <div className="absolute border border-white text-white rounded-full px-5 py-1 top-5 left-5">
            02
          </div>
          <div className="absolute bottom-4 px-4 text-white w-full">
            <div className="border-b border-white pb-2">Free Edit</div>
            <div className="border-b border-white pb-2 mt-4">Interactive</div>
            <div className="border-b border-white pb-2 mt-4">
              Easy interface
            </div>
            <div className="border-b border-white pb-2 mt-4">
              Compare to other
            </div>
          </div>
          <Image
            src={Image2}
            alt="Image2"
            className="w-full h-[400px]"
          />
        </div>
        <div className="w-full md:w-[50%] relative">
          <div className="absolute border border-white text-white rounded-full px-5 py-1 top-5 left-5">
            03
          </div>
          <div className="absolute bottom-4 px-5 text-white w-full flex items-center gap-5">
            <div className="text-6xl">+20K</div>
            <div>Glass Pattern generates this week in the first release</div>
          </div>
          <Image
            src={Image3}
            alt="image"
            className="w-full h-[400px]"
          />
        </div>
      </div>
    </main>
  );
}
