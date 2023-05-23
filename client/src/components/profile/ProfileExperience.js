import React from "react";
import PropTypes from "prop-types";

const ProfileExperience = ({experience}) => {
  return (
    <div>
          {experience.map((e) => {
            return (
              <div>
                <div className="flex justify-between">
                  <h1 className="text-lg">{e.title}</h1>
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
                <p>{e.company}</p>
                <p>{e.description}</p>
              </div>
            )
          })}
    </div>
  );
};

ProfileExperience.propTypes = {};

export default ProfileExperience;
