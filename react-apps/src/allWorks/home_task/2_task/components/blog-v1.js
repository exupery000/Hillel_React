import React, { Component } from 'react';
import RandomPost from './random-post';
import AllPosts from './all-posts'



export default class BlogV1 extends Component {




    render() {
        return (
            <div>
                <RandomPost />
                <AllPosts />
            </div>
        )
    }

    //   constructor() {
    //     super();
    //     this.updatePlanet();
    //   }
}
