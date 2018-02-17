import * as firebase from 'firebase'
import firebase_config from './firebase_config.json'

import individualModel from './models/individual'

let database

export const init = () => {
    let config = firebase_config

    firebase.initializeApp(config)
    database = firebase.database()

}

// retrieving specific individual database from firebase
export const getIndividualsDB = () => {
    return database.ref('/').once('value')
}

// add a new individual to the firease database