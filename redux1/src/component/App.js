import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'

class App extends Component{

    componentDidMount(){
        this.props.MoviesList()
    }

    render(){
        return(
            <div>
                <h1> Redux App</h1>
            </div>
        )
    }
    
}


function mapStateToProps(state){
    console.log(state)
    return{
        data:state.movies
    }
}


export default connect(mapStateToProps,actions)(App)