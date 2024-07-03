import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";



const cloth=[{
   img:"/womenethnic.jpeg",
   name:"Saree hai",
   desc:"Acchi hai",
   price:"150",
   org:"999",
   dis:"45%",
   rate:"3.5",
   href:"/"
},
{
   img:"/womenethnic.jpeg",
   name:"Saree hai",
   desc:"Acchi hai",
   price:"150",
   org:"999",
   dis:"45%",
   rate:"3.5",
   href:"/"
}]

const Catcard=()=>{
   return(<div className="min-h-[75vh] m-[60px] flex flex-wrap gap-[30px] justify-center md:justify-start bg-[#708090] rounded-md" style={{
      background: 'linear-gradient(135deg, #708090, #3E474F)',
    }}>
      {cloth.map((item, index)=>(
         <div key={index}
         href={item.href} className="cardback h-[19pc] w-[15pc] m-3 rounded-lg" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)'}
      }>
            <img src={item.img} alt="img" className="h-[60%] w-full rounded-t-lg"/>
         
         <div className="flex flex-col justify-start m-2">
            <p className="text-[#1A1A40] font-bold">{item.name}</p>
            <p className="text-[#4B4B4B] font-medium -mt-2">{item.desc}</p>
            <div className="flex justify-between items-center pb-2">
               <p className="text[#800020] font-medium">{item.price}</p>
               <s className="text-gray-700 font-semibold">{item.org}</s>
              <p className="text-[#228B22] font-semibold"> {item.dis}</p>
            </div>
            
            <div className="flex justify-between items-center border-t-2 border-gray-400 t">
               <div className="flex justify-start items-center gap-1 pt-2 font-semibold text-gray-600"><p>{item.rate}</p><FaStar className="text-[#FFD700]"/></div>
               <FaRegHeart/>
            </div>
         </div>
         </div>
      ))}
   </div>);
};
export default Catcard;