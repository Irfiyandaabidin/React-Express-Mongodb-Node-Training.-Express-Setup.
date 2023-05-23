import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile'
import { connect } from 'react-redux'

const Experience = ({experience, deleteExperience}) => {
  const experiences = experience.map(exp => {
    return (
      <tr key={exp._id} className="">
        <td>{exp.company}</td>
        <td className=''>{exp.title}</td>
        <td className='px-3'>
          <Moment format='YYYY/MM/DD'>{exp.form}</Moment> - {' '} {exp.to === null ? ('Now') : (
            <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
          )}
        </td>
        <td>
          <button className='btn-danger' onClick={() => deleteExperience(exp._id)}>Delete</button>
        </td>
      </tr>
    )
  }
  )

  return (
    <>
      <h2 className='text-center text-xl pt-5'>Experience</h2>
      <table className='text-center mx-auto'>
        <thead>
          <tr className=''>
            <th className='px-5'>Company</th>
            <th className='px-5'>Title</th>
            <th>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
}

export default connect (null, { deleteExperience })(Experience)