import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Navbar from "./layout/Navbar";
class ViewPost extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("jwtToken");
        const data = jwtDecode(token);

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        axios.get("http://localhost:3001/api/posts", config).then(response => {
            console.log(response.data);
            this.setState({posts: response.data.data});
        })

    }

    render() {

        return (
            <section>
                <Navbar />
                {this.state.posts.map((item, key) => (

                    <div className="row col-6 card shadow mx-auto my-5 py-2">

                            <div className="card-body">
                                <h2 className="card-title text-center">{item.title}</h2>
                                <p className="card-text">
                                    {item.content}</p>
                                <img src={process.env.PUBLIC_URL + '/uploads/'+ item.file}/>

                            </div>
                        <div className="card-footer text-muted border-0 bg-white text-end">
                            Posté par {item.postedBy}
                            </div>

    </div>
                    ))}
            </section>
    );
    }
}

export default ViewPost;
