import React from "react";
import EducationData from "./Education/EducationData";

function Education() {

  let education2 = {
    duration: "2019 - 2022",
    heading: "Mohamed Sathak Collage of Art and Science",
    content: "Completed Bachelor of Commerce with a specialization in Computer Applications (Bcom CA), demonstrating a strong foundation in both financial principles and computer-based applications."
  }
  let education1 = {
    duration: "2022 - 2024",
    heading: "Madras University",
    content: "I'm currently pursuing an MCA while improving my problem-solving and software programming talents.utilising theoretical understanding in real-world situations."
  }

  let experience1 = {
    duration: "6 Month Internship",
    heading: "E-COMMERCE WEBSITE ",
    content: "Orders are placed and customer information is kept up to date in the database. I use HTML 5, JavaScript, Tailwind, ReactJS, NodeJS, and SQL in my work."
  }
  let experience2 = {
    duration: "2022 - 2023",
    heading: "Work Experience",
    content: "Process Associate Experian project in HCL (24/08/22 – 30/06/23) Analyse data and prepare Balance Sheet, Profit and Loss Account. Also verify Cash Flow statements using Toscana tool."
  }


  return (
    <div className="md:pt-20">
      <h1 className="text-4xl md:text-5xl font-bold pb-10 text-center md:mt-5  mt-24">
        Education
      </h1>
      <div className="md:flex justify-center items-center md:gap-10 px-3 md:px-40 pb-10">
        <div>
          <h1 className="text-xl font-bold text-center pb-3">Education</h1>
          <div className=" border-l-2 border-pink-600">
            <EducationData data={education1} />
            <EducationData data={education2} />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-center pb-3">Experience</h1>
          <div className=" border-l-2 border-pink-600">
            <EducationData data={experience1} />
            <EducationData data={experience2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
