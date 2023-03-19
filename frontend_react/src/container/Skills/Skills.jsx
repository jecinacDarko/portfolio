import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="title">Technical Skills and Experiences.</h2>
      <div className="skills-container">
        <motion.div className="skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skill flex"
              key={skill.name}
            >
              <div className="app__flex">
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="paragraph">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="experiences">
          <motion.div className="experience">
            <div className="experience-year">
              <p className="titlebold">2022</p>
            </div>
            <motion.div className="experience-info">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="experience-content"
                >
                  <h4 className="titlebold">Sound Engineer/ Producer/ Artist</h4>
                  <p className="titlebold">Radio As FM</p>
                  <br />
                  <p className="paragraph">
                  As a Music Producer, I have produced music and advertising material, 
                  managed and edited multiple radio shows, and led various artist projects. 
                  I have been fortunate enough to receive support and have worked with 
                  notable names in the music industry.
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
          <motion.div className="experience">
            <div className="experience-year">
              <p className="titlebold">2020</p>
            </div>
            <motion.div className="experience-info">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="experience-content"
                >
                  <h4 className="titlebold">Full Stack Developer Consultant </h4>
                  <p className="titlebold">SALT - Applied Technology</p>
                  <br />
                  <p className="paragraph">
                  has completed a highly intensive Full-Stack training program at the 
                  School of Applied Technology in Stockholm. Upon completion, he was hired 
                  full-time by Applied Technology as a Software Developer Consultant.
                  As a Software Developer Consultant at Applied Technology, I have worked 
                  with a development team, built user-centric websites and applications, 
                  expanded my knowledge of new technologies, and performed UX/UI 
                  and application testing.
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
          <motion.div className="experience">
            <div className="experience-year">
              <p className="titlebold">2017</p>
            </div>
            <motion.div className="experience-info">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="experience-content"
                >
                  <h4 className="titlebold">Inbound Specialist</h4>
                  <p className="titlebold">Brightstar Corp</p>
                  <br />
                  <p className="paragraph">
                  I have had direct communication with Telenor's supply chain management team, 
                  where I was responsible for managing IMEI/serial number databases and ensuring 
                  their synchronization between Brightstar's and Telenor's systems. Additionally, 
                  I played a key role in preparing for device launches. 
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "skillsExperiences"), "skills");