import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import {PropTypes} from 'prop-types'
import { createProfile } from '../../actions/profile'
import { Link, withRouter } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
    profile: { profile, loading },
    createProfile, 
    getCurrentProfile,
    history
}) => {
  const [displaySocialInputs, toogleSocialInput] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubUsername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(prevState => ({...prevState, [name]: value}))
  }
  // Destructuring
  const {
    company,
    website,
    location,
    status,
    skills,
    githubUsername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;
  console.log(company)

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  }

  useEffect(() => {
    getCurrentProfile();

    setFormData({
        company: loading || !profile.company ? '' : profile.company,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        status: loading || !profile.status ? '' : profile.status,
        skills: loading || !profile.skills ? '' : profile.skills.join(','),
        githubUsername: loading || !profile.githubUsername ? '' : profile.githubUsername,
        bio: loading || !profile.bio ? '' : profile.bio,
        twitter: loading || !profile.social ? '' : profile.social.twitter,
        facebook: loading || !profile.social ? '' : profile.social.facebook,
        linkedin: loading || !profile.social ? '' : profile.social.linkedin,
        youtube: loading || !profile.social ? '' : profile.social.youtube,
        instagram: loading || !profile.social ? '' : profile.social.instagram,

    })
  }, [loading])
  return (
    <>
      <Sidebar />
      <div className="text-center mx-10">
        <h1 className="text-2xl">Create Profile</h1>
        <div className="">
          <form onSubmit={e => onSubmit(e)} className="text-left justify-center lg:flex">
            <div className="left lg:w-1/3">
              <div>
                <select name="status" value={status} onChange={handleInputChange}>
                  <option value="0"> Select Professional Status</option>
                  <option value="Developer"> Developer </option>
                  <option value="Junior Developer"> Junior Developer </option>
                  <option value="Senior Developer"> Senior Developer </option>
                  <option value="Project Manager"> Project Manager </option>
                  <option value="Student"> Student </option>
                  <option value="Instructor"> Instructor </option>
                  <option value="Business Owner">
                    {" "}
                    Business Owner/Start up{" "}
                  </option>
                  <option value="Other"> Other </option>
                </select>
              </div>
              <div className="py-2">
                <label htmlFor="company">Company : </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Company"
                  name="company"
                  id="company"
                  value={company}
                  onChange={handleInputChange}
                ></input>
                <small>Could be your own company or one you work for</small>
              </div>
              <div className="py-2">
                <label htmlFor="website">Website : </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Website"
                  name="website"
                  id="website"
                  value={website}
                  onChange={handleInputChange}
                ></input>
                <small>Could be your own website or one you work for</small>
              </div>
              <div className="py-2">
                <label htmlFor="location">Location : </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Location"
                  name="location"
                  id="location"
                  value={location}
                  onChange={handleInputChange}
                ></input>
                <small>City & state suggested (eg. Boston, MA)</small>
              </div>
              <div className="py-2">
                <label htmlFor="skills">Skills : </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Skills"
                  name="skills"
                  id="skills"
                  value={skills}
                  onChange={handleInputChange}
                ></input>
                <small>
                  Please use comma separated values(eg.HTML,CSS,JavaScript,PHP)
                </small>
              </div>
              <div className="py-2">
                <label htmlFor="githubUsername">Github Username : </label>
                <input
                  className="input"
                  type="text"
                  placeholder="Github Username"
                  name="githubUsername"
                  id="githubUsername"
                  value={githubUsername}
                  onChange={handleInputChange}
                ></input>
                <small>
                  If you want your latest repos and aGithub link, include your
                  username
                </small>
              </div>
            </div>
            <div className="right lg:w-1/3 lg:ml-10">
              <div className="py-2">
                <label htmlFor="bio">Bio : </label>
                <textarea
                  className="input"
                  type="text"
                  placeholder="A short bio of yourself"
                  name="bio"
                  id="bio"
                  value={bio}
                  onChange={handleInputChange}
                ></textarea>
                <small>Tell us a littel about yourself</small>
              </div>
              <div className="py-2">
                <button
                  type="button"
                  className="py-2 px-6 font-bold text-sm bg-white text-primary rounded-sm border-2 border-primary"
                  onClick={() => toogleSocialInput(!displaySocialInputs)}
                >
                  {displaySocialInputs ? 'Remove Social Network Links' : 'Add Social Network Links'
                  }
                </button>
                {displaySocialInputs && 
                  <div className="">
                    <div className="py-2 flex">
                      <label
                        htmlFor="twitter"
                        className="flex w-1/6 py-3 px-2 bg-primary text-light rounded-tl-lg rounded-bl-lg border-2"
                      >
                        Twitter
                      </label>
                      <input
                        className="input"
                        type="text"
                        placeholder="Twitter Link"
                        name="twitter"
                        id="twitter"
                        value={twitter}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className="py-2 flex">
                      <label
                        htmlFor="facebook"
                        className="flex w-1/6 py-3 px-2 bg-sky-700 text-light rounded-tl-lg rounded-bl-lg border-2"
                      >
                        Facebook
                      </label>
                      <input
                        className="input"
                        type="text"
                        placeholder="Facebook Link"
                        name="facebook"
                        id="facebook"
                        value={facebook}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className="py-2 flex">
                      <label
                        htmlFor="Instagram"
                        className="flex w-1/6 py-3 px-2 bg-[#9556B9] text-light rounded-tl-lg rounded-bl-lg border-2"
                      >
                        Instagram
                      </label>
                      <input
                        className="input"
                        type="text"
                        placeholder="Instagram Link"
                        name="instagram"
                        id="instagram"
                        value={instagram}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className="py-2 flex">
                      <label
                        htmlFor="linkedin"
                        className="flex w-1/6 py-3 px-2 bg-primary text-light rounded-tl-lg rounded-bl-lg border-2"
                      >
                        Linkedin
                      </label>
                      <input
                        className="input"
                        type="text"
                        placeholder="Linkedin Link"
                        name="linkedin"
                        id="linkedin"
                        value={linkedin}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                    <div className="py-2 flex">
                      <label
                        htmlFor="youtube"
                        className="flex w-1/6 py-3 px-2 bg-red-600 text-light rounded-tl-lg rounded-bl-lg border-2"
                      >
                        Youtube
                      </label>
                      <input
                        className="input"
                        type="text"
                        placeholder="Youtube Link"
                        name="youtube"
                        id="youtube"
                        value={youtube}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                  </div>
                }
                <hr className="mt-2"></hr>
                <button type="submit" className="btn-primary">
                  Submit
                </button>
                <Link className="px-3 py-2 mx-auto border-primary border-2 rounded-md text-primary my-5" to="/dashboard">Go Back</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired, // snippet ptfr
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(EditProfile);
