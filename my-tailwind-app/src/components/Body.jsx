import React from 'react';

const Body = () => {
  const alertMessage = "This is amazing!";
  const courseInfo = {
    name: "Kalvium Store",
    message: "Discover new courses!"
  };
  
  return (
    <main className="flex flex-col items-center my-10">
    <button className="bg-blue-500 text-white btn-primary">Button One</button>
    <div className="alert-message mt-4">
      <p className="bg-red-500 font-bold">Alert!</p>
      <p className='bg-red-500'>{alertMessage}</p>
    </div>
    <div className="flex flex-col course-info mt-4">
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Kalvium" className="course-logo" />
      <div>
        <div className="font-bold">{courseInfo.name}</div>
        <div className="text-gray-600">{courseInfo.message}</div>
      </div>
    </div>
  </main>
  );
};

export default Body;
