import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import icon_sosmed from '../../asset/icon_sosmed.png'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const { email, password } = formData;
  
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  if(isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div className="flex relative">
    {/* <!-- login --> */}
    <div
        className="w-full h-screen bg-[#2A76FF] flex justify-center lg:pt-12"
    >
        <div className="w-[370px] h-[400px] p-5 flex flex-col gap-y-3">
        <h1 className="text-xl font-bold text-white">
            Get more things done with loggin platform
        </h1>
        <p className="text-sm text-white">Acces to the most powerfull</p>
        <form onSubmit={e => onSubmit(e)}>
            <h1 className="font-bold text-white">Login</h1>
            <div className="flex flex-col gap-y-2 mt-2">
            <label htmlFor="email" className="text-white">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="masukkan email"
                className="input"
                onChange={e => onChange(e)}
                value={email}
            />
            </div>
            <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="Password" className="text-white">Password</label>
            <input
                id="password"
                name="password"
                type="Password"
                placeholder="masukkan Password"
                className="input"
                onChange={e => onChange(e)}
                value={password}
            />
            </div>
            <div className="mt-4 flex gap-x-2 items-center">
            <button
                type="submit"
                className="py-2 px-6 font-bold text-sm bg-white text-[#2A76FF] rounded-sm"
            >
                Login
            </button>
            <p className="text-sm text-white">Forget Password?</p>
            </div>
            <div className="flex mt-4 gap-x-4 text-sm text-white">
            <Link to={'/register'} className="text-gray-400">Or Register</Link>
            <h1>Facebook</h1>
            <h1>Google</h1>
            <h1>Linkin</h1>
            </div>
        </form>
        <img src={icon_sosmed} className="lg:absolute bottom-0 right-0"></img>
        </div>
    </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect (mapStateToProps, { login })(Login);
