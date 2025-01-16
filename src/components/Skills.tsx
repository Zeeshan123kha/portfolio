import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
                <h2 className="text-4xl md:text-5xl">Technologeis I work with</h2>
                <p className="text-gray-500 pt-2">
                    I'm a full-stack developer with a strong focus on JavaScript, React, and Node.js. I can help you build scalable, efficient, and responsive web applications.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                    <div className="space-y-2">
                        <h2>Typescript</h2>
                        <h2>React.js</h2>
                        <h2>Next.js</h2>
                    </div>
                    <div className="space-y-2">
                        <h2>Tailwind</h2>
                        <h2>CSS</h2>
                        <h2>Node.js</h2>
                    </div>
    

                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Skills;
