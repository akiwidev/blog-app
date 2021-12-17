import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-slate-900 bg-opacity-30">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded"
        />
      </div>
      <h3 className="text-slate-50 my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-slate-50 text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
