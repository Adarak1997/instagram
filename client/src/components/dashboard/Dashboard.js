import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import jwtDecode from "jwt-decode";
import axios from "axios";
class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("jwtToken");
        const data = jwtDecode(token);
        console.log(data.id);

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        axios.get("http://localhost:3001/api/users", config).then(response => {
            console.log(response.data);
            this.setState({users: response.data.data});
        })

        axios.get("http://localhost:3001/api/user/" + data.id, config).then(response => {
            console.log(response.data.id);
        })
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (
            <section>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Prénom et nom de l'utilisateur</th>
                        <th scope="col">Email</th>
                        <th scope="col">Nombre de followers</th>
                        <th scope="col">Nombre de following</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((item, key) => (
                        <tr key={key}>
                            <td>{item.firstname} {item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.followers.length}</td>
                            <td>{item.following.length}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
