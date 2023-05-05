import FavoriteRestaurantDb from '../data/favorite-restaurant-idb';
import { bookmarkTemplate, bookmarkedTemplate } from '../view/templates/template-creator';

const BookmarkButtonInitiator = {
  async init({ bookmarkButtonContainer, restaurant }) {
    this._bookmarkButtonContainer = bookmarkButtonContainer;
    this._restaurant = restaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderBookmarked();
    } else {
      this._renderBookmark();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantDb.getRestaurant(id);
    return !!restaurant;
  },

  _renderBookmark() {
    this._bookmarkButtonContainer.innerHTML = bookmarkTemplate();

    const bookmark = document.getElementById('bookmarkButton');
    bookmark.addEventListener('click', async () => {
      await FavoriteRestaurantDb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderBookmarked() {
    this._bookmarkButtonContainer.innerHTML = bookmarkedTemplate();

    const bookmarked = document.getElementById('bookmarkButton');
    bookmarked.addEventListener('click', async () => {
      await FavoriteRestaurantDb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default BookmarkButtonInitiator;
