import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const socialMedias = [
  {
    icon: <BsLinkedin />,
    link: 'https://www.linkedin.com/in/darkojecinac'
  },
  {
    icon: <BsGithub />,
    link: 'https://github.com/jecinacDarko'
  },
  {
    icon: <BsInstagram />,
    link: 'https://www.instagram.com/darkojecinac'
  }
];

const SocialMedia = () => (
  <div className="app__social">
    {socialMedias.map((socialMedia, index) => (
      <a key={index} href={socialMedia.link} target="_blank" rel="noreferrer">
        <div>{socialMedia.icon}</div>
      </a>
    ))}
  </div>
);

export default SocialMedia;
