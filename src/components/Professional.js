import React from "react";
import Frontend from "./Frontend";

function Professional() {

  let skill1 =
  {
    skill: 'HTML/CSS',
    value: 90
  }
  let skill2 =
  {
    skill: 'javaScript',
    value: 60
  }
  let skill3 = {
    skill: 'React.Js',
    value: 70
  }
  let skill4 = {
    skill: 'Node.Js',
    value: 60
  }

  return (
    <div>
      <div className="border-solid border-black mt-5">
        <h1 className="md:text-3xl text-lg font-semibold text-center uppercase mb-5">
          Professional <span className="text-pink-600">Skills</span>
        </h1>
        <Frontend skillData={skill1} />
        <Frontend skillData={skill2} />
        <Frontend skillData={skill3} />
        <Frontend skillData={skill4} />
      </div>
    </div>
  );
}

export default Professional;
