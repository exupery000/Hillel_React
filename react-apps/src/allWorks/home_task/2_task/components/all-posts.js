import React, { Component } from 'react';
import BlogPostService from '../services/BlogPost-service'


export default class AllPosts extends Component {

    state = {
        posts: []
    }


    componentDidMount() {
        this.updatePosts();
    }


    updatePosts = () => {
        const blogPostService = new BlogPostService();
        blogPostService.getAllPosts()
            .then(data => this.setState({ posts: data }))
    }

    showBody = (id) => {
        
    }


    render() {
        return (
            <div>
                <br />
                <br />
                <div>
                    <ul>
                        {this.state.posts.map(elem =>
                            <div>
                                <li key={elem.id}>
                                    {elem.title}
                                    <button onClick={() => this.showBody(elem.id)} >show</button>
                                </li>
                                

                            </div>

                        )}
                    </ul>
                </div>
                <br />
                <br />
            </div>
        )
    }


    //   constructor() {
    //     super();
    //     this.updatePlanet();
    //   }
}
