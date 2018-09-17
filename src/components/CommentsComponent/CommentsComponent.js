import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CommentsComponent extends Component {

    handleInputChange = (event) => {
        // sends value of input field to redux store on change
        let action = {
            type: 'COMMENTS',
            payload: event.target.value
        }
        this.props.dispatch(action);
    } // end handleInputChange

    handleNextClick = (event) => {
        let dataToSend = this.props.reduxState.feedback;
        // sends object in feedback reducer to database
        axios({
            method: 'POST',
            url: '/feedback',
            data: dataToSend
        }).then((response) => {
            console.log('back from server with: ', response);
            // is supposed to change view to success page
            // is not functioning as expected
            this.props.history.push('/5');
        }).catch((error) => {
            console.log('error: ', error);
            alert('there was an error sending the feedback');
        })
    } // end handleNextClick

    render() {
        return (
            <div className="Component">
                <h3>page 4 of 4</h3>
                <div className="Content">
                    <p>Any comments you want to leave?</p>
                    <br /><input className="Comment" onChange={this.handleInputChange} />
                    <button onClick={this.handleNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(CommentsComponent);