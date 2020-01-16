import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearselectedNews} from '../actions';
import PropTypes from 'prop-types';

class NewsDetails extends Component {
    componentDidMount(){
        this.props.dispatch(selectedNews(this.props.match.params.id))
    }

    renderDetails = ({selected}) => {
        if(selected){
            return selected.map((data) => {
                return(
                    <div key={data.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye"></i>
                                {data.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up"></i>
                                {data.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down"></i>
                                {data.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{data.title}</h2>
                            <span>Article By:{data.author}

                            </span>
                              
                            <img src={`/images/articles/${data.img}`}/>
                            <div className="body_news">
                                {data.body}
                            </div>
                        </div>
                       
                        </div>
                )
            })
        }
    }

    render(){
        return(
            <div className="news_container">
                {this.renderDetails(this.props.articleDetails)}
            </div>
        )
    }

    componentWillUnmount(){
        this.props.dispatch(clearselectedNews())
    }
}


function mapStateToProps(state){
    console.log(state)
    return{
        articleDetails : state.articles
    }
}

NewsDetails.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(NewsDetails)