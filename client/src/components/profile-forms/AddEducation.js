import React, { useState } from "react";
import PropTypes from "prop-types";
import Sidebar from "../layout/Sidebar";
import { addEducation } from "../../actions/profile";
import { connect } from "react-redux";

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { school, degree, fieldOfStudy, from, to, current, description } =
    formData;

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  const [toDateDisabled, toggleDisabled] = useState(false);

  return (
    <div>
      <Sidebar />
      <h1 className="text-2xl text-center">Add Education</h1>
      <div className="justify-center md:flex m-5">
        <form onSubmit={onSubmit} autoComplete='off'>
          <div className="lg:w-1/3 left mr-5 md:w-1/2">
            <div className="py-2">
              <label htmlFor="school">School: </label>
              <input
                type="text"
                className="input"
                name="school"
                id="school"
                value={school}
                onChange={handleInputChange}
                placeholder="School"
              />
            </div>
            <div className="py-2">
              <label htmlFor="degree">Degree: </label>
              <input
                type="text"
                className="input"
                name="degree"
                id="degree"
                value={degree}
                onChange={handleInputChange}
                placeholder="Degree"
              />
            </div>
            <div className="py-2">
              <label htmlFor="fieldOfStudy">Field Of Study: </label>
              <input
                type="text"
                className="input"
                name="fieldOfStudy"
                id="fieldOfStudy"
                value={fieldOfStudy}
                onChange={handleInputChange}
                placeholder="Field Of Study"
              />
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2">
            <div className="py-2">
              <label htmlFor="from">From Date: </label>
              <br></br>
              <input
                type="date"
                className="border border-solid rounded-lg text-sm p-2 w-1/3"
                name="from"
                id="from"
                value={from}
                onChange={handleInputChange}
              />
              <input
                type="checkbox"
                className="ml-5"
                name="current"
                id="current"
                value={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />{" "}
              Current Education
            </div>
            <div className="py-2">
              <label htmlFor="to">To Date: </label>
              <input
                type="date"
                disabled={toDateDisabled ? "disabled" : ""}
                className={
                  toDateDisabled ? "input bg-slate-500 text-slate-200" : "input"
                }
                name="to"
                id="to"
                value={to}
                onChange={handleInputChange}
              />
            </div>
            <div className="py-2">
              <label htmlFor="description">Description: </label>
              <textarea
                placeholder="Description"
                className="input"
                name="description"
                id="description"
                value={description}
                onChange={handleInputChange}
              />
            </div>
            <button type='submit' className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect (null, {addEducation})(AddEducation);
