import { getIndividualsDB } from '../js/firebase'
import actionType from '../constants'

export const loadIndividuals = () => {
    return dispatch => {
        dispatch({
            type: actionType.LOAD_INDIVIDUALS_REQUEST
        })
        getIndividualsDB()
            .then(individuals => {
                dispatch({
                    type: actionType.LOAD_INDIVIDUALS_SUCCESS,
                    payload: individuals.val()
                })
            })
            .catch(error => {
                dispatch({
                    type: actionType.LOAD_INDIVIDUALS_FAILED,
                    payload: error
                })
            })
    }
}