import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";

const Sidebar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="absolute">
        <div className="pr-5 relative">
            <div className={`absolute top-0 ${isSidebarOpen && 'right-0'}`} onClick={toggleSidebar}>{isSidebarOpen || <span className="cursor-pointer">Sidebar</span>}</div>
            <div className={`fixed px-8 top-0 bottom-0 lg:left-0 ${isSidebarOpen || 'left-[-300px]'} bg-gradient-to-b from-cyan-500 to-blue-500 shadow duration-1000 p-2 w-[-300px] overflow-y-auto text-center h-screen`}>
                <div className="space-y-3">
                <div className="flex items-center">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="rounded-sm pt-1">
                        <Link to='#'
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <span>Home</span>
                        </Link>
                    </li>
                    <li className="rounded-sm pt-1">
                        <Link to='/profiles'
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                        </svg>
                        <span>Member</span>
                        </Link>
                    </li>
                    <li className="rounded-sm pt-1">
                        <Link to='/posts'
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                        >
                            <span>
                                Posts
                            </span>
                        </Link>
                    </li>
                    <li className="rounded-sm pt-1">
                        <Link to='#'
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span>Register</span>
                        </Link>
                    </li>
                        <li
                        className="rounded-sm pt-1"
                        onClick={logout}
                        >
                        <Link to="#"
                        className="flex items-center p-2 space-x-3 rounded-md"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                            />
                        </svg>
                        <span>Logout</span>
                        </Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
       <div className={isSidebarOpen && "rounded-full px-2 py-1 ml-44 cursor-pointer bg-primary text-light"} onClick={toggleSidebar}>{isSidebarOpen && 'X'}</div>
    </div>
  );
};

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Sidebar);
