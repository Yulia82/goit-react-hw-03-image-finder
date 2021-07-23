const BASICURL = "https://pixabay.com/api/?";
const KEY = "21900580-a9d3faca1e1a077fd5c5f4e0a";

class ImagesApi {
  constructor() {
    this.searchQuery = "";
    this.currentPage = 1;
    this.perPage = 12;
  }

  getImage() {
    return fetch(
      `${BASICURL}q=${this.searchQuery}&page=${this.currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`,
    ).then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`Нет картинок с именем ${this.query}`));
    });
  }

  resetPage() {
    this.currentPage = 1;
  }

  incrementPage() {
    this.currentPage += 1;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get query() {
    return this.searchQuery;
  }

  get imagesPerPage() {
    return this.perPage;
  }
}

export default ImagesApi;
