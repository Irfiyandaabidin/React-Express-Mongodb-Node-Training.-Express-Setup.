import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
    return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
        <div key={alert.id} className={`container lg:w-1/4 mx-auto bg-${alert.alertType} border border-${alert.alertType} text-slate-200 px-4 py-3 rounded relative`} role="alert">
        <strong className="font-bold">{alert.msg}</strong>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        </span>
        </div>
    ))
    )
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);