import React, { Component } from 'react';
import BlogPostService from '../services/BlogPost-service'


export default class RandomPost extends Component {

    state = {
        userId: null,
        id: null,
        title: null,
        body: null
    }


    componentDidMount() {
        this.updateRandomPost();
    }


    updateRandomPost = () => {
        const blogPostService = new BlogPostService();
        const randomId = Math.round(Math.random() * (100 - 1) + 1);
        blogPostService.getPost(randomId).then(data => this.setState({
            userId: data.userId,
            id: randomId,
            title: data.title,
            body: data.body
        }))
    }


    render() {
        const { userId, id, title, body } = this.state;

        return (
            <div>
                <br />
                <br />
                <div>
                    <ul>
                        <li><span>author<br/>{userId}</span></li>
                        <li><span>post id<br/>{id}</span></li>
                        <li><span>title<br/>{title}</span></li>
                        <li><span>post body<br/>{body}</span></li>
                    </ul>
                </div>
                <br />
                <br />
            </div>
        )
    }
    //   swapiService = new SwapiService();


    //   constructor() {
    //     super();
    //     this.updatePlanet();
    //   }



    //   updateRandomPost() {
    //     const id = Math.floor((Math.random() * 10) + 2);
    //     this.blogPostService
    //       .getPlanet(id)
    //       .then((planet) => {
    //         console.log(planet);
    //         this.setState({
    //           id: id,
    //           name: planet.name,
    //           population: planet.population,
    //           rotationPeriod: planet.rotation_period,
    //           diameter: planet.diameter
    //         })
    //       })
    //   }

    //   //https://starwars-visualguide.com/assets/img/planets/8.jpg



    //   render() {

    //     const { id, name, population, rotationPeriod, diameter } = this.state;

    //     return (

    //       <div className="random-planet jumbotron rounded">
    //         <img className="planet-image"
    //           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` }/>
    //         <div>
    //           <h4>{name}</h4>
    //           <ul className="list-group list-group-flush">
    //             <li className="list-group-item">
    //               <span className="term">Population</span>
    //               <span>{population}</span>
    //             </li>
    //             <li className="list-group-item">
    //               <span className="term">Rotation Period</span>
    //               <span>{rotationPeriod}</span>
    //             </li>
    //             <li className="list-group-item">
    //               <span className="term">Diameter</span>
    //               <span>{diameter}</span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //     );
    //   }
}
