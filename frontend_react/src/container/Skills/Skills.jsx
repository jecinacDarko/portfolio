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
                  Throughout my diverse and accomplished career, I have skillfully produced music and advertising 
                  materials that resonate with audiences. I have hosted numerous radio shows, with some continuing 
                  to entertain listeners even after 15 years on air. I have successfully led various artist projects,
                   garnering support and collaboration from prominent names in the music industry. 
                   My experience extends to organizing large-scale events, as well as working as a music artist and DJ,
                    showcasing my versatility and passion for the creative arts.
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
                  I successfully completed a highly intensive Full-Stack training program 
                  at the School of Applied Technology in Stockholm, which led to a full-time 
                  position as a Software Developer Consultant with Applied Technology. 
                  In this role, I collaborated closely with the wider development team to 
                  build user-focused websites and applications. Committed to staying current 
                  with the latest industry trends and technologies, I have consistently delivered 
                  cutting-edge solutions. To ensure high-quality results and a seamless user experience, 
                  I have diligently conducted thorough UX/UI and application testing throughout my projects.
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
                  In my role, I maintained direct communication with Telenor's supply chain management, 
                  effectively organizing and planning ahead for various initiatives. I was responsible 
                  for managing IMEI/serial number databases, ensuring seamless synchronization between 
                  Brightstar's and Telenor's systems. Additionally, I successfully prepared and executed 
                  new device launches for multiple clients, including Telenor Sweden, Telenor Denmark, 
                  and HI3G, demonstrating my ability to manage complex projects and cater to diverse client needs.
                  </p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
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
                  <h4 className="titlebold">Freelance Web Developer / Graphic & UI UX Designer</h4>
                  <p className="titlebold">Self Employed</p>
                  <br />
                  <p className="paragraph">
                  With a wealth of experience in web development and related skills, I have honed my expertise 
                  in using various software tools and technologies to create exceptional, high-quality work. 
                  My strong focus on client satisfaction has consistently driven me to deliver excellent results,
                   even when navigating complex and challenging projects. My comprehensive skillset and commitment 
                   to excellence have allowed me to exceed expectations and meet the diverse needs of my clients.
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