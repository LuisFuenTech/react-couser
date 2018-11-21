import React from 'react'
import PropTypes from 'prop-types'

const Location = ({city}) => {
    return (
        <div>
            <h1>{city}</h1>
        </div>
    )
}

Location.protoType = {
    city: PropTypes.string
}

export default Location;