export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        console.log(res.ok);
        if (!res.ok) {
            throw new Error(`could not fetch ${url}, received ${res.status}`)
        }

        const body = await res.json();
        return body
    };


    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results
    }

    async getPerson(id) {
        const res = await this.getResource(`/people/${id}`);
        return res
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results
    }

    async getPlanet(id) {
        const res = await this.getResource(`/planets/${id}`);
        return res
    }

    async getAllShips() {
        const res = await this.getResource(`/starships/`);
        return res.results
    }

    async getShip(id) {
        const res = await this.getResource(`/starships/${id}`);
        return res
    }



}

// const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//     people.forEach(elem => console.log(elem.name))
//     console.log('____________');
//     console.log('____________');
// });


// swapi.getPerson(3).then((person) => {
//     console.log(person.name);
//     console.log('____________');
//     console.log('____________');
// });


// swapi.getAllPlanets().then((planets) => {
//     planets.forEach(elem => console.log(elem.name));
//     console.log('____________');
//     console.log('____________');
// });

// swapi.getPlanet(3).then((planet) => {
//     console.log(planet.name);
//     console.log('____________');
//     console.log('____________');
// });

// swapi.getAllShips().then((ships) => {
//     ships.forEach(elem => console.log(elem.name));
//     console.log('____________');
//     console.log('____________');
// })

// swapi.getShip(10).then((ship) => {
//     console.log(ship.name);
//     console.log('____________');
//     console.log('____________');
// });