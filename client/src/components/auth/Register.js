import { useState } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setAlert } from "../../actions/alert"
import PropTypes from 'prop-types'
import { register } from "../../actions/auth"
import Sidebar from "../layout/Sidebar"

const Register = ({ setAlert, register }) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        // if (password !== password2) {
        //     setAlert('Password do not match', 'danger');
        // } else {
            register({ name, email, password });
        // }
    }

    return (
        <div className="bg-[#19B4D8] h-screen">
        {/* <!-- Register --> */}
        <div
            className="w-full bg-[#2451D1] pt-12 flex justify-center items-center"
        >
            <div className="w-[370px] h-[400px] p-5 flex flex-col gap-y-3">
            <h1 className="text-xl font-bold text-white">
                Get more things done with loggin platform
            </h1>
            <p className="text-sm text-white">Acces to the most powerfull</p>
            <form onSubmit={e => onSubmit(e)}>
                <h1 className="font-bold text-white">Register</h1>
                <div className="flex flex-col gap-y-2 mt-2">
                    <label htmlFor="name" className="text-white">Nama</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="masukkan nama"
                        className="py-3 w-full outline-none border px-2 text-sm rounded-lg"
                        onChange={e => onChange(e)}
                        value={name}
                    />
                </div>
                <div className="flex flex-col gap-y-2 mt-2">
                    <label htmlFor="email" className="text-white">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="masukkan email"
                        className="py-3 w-full outline-none border px-2 text-sm rounded-lg"
                        onChange={e => onChange(e)}
                        value={email}
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="password" className="text-white">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="Password"
                        placeholder="masukkan Password"
                        className="py-3 w-full outline-none border px-2 text-sm rounded-lg"
                        onChange={e => onChange(e)}
                        value={password}
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="password2" className="text-white">Confirm Password</label>
                    <input
                        id="password2"
                        name="password2"
                        type="Password"
                        placeholder="Confirm Password"
                        className="py-3 w-full outline-none border px-2 text-sm rounded-lg"
                        onChange={e => onChange(e)}
                        value={password2}
                   />
                </div>
                <div className="mt-4 flex gap-x-2 items-center">
                <button
                    type="submit"
                    className="py-2 px-6 font-bold text-sm bg-white text-[#2A76FF] rounded-sm"
                >
                    Register
                </button>
                <p className="text-sm text-white">Forget Password?</p>
                </div>
                <div className="flex mt-4 gap-x-4 text-sm text-white">
                <Link to={'/login'} className="text-gray-400">Or Login</Link>
                <h1>Facebook</h1>
                <h1>Google</h1>
                <h1>Linkin</h1>
                </div>
            </form>
            </div>
        </div>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}
export default connect(null, { setAlert,register })(Register);