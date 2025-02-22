import React, { useState } from 'react';

export default function ProjectCard({ data }) {
  const [isReadMoreShown, setIsReadMoreShown] = useState(false);
  const showWordCount = 100;

  const toggleBtn = () => {
    setIsReadMoreShown((prevState) => !prevState);
  };

  // Handle the tags (split by comma and trim extra spaces)
  const tagsArray = data.tags.split(',').map(tag => tag.trim());

  return (
    <div className="p-4 h-full">
      <div className="max-w-sm h-full rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={data.image} alt={data.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl">{data.title}</div>
          <p className="text-gray-700 text-base mb-2">{data.date}</p>
          <p className="text-gray-700 text-base">
            {isReadMoreShown ? data.about : data.about.substr(0, showWordCount)}
            {data.about.length > showWordCount && (
              <button onClick={toggleBtn} className="text-red-500">
                {isReadMoreShown ? '..Read Less' : '...Read More'}
              </button>
            )}
          </p>
        </div>
        <div className="px-4 py-2 w-full flex gap-2">
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full bg-gray-800 text-white p-1 rounded-md text-base font-semibold"
            >
              <i className="ri-github-fill align-middle"></i> Github
            </a>
          )}
          {data.demo && (
            <a
              href={data.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full bg-gray-800 text-white p-1 rounded-md text-base font-semibold"
            >
              <i className="ri-earth-line align-middle"></i> Demo
            </a>
          )}
        </div>
        <div className="px-6 pt-4 pb-2">
          {tagsArray.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
