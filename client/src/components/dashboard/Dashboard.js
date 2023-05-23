import React from 'react';
import Sidebar from '../layout/Sidebar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { useEffect } from 'react';
import personal_data from '../../asset/personal_data.png'
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardAction';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ 
  getCurrentProfile, 
  auth: { user }, 
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    loading === true ? <Spinner/> : 
    <div className=''>
      <Sidebar/>
        <p className='text-center'>Welcome { user && user.name } </p>
      { profile !== null ? (
        <div>
          <DashboardActions/>
          <Experience experience={profile.experience}/>
          <Education education={profile.education}/>
        </div>
      ) : 
        (
          <div className='m-2 pt-10'>
            <img src={personal_data} className="w-1/2 mx-auto"></img>
            <h1 className='text-xl mx-auto'>Anda belum memiliki profile</h1>
            <Link to='/create-profile' className=' px-3 py-2 bg-primary text-light rounded-lg'>Buat Profile</Link>
          </div>

        )        
      }

    </div>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})


export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)