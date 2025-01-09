import React from "react";

const NewsCard = (props) => {
  const { author , source , title , desc , content , pub , url , Image } = props;
  return (
    <>
    <div className="pt-10 pb-[-40px]">
    <div className=" max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-300">
      <div className="flex ">
        <img
          className="w-1/3 rounded-xl p-2 object-cover "
          src={Image} // Replace with the actual image URL
          alt="City Skyline"
        />
        <div className="p-4 w-2/3">
          <h2 className="text-lg font-bold text-gray-800">
            {title}
          </h2>
          <p className="text-sm text-gray-600 my-2">
            {desc}
          </p>
          <a
            href="#"
            className="text-blue-500 text-sm hover:underline"
          >
            read more at PIB
          </a>
        </div>
      </div>
    </div>
    </div>
 </>
  );
};

export default NewsCard;
