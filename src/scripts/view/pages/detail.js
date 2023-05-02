import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import { bookmarkTemplate, cardDetail } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
            <div class="card-detail" id="card-detail"></div>
            <div id="bookmarkButtonContainer"></div>
        `;
  },

  async afterRender() {
    const hideJumbotron = document.querySelector('#jumbotron');
    hideJumbotron.style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
    const cardDetailContainer = document.querySelector('#card-detail');
    cardDetailContainer.innerHTML += cardDetail(restaurant);

    const bookmarkButtonContainer = document.querySelector('#bookmarkButtonContainer');
    bookmarkButtonContainer.innerHTML = bookmarkTemplate();
    // console.log(restaurant);
  },

};

export default Detail;
