import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const cats=[{
   label:"Jewellery & Acessories",
   pic:<></>,
   href:"/"
},
{
   label:"Women Ethnic",
   pic:<></>,
   href:"/"
},
{
   label:"Women western",
   pic:<></>,
   href:"/"
},
{
   label:"Mens Ethnic",
   pic:<></>,
   href:"/"
},
{
   label:"Mens Casuals",
   pic:<></>,
   href:"/"
},
{
   label:"Kids",
   pic:<></>,
   href:"/"
},
{
   label:"Toys & Acessories",
   pic:<></>,
   href:"/"
},
{
   label:"Bags & Footwear",
   pic:<></>,
   href:"/"
},]


const Featured=()=>{
   return(
      <div name="featured" className="h-[100vh] w-full featurebg p-[60px]">
         <div name="left" className="flex flex-col h-[35pc] w-[30vw] bg-[#F1E9D2] rounded-lg">
         <div className="bg-white flex m-3 rounded-lg border-[#800020] border-[2px] h-9 justify-start items-center gap-5 hover:bg-[#F5F5DC] hover:border-[#1A1A40] transition-colors duration-300">
  <FaMagnifyingGlass className="text-[#1A1A40] m-2"/>
  <input
    type="text"
    placeholder="Search for categories..."
    className="bg-transparent outline-none   focus:border-transparent pl-2"
  />
</div>
         </div>
         <div name="right"></div>
      </div>
   );
}
export default Featured;