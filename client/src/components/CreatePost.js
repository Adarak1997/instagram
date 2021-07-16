import React, {useState, useEffect, Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from "axios";
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addPost} from "../actions/authActions";
import jwtDecode from "jwt-decode";
import Navbar from "./layout/Navbar";


const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [fileName, setFileName] = useState("");


    const token = localStorage.getItem("jwtToken");
    const data = jwtDecode(token);


    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    }

    const changeOnClick = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", content);
        formData.append("file", fileName);
        formData.append("postedBy", data.firstname + ' ' + data.name);


        setTitle("");
        setContent("");

        axios.post("http://localhost:3001/api/post", formData).then((res) => {
            console.log(res);

        })
    }


    return(
        <section>
            <Navbar></Navbar>
            <div className="container addPost">
                <h1>Créer votre post</h1>
                <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Titre</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>File</label>
                        <input type="file" name="file" onChange={onChangeFile} />
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>

        </section>
    )
}

export default CreatePost;

