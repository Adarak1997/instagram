import React, {useState, useEffect, Component} from 'react'
import {Link, useHistory, withRouter} from 'react-router-dom'
import axios from "axios";
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addPost} from "../actions/authActions";


class CreatePost extends Component  {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            pic: ""
        }

    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const newPost = {
            title: this.state.title,
            content: this.state.content,
            pic: this.state.pic
        };
        this.props.addPost(newPost, this.props.history);
    };

   render()
            {
    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4>
                            <b>Add post</b> below
                        </h4>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.title}
                                id="title"
                                type="text"
                            />
                            <label htmlFor="name">Title</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea onChange={this.onChange}
                                      value={this.state.content}
                                      id="content"
                                      type="text"></textarea>
                            <label htmlFor="name">content</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.pic}
                                id="pic"
                                type="text"
                            />
                            <label htmlFor="name">Pic</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
}

CreatePost.propTypes = {
    addPost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { addPost }
)(withRouter(CreatePost));

