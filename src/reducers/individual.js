import _ from 'lodash'
import actionType from "../constants";

let initialState = {
    individuals: [{
        "id": 0,
        "name": "Individual Zero"
    }]
}

export default (state = initialState, action) => {
    let newState = _.merge({}, state)
    switch(action.type){
        case actionType.LOAD_INDIVIDUALS_SUCCESS:
            newState.individuals = action.payload
            return newState
        default:
            return state
    }
}