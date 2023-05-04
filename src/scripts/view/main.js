import data from '../../DATA.json';

function main() {
  const menuListElement = document.querySelector('restaurant-page');
  menuListElement.menu = data.restaurants;
}

export default main;
