import React from 'react'
import _ from 'lodash'

export default (props) => {
    return (
        <ul>
            {
                _.map(props.individuals, (individual) => <li>{individual.name}</li>)
            }
        </ul>
    )
}