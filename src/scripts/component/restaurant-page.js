import data from '../../DATA.json';

class RestaurantPage extends HTMLElement {
  set menu(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = '';
    const container = document.createElement('div');
    container.classList.add('container');
    container.setAttribute('tabindex', '0');
    container.setAttribute('aria-label', 'List data');

    data.restaurants.forEach((data) => {
      const description = data.description.slice(0, 150) + '...';
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'listitem');
      card.setAttribute('aria-label', data.name);

      card.innerHTML = `
      <style> 
      .container {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
        margin: 0 auto;
        max-width: 960px;
        padding: 20px;
      }
      
      .card {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        height: 400px;
        position: relative;
        transition: all 0.2s ease-in-out;
      }
      
      .card:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
      }
      
      .card:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5), 0 0 0 6px #008cba, 0 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
      }
      
      .card-img-top {
        flex-grow: 1;
        height: 0;
        object-fit: cover;
      }
      
      .card-title {
        font-size: 24px;
        font-weight: bold;
        margin: 10px 0;
        text-align: center;
      }
      
      .card-description {
        padding: 10px;
        text-align: justify;
      }
      
      .rating {
        align-items: center;
        background-color: #FFD95A;
        border-radius: 5px;
        color: #000;
        display: flex;
        font-size: 14px;
        justify-content: center;
        height: 30px;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 30px;
      }
      
      .city {
        font-size: 16px;
        margin: 10px 0;
        text-align: center;
      }
      
      @media screen and (min-width: 768px) {
        .container {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media screen and (min-width: 1024px) {
        .container {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      

      </style>
        <img src="${data.pictureId}" class="card-img-top" alt="Picture of ${data.name}">
        <p class="rating">${data.rating}</p>
        <p class="city">${data.city}</p>
        <p class="card-title" aria-describedby="${data.name}">${data.name}</p>
        <div class="card-description">
          <p>${description}</p>
        </div>
      `;
      container.appendChild(card);
    });

    this.appendChild(container);
  }
}

customElements.define('restaurant-page', RestaurantPage);
