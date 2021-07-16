import React, { Component } from "react";
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../actions/authActions"
import PropTypes from "prop-types";
import { connect } from "react-redux";


import {addPost} from "../../actions/authActions";


class Navbar extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper">
                        <p>FAKEINSTA</p>
                        <Link to="/dashboard" className="nav-link">
                            Dashboard
                        </Link>
                        <Link to="/dashboard" className="nav-link">
                            Fil d'actualité
                        </Link>
                        <Link to="/addPost" className="nav-link">
                            Ajouter un post
                        </Link>
                        <div className="deconnexion">
                            <button
                                onClick={this.onLogoutClick}

                            >
                                Déconnexion
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);
