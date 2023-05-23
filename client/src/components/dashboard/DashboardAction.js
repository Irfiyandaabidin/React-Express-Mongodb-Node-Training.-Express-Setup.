import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className='flex justify-around bg-primary'>
            
            <div>
                <Link to='/edit-profile' className=''>
                    Edit Profile
                </Link>
            </div>

            <div>
                <Link to='/add-experience' className=''>
                    Add Experience
                </Link>
            </div>

            <div>
                <Link to='/add-education' className=''>
                    Add Education            
                </Link>
            </div>

        </div>
    )
}

export default DashboardActions;