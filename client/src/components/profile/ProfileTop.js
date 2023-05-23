import React, { useState } from "react";
import PropTypes from "prop-types";
import iconGlobe from "../../asset/icons-globe.png";
import iconTwitter from "../../asset/icons-twitter.png";
import iconFacebook from "../../asset/icons-facebook.png";
import iconGithub from "../../asset/icons-github.png";
import iconYoutube from "../../asset/icons-youtube.png";
import iconInstagram from "../../asset/icons-instagram.png";
import { connect } from "react-redux";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileSkill from "./ProfileSkill";
import ProfileGithub from "./ProfileGithub";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
    bio,
    skills,
    experience,
    education,
    githubUsername
  },
}) => {
  const [menu, setMenu] = useState("skill");
  const viewMenu = (value) => {
    if (value === "experience") {
      let result = experience.map((e) => {
        return {
          e,
        };
      });
      return result;
    } else if (value === "education") {
      return education;
    } else {
      return skills;
    }
  };

  const handleMenu = (e) => {
    setMenu(e);
  };
  return (
    <div className="ml-20 mr-5 flex">
      <div>
        <img src={avatar} className="rounded-md"></img>
        <h1>{name}</h1>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="text-sm">{bio}</p>
        <ul>
          <li
            className="border-b-2 py-2 hover:bg-slate-100"
            onClick={() => handleMenu("skill")}
          >
            Skill
          </li>
          <li
            className="border-b-2 py-2 hover:bg-slate-100"
            onClick={() => handleMenu("experience")}
          >
            Experience
          </li>
          <li
            className="border-b-2 py-2 hover:bg-slate-100"
            onClick={() => handleMenu("education")}
          >
            Education
          </li>
          <li
            className="border-b-2 py-2 hover:bg-slate-100"
            onClick={() => handleMenu("githubRepos")}
          >
            Github Repository
          </li>
        </ul>
      </div>
      <div>
        <div className="icon w-96 px-4 flex bg-gray-200 justify-between">
          <h1 className="my-auto">About</h1>
          <div className="flex">
            {website && (
              <a href={website} target="_blank" rel="noopener noreferrer">
                <img src={iconGlobe} className="w-16"></img>
              </a>
            )}
            {social && social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconTwitter} className="w-16" />
              </a>
            )}
            {social && social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconFacebook} className="w-16" />
              </a>
            )}
            {social && social.youtube && (
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={iconYoutube} className="w-16" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-5">
          {menu === 'skill' ? (<ProfileSkill skills={skills}/>) : (<div></div>)}
          {menu === 'experience' ? (<ProfileExperience experience={experience}/>) : (<div></div>)}
          {menu === 'education' ? (<ProfileEducation education={education}/>) : (<div></div>)}
          {menu === 'githubRepos' ? (<ProfileGithub username={githubUsername}/>) : (<div></div>)}
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
