import React from "react";
import { No_Image } from "./Assets";

const NewsCard = (props) => {
  const { Index , author , source , title , desc , content , pub , url , Image } = props;
  const FINAL_DESC = desc ? desc.slice(0,150) : desc ;
  const Final_Image = Image ? Image : No_Image ;
  return (
    <>
    <div className="pt-10 pb-[-40px] ">
    <div className=" max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 hover:shadow-l hover:scale-105 transition-all ">
      <div className="flex ">
        <img
          className="w-[40%] h-[275px] rounded-xl p-2 object-cover "
          src={Final_Image} // Replace with the actual image URL
          alt="City Skyline"
        />
        <div className="p-4 w-2/3 ">
          <h2 className="text-lg font-bold text-gray-800">
            {title}
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Author : {author}
          </p>
          <p className="text-sm text-gray-600 my-2">
            Published at : {pub}
          </p>
          <p className="text-sm text-gray-600 my-2">
            Source : {source}
          </p>
          <p className="text-sm text-gray-600 my-2">
            {FINAL_DESC}
          </p>
          <a
            href={url}
            className=" text-black text-sm hover:underline"
          >
          <button type="button" className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</button>          </a>
        </div>
      </div>
    </div>
    
    </div>
    
 </>
  );
};

export default NewsCard;
