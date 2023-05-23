import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProfileTop from './ProfileTop';

const Profile = ({
    getProfileById,
    profile: { profile, loading},
    auth,
    match
}) => {
    let { id } = useParams()
    useEffect(() => {
        getProfileById(id);
    }, [getProfileById, id]);

  return (
    <div>
        { profile === null || loading ? (<Spinner/>) : (
            <div>
                <Link to='/profiles'>Back To Profiles</Link>
                <ProfileTop profile={profile[0]}/>
            </div>
        )}
    </div>
  )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfileById})(Profile)