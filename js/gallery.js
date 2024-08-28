const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];


const gallery = document.querySelector('.gallery');

images.forEach(image => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  const link = document.createElement('a');
  link.classList.add('galery-link');
  link.href = image.original;

  const img = document.createElement('img');
  img.classList.add('gallery-image');
  img.src = image.preview;
  img.alt = image.description;
  img.dataset.source = image.original;

  link.appendChild(img);
  listItem.appendChild(link);
  gallery.appendChild(listItem);
});

// Отримуємо елементи модального вікна

const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image')
const modalClose = document.querySelector('.modal-close');

// Додаємо змінну для відстеження поточного індексу зображення

let currentIndex = -1;

// Додаємо обробник подій для відкриття модального вікна

gallery.addEventListener('click', event => {
  event.preventDefault(); // Відміна дії за замовчуванням для посилання

  if (event.target.classList.contains("gallery-image")) {
    const largeImageURL = event.target.dataset.source;
    modalImage.src = largeImageURL;
    modal.classList.add("is-open");

    // Встановлюємо поточний індекс
    currentIndex = images.findIndex((image) => image.original === largeImageURL);
  }
});

// Додаємо обробник подій для закриття модального вікна
modalClose.addEventListener('click', closeModal);

// Закриття модального вікна при кліку на фон

modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
// Функція для закриття модального вікна
function closeModal() {
  modal.classList.remove("is-open");
  modalImage.src = "";
  currentIndex = -1; // Скидаємо індекс при закритті
}

// Додаємо обробник подій для клавіатурних подій
document.addEventListener('keydown', event => {
  if (!modal.classList.contains('is-open')) return;

  switch (event.key) {
    case "Escape": // Закриваємо модальне вікно при натисканні Esc
      closeModal();
      break;
    case "ArrowLeft": // Переходимо до попереднього зображення
      showPreviousImage();
      break;
    case "ArrowRight": // Переходимо до наступного зображення
      showNextImage();
      break;
  }
});

// Функція для відображення попереднього зображення
function showPreviousImage() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    modalImage.src = images[currentIndex].original;
  }
}

// Функція для відображення наступного зображення
function showNextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex += 1;
    modalImage.src = images[currentIndex].original;
  }
}



// Додаємо обробник подій для закриття модального вікна

// modalClose.addEventListener('click', () => {
//   modal.classList.remove('is-open');
//   modalImage.src = '';
// });

// Закриття модального вікна при кліку на фон

// modal.addEventListener('click', event => {
//   if (event.target === modal) {
//     modal.classList.remove('is-open');
//     modalImage.src = '';
//   }
// });
