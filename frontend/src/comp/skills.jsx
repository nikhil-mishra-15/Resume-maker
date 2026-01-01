import React from "react";

const LEVELS = [
  { label: "Novice", color: "bg-red-500", pos: "0%" },
  { label: "Beginner", color: "bg-orange-500", pos: "96.5%" },
  { label: "Skillful", color: "bg-yellow-400", pos: "200%" },
  { label: "Experienced", color: "bg-green-500", pos: "304%" },
  { label: "Expert", color: "bg-purple-500", pos: "405%" }
];

const LEVEL_COLORS = {
  Novice: {
    solid: "bg-red-500",
    light: "bg-red-100",
  },
  Beginner: {
    solid: "bg-orange-500",
    light: "bg-orange-100",
  },
  Skillful: {
    solid: "bg-yellow-500",
    light: "bg-yellow-100",
  },
  Experienced: {
    solid: "bg-blue-500",
    light: "bg-blue-100",
  },
  Expert: {
    solid: "bg-purple-500",
    light: "bg-purple-100",
  },
};


function Skills({ skills, setResume }) {

  const addSkill = () => {
    setResume(prev => ({
      ...prev,
      skills: [
        ...prev.skills.map(skill => ({ ...skill, open: false })),
        { id: crypto.randomUUID(), name: "", level: 0, open: true }
      ]
    }));
  };

  const toggleSkill = (id) => {
    setResume(prev => ({
      ...prev, skills: prev.skills.map(skill => skill.id === id ? { ...skill, open: !skill.open } : skill)
    }))
  }

  const updateSkill = (id, key, value) => {
    setResume(prev => ({
      ...prev,
      skills: prev.skills.map(skill =>
        skill.id === id ? { ...skill, [key]: value } : skill
      )
    }));
  };


  const deleteSkill = (id) => {
    setResume(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id)
    }));
  };

  return (
    <div className="mt-[50px]">
      <h2 className="flex justify-start pl-[20px] text-lg font-bold">Skills</h2>

      {skills.map(skill => {
        const level = LEVELS[skill.level];

        return (
          <div key={skill.id} className="rounded-lg p-4 mt-6 w-[80%] ml-[10px] shadow-[0px_10px_10px_rgba(0,0,0,0.15)]">

            {/* HEADER (collapsed view) */}
            <div
              onClick={() => toggleSkill(skill.id)}
              className="flex justify-between items-center cursor-pointer">
              <div>
                <p className="font-semibold">
                  {skill.name || "(Not specified)"}
                </p>
                <p className="text-sm text-gray-500">
                  {level.label}
                </p>
              </div>

              <span className="text-lg">
                {skill.open ? "▲" : "▼"}
              </span>
            </div>

            {/* BODY (expanded view) */}
            {skill.open && (
              <div className="space-y-6 mt-6">

                {/* Skill input */}
                <div className="flex justify-around">
                  <input
                    type="text"
                    placeholder="  Skill name"
                    className="w-[60%] outline-none"
                    value={skill.name}
                    onChange={(e) =>
                      updateSkill(skill.id, "name", e.target.value)
                    }
                  />
                </div>

                {/* Level label */}
                <p className="text-sm text-center">
                  Level — <span className="font-medium">{level.label}</span>
                </p>

                {/* Slider */}
                <div
                  className={`relative h-12 ${LEVEL_COLORS[level.label].light} rounded-[10px] overflow-hidden w-[80%] mx-auto`}
                >

                  {/* clickable zones */}
                  <div className="absolute inset-0 flex">
                    {LEVELS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          updateSkill(skill.id, "level", index)
                        }
                        className="flex-1"
                      />
                    ))}
                  </div>

                  {/* ticks */}
                  <div className="absolute inset-0 flex justify-between items-center px-15 pointer-events-none">
                    <span className="w-[2px] h-7 bg-gray-500"></span>
                    <span className="w-[2px] h-7 bg-gray-500"></span>
                    <span className="w-[2px] h-7 bg-gray-500"></span>
                    <span className="w-[2px] h-7 bg-gray-500"></span>
                  </div>

                  {/* slider thumb */}
                  <div
                    className={`absolute top-1 bottom-1 w-1/5 rounded-md
                    transition-all duration-200 ease-in-out
                    ${LEVEL_COLORS[level.label].solid}`}
                    style={{ transform: `translateX(${level.pos})` }}
                  />
                </div>
              </div>
          
            )}
            <div className="absolute left-120 mb-[25px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSkill(skill.id);
                }}
                className="text-red-600 text-sm font-semibold hover:underline"
              >
                <img src='/delete.png' height="20px" width="25px" />
              </button>
            </div>
          </div>
        
  );
})}
<button    
  onClick={addSkill}
  className="text-black underline font-semibold underline-offset-4 flex justify-start mt-[20px] ml-[20px]"
>
  + Add Skill
</button>
    </div>
  );
}

export default Skills;