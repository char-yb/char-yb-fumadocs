import React from "react";
import educationData from "../content/educationData";

const Education: React.FC = () => {
  return (
    <div>
      {educationData.map((edu) => (
        <div key={edu.school} className="mb-4">
          <h3 className="text-lg font-bold">{edu.school}</h3>
          <p className="text-sm">{edu.period}</p>
          <ul className="list-disc pl-5">
            {edu.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Education;