import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteEducation } from '../../actions/profile'
import { connect } from 'react-redux'

const Education = ({education, deleteEducation }) => {
  const educations = education.map(edu => {
    return (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td className='px-4'>
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {edu.to === null ? 'Now' : 
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>}
        </td>
        <td>
          <button className='btn-danger' onClick={() => deleteEducation(edu._id)}>
          Delete
          </button>
        </td>
      </tr>
    )
  })
  return (
    <>
    <h1 className='text-center mt-5 text-xl'>Education</h1>
    <table className='text-center mx-auto'>
      <thead>
        <tr>
          <th className='px-5'>School</th>
          <th className='px-2'>Degree</th>
          <th>Years</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{educations}</tbody>
    </table>
    </>
  )
}

Education.propTypes = {
  education : PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
}

export default connect (null, {deleteEducation})(Education)