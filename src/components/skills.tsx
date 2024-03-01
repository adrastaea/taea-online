import React from "react";

// Lists the skills in a table format
// String is the skill name, Number is the skill level [0-5]
// Example: { "JavaScript": 5, "React": 4, "Node.js": 3 }
// Render the skills in a table format with an icon for the skill level
const SkillsTable: React.FC<{ skills: Map<string, number> }> = ({ skills }) => {
  return (
    <div className="flex-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Skill</th>
            <th className="text-left">Level</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(skills.keys()).map((skill) => (
            <tr key={skill.toString()}>
              <td>{skill}</td>
              <td>
                {[...Array<number>(Number(skills.get(skill)))].map((_, i) => (
                  <svg
                    key={i}
                    className="inline h-6 w-6 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
