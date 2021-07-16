import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper">
                        {/*<Link*/}
                        {/*    to="/"*/}
                        {/*    style={{*/}
                        {/*        fontFamily: "monospace"*/}
                        {/*    }}*/}
                        {/*    className="col s5 brand-logo center black-text"*/}
                        {/*>*/}
                        {/*    <i className="material-icons">code</i>*/}
                        {/*    MERN*/}
                        {/*</Link>*/}
                        <p>FAKEINSTA</p>
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
export default Navbar;
