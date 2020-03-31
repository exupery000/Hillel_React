export default class BlogPostService {
  _apiBase = 'https://jsonplaceholder.typicode.com';
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    console.log(res.ok);
    if (!res.ok) {
      throw new Error(`could not fetch ${url}, received ${res.status}`)
    }

    const body = await res.json();
    return body
  };


  async getAllPosts() {
    const res = await this.getResource('/posts/');
    return res
  }

  async getPost(id) {
    const res = await this.getResource(`/posts/${id}`);
    return res
  }

  async getAllUsers() {
    const res = await this.getResource('/users/');
    return res
  }

  



  // async getPerson(id) {
  //   const res = await this.getResource(`/people/${id}`);
  //   return res
  // }

  // async getAllPlanets() {
  //   const res = await this.getResource(`/planets/`);
  //   return res.results
  // }

  // async getPlanet(id) {
  //   const res = await this.getResource(`/planets/${id}`);
  //   return res
  // }

  // async getAllShips() {
  //   const res = await this.getResource(`/starships/`);
  //   return res.results
  // }

  // async getShip(id) {
  //   const res = await this.getResource(`/starships/${id}`);
  //   return res
  // }
}

const blogPostService = new BlogPostService();
blogPostService.getAllUsers().then(data => console.log(data))




