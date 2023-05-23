import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getProfiles } from '../../actions/profile'
import Spinner from '../layout/Spinner'
import ProfileItem from './ProfileItem'
import { connect } from 'react-redux'

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles])
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className='text-2xl'> Member </h1>
          <p>
            Browse and connect with member.
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </div>
      )}
    </>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect (mapStateToProps, { getProfiles })(Profiles);