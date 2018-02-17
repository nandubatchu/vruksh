import React, { Component } from 'react'
import IndividualList from './individual-list'
import {connect} from 'react-redux'
import {loadIndividuals} from '../../actions/individual'

class Vruksh extends Component {
    componentDidMount() {
        this.props.loadIndividuals()
    }

    render() {
        return (
        <div>
            <IndividualList individuals={this.props.individuals}/>
        </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
    individuals: state.individual.individuals
  }
}
export default connect(mapStateToProps, {loadIndividuals})(Vruksh)