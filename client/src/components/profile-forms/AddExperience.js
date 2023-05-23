import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import { Link } from "react-router-dom";
import Sidebar from "../layout/Sidebar";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    to: "",
    current: false,
    description: "",
    from: ""
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, to, current, description, from } = formData;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <div>
      <Sidebar />
      <div className="text-center mx-10">
        <h1 className="text-2xl">Add Experience</h1>
        <div className="">
          <form
            autoComplete="off"
            onSubmit={onSubmit}
            className="text-left justify-center lg:flex"
          >
            <div className="left lg:w-1/3">
              <div className="py-2">
                <label htmlFor="title">Title : </label>
                <input
                  className="input"
                  type="text"
                  placeholder="* Job Title"
                  name="title"
                  id="title"
                  value={title}
                  onChange={handleInputChange}
                  required
                ></input>
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
              </div>
              <div className="py-2">
                <label htmlFor="from">From Date : </label>
                <input
                  className="input"
                  type="date"
                  placeholder="from"
                  name="from"
                  id="from"
                  value={from}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className="py-2">
                <p>
                    <input
                    className=""
                    type="checkbox"
                    name="current"
                    checked={current}
                    value={current}
                    onChange={(e) => {
                        setFormData({ ...formData, current: !current });
                        toggleDisabled(!toDateDisabled);
                    }}
                    />
                    {" "}
                    Current Job
                </p>
              </div>
            </div>
            <div className="py-2">
              <label htmlFor="to">To Date : </label>
              <input
                className="input"
                type="date"
                name="to"
                id="to"
                value={to}
                onChange={handleInputChange}
                disabled={toDateDisabled ? "disabled" : ""}
              ></input>
            </div>
            <div className="py-2">
                <label htmlFor="description"> Job Description</label>
                <textarea 
                    name="description"
                    id="description"
                    value={description}
                    className='input'
                    onChange={handleInputChange}
                    placeholder="Job Description"
                />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
