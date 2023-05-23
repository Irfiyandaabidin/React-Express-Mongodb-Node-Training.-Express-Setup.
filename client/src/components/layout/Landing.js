import React from 'react';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const Landing = (isAuthenticated) => {
  if(isAuthenticated) {
    return <Navigate to='/dashboard'></Navigate>
  }
  return (
    <div>
        <h1 className='text-8xl text-red-500'>Landing</h1>
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)