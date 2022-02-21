// Largely created from KC: rafcp
import React from 'react'
// import PropTypes from 'prop-types'

const UserItem = props => {
    const {login, node_id } = props.user;
    return (
        <div>{login} | {node_id}</div>
    )
}

// Set types
// UserItem.propTypes = {login:PropTypes.string.isRequired /* KC: ptsr */}

// Export
export default UserItem 

