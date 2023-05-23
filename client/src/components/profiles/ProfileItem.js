import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills
    } 
}) => {
  return (
    <div className='my-2 p-4 rounded-md bg-slate-200 md:w-1/2 mx-auto'>
      <div className='flex'>
          <img src={avatar} className="self-center rounded-full flex h-full w-28"></img>
          <div className='mx-2'>
            <h2 className='text-xl'><b>{name}</b></h2>
            <p>
                {status} {company && <span> at {company}</span>}
            </p>
            <p>{location && <span>{location}</span>}</p>
            <ul className='pb-2'>
              {skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="">
                  <i>- {skill}</i>
                </li>
              ))}
            </ul>
            <Link to={`/profile/${_id}`} className="btn-primary">View Profile</Link>
          </div>
      </div>
    </div>
  )
}

ProfileItem.propTypes = {}

export default ProfileItem