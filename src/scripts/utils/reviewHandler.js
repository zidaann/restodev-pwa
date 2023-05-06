import RestaurantDbSource from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';

const ReviewHandler = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const name = document.getElementById('nama').value;
  const review = document.getElementById('ulasan').value;
  console.log(name);
  //   const reviewContainer = document.querySelector('.card-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const data = {
    id: url.id,
    name,
    review,
    date,
  };
  console.log(data);
  await RestaurantDbSource.createReview(data);
  name.value = '';
  review.value = '';
  // reviewContainer.innerHTML +=
};

export default ReviewHandler;
