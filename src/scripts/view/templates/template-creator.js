import CONFIG from '../../globals/config';

const cardDetail = (data) => `
<div class="card-detail-header">
<img src="${CONFIG.BASE_IMAGE_URL}/${data.pictureId}" alt="${data.name}">
<h2>${data.name}</h2>

</div>
<div class="card-detail-body">
<div class="card-detail-description">
  <div class="card-detail-description-left">
    <h3>Detail</h2>
      <ul>
        <li>
          <span>Decription</span>
          <p>${data.description}</p>
        </li>
        <li>
          <span>Kota</span>
          <p>
            ${data.city}
          </p>
        </li>
        <li>
          <span>Alamat</span>
          <p>
            ${data.address}
          </p>
        </li>
        <li>
          <span>Rating</span>
          <p>
            ${data.rating}
          </p>
        </li>
        <li>
          <span>Kategori</span>
          <div class = "categories">
            ${data.categories.map((category) => `<span>${category.name}</span>`).join('')}
          </div>
        </li>
      </ul>
  </div>
  <div class="card-detail-description-right">
    <h3>Menu</h2>
      <ul>
        <li>
          <span>Makanan</span>
          ${data.menus.foods.map((item) => `<p>- ${item.name}</p>`).join('')}
        </li>
        <li>
          <span>Minuman</span>
          ${data.menus.drinks.map((item) => `<p>- ${item.name}</p>`).join('')}
        </li>
      </ul>
  </div>
</div>
</div>
<div class="card-detail-review">
<h3>Ulasan</h3>
<div class="form-review">
  <form action="">
    <div class="mb-3">
      <label for="nama">Nama</label>
      <input type="text" placeholder="Nama" id="nama">
    </div>
    <div class="mb-3">
      <label for="ulasan">Ulasan</label>
      <textarea name="" id="ulasan" rows="5" placeholder="Ketik ulasan anda..."></textarea>
    </div>
    <button type="submit" class="btn-review">Kirim</button>
  </form>
</div>
${data.customerReviews.map((reviewer) => `
    <div class="card-review">
    <div class="card-review-header">
      <h4>${reviewer.name}</h4>
      <span>${reviewer.date}</span>
    </div>
    <div class="card-review-body">
      <p>${reviewer.review}</p>
    </div>
  </div>
    `).join('')}

</div>
`;

const card = (data) => `
      <div class="card">
            <img src=${CONFIG.BASE_IMAGE_URL}/${data.pictureId} " alt="Gambar ${data.name}">
            <div class="card-header" tabindex="0"><a href="#/detail/${data.id}">${data.name}</a></div>
            <div class="card-body">${data.description} </div>
            <div class="card-footer">
            <div class="card-city" tabindex="0"><strong>Kota: </strong> ${data.city}</div>
            <div class="card-rate" tabindex="0"><strong>Rating:   </strong>${data.rating} </div>
            </div>
          </div>
      `;

const bookmarkTemplate = () => `
    <button aria-label="like this movie" id="bookmarkButton" class="bookmark">
      <i class="fa-regular fa-bookmark"></i>
    </button>
`;
const bookmarkedTemplate = () => `
    <button aria-label="like this movie" id="bookmarkButton" class="bookmark">
    <i class="fa-solid fa-bookmark"></i>
    </button>
`;
export {
  card, cardDetail, bookmarkTemplate, bookmarkedTemplate,
};
