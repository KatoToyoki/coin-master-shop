import React, { useEffect, useState } from 'react';

import { database } from './firebase'
import { ref, push, child, update, query, getDatabase, limitToLast, onValue } from "firebase/database";
export default class SetCoin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            posts: [],

            back_image: '',
            category: '',
            front_image: '',
            grade: '',
            item_id: '',
            like: '',
            link: '',
            name: '',
            price: '',
            size: '',
            sold: '',
            weight: '',
            year: '',
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        let tmp = {}
        tmp[name] = value;


        this.setState(tmp);
        console.log(this.state)
    }

    handleSubmit = (e) => {
        let obj = this.state;       // Create a unique key for new posts
        const newPostKey = push(child(ref(database), 'items')).key;
        const updates = {};
        updates['/items/' + newPostKey] = obj;
        update(ref(database), updates);

        /* TODO: call the method to get the posts */

        e.preventDefault()
        //  this.componentDidMount()
    };

    render() {
        const listPosts = this.state.posts.map(
            (i) => <li>{i}</li>
        )
        /* TODO: convert this.state.posts into a list of <ListItem>. Remember to set the key and the post props */
        return (
            <div>
                <h2>Submit your post!</h2>
                <form onSubmit={this.handleSubmit}>
                    back_image<input name="back_image" onChange={this.handleChange} />
                    <br></br>
                    category<input name="category" onChange={this.handleChange} />
                    <br></br>
                    front_image"<input name="front_image" onChange={this.handleChange} />
                    <br></br>
                    grade<input name="grade" onChange={this.handleChange} />
                    <br></br>
                    item_id<input name="item_id" onChange={this.handleChange} />
                    <br></br>
                    like<input name="like" onChange={this.handleChange} />
                    <br></br>
                    link<input name="link" onChange={this.handleChange} />
                    <br></br>
                    name<input name="name" onChange={this.handleChange} />
                    <br></br>
                    price<input name="price" onChange={this.handleChange} />
                    <br></br>
                    size<input name="size" onChange={this.handleChange} />
                    <br></br>
                    sold<input name="sold" onChange={this.handleChange} />
                    <br></br>
                    weight<input name="weight" onChange={this.handleChange} />
                    <br></br>
                    year<input name="year" onChange={this.handleChange} />
                    <input type="submit" value="coin" />
                </form>
            </div>
        );
    }
}
