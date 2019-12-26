import React, {Component} from 'react';
import Header from './Header';
import NewsList from './NewsList';
import JSON from '../db.json'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            news:JSON
        }
    }
    render(){
        return(
            <div>
                <Header userText={(userInput)=>{console.log(`In home ${userInput}`)}}/>
                <NewsList newsDB={this.state.news}/>
            </div>
        )
    }
}

export default Home;