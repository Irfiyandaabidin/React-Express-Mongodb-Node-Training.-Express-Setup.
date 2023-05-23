import React from "react";
import PropTypes from "prop-types";

const ProfileEducation = ({education}) => {
  return (
    <div>
      <div>
        {education.map((e) => {
          return (
            <div>
              <div className="flex justify-between">
                <h1 className="text-lg">{e.degree}</h1>
                {e.current !== true ? (
                  <div className="flex">
                    <p className="text-sm my-auto">{e.from}</p>-<p>{e.to}</p>
                  </div>
                ) : (
                  <div className="flex">
                    <p className="text-sm my-auto">{e.from}</p>-<p>current</p>
                  </div>
                )}
              </div>
              <p>{e.school}</p>
              <p>{e.fielOfStudy}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ProfileEducation.propTypes = {};

export default ProfileEducation;
