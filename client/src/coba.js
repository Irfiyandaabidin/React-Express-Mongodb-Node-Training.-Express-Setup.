import React from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { cobaAction } from './actions/coba'
import { connect } from 'react-redux'

const CobaRedux = ({cobaAction, coba: { profile }}) => {
    useEffect(() => {
        cobaAction();
      }, [])
    return (
    <div></div>
  )
}

CobaRedux.propTypes = {
    coba: PropTypes.object.isRequired,
    cobaAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    coba: state.coba
})

export default connect (mapStateToProps, { cobaAction })(CobaRedux)