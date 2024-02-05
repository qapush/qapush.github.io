// Toggle mobile menu button

const mobileMenuButton = document.querySelector('.hamburger');

mobileMenuButton.addEventListener('click', () => {
  mobileMenuButton.classList.toggle('is-active');
});

// Hide mobile menu when mobile menu itgem clicked

document.querySelectorAll('.menu--mobile a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenuButton.classList.remove('is-active');
  });
});

// Center lottie animation
const player = document.querySelector('.lottie');
player.shadowRoot.querySelector('.main').style.margin = 'auto';
player.shadowRoot.querySelector('.animation').style.margin = 'auto';

//
// Portfolio
//

const portfolio = [
  {
    title: 'Reddit Lite',
    img: 'codecademy-reddit.jpg',
    tags: ['api', 'react', 'redux', 'netlify'],
    url: 'https://qapush-reddit.netlify.app',
  },
  {
    title: 'Jammming with Spotify',
    img: 'codecademy-jammming.jpg',
    tags: ['api', 'react', 'redux', 'netlify'],
    url: 'https://qapush-jammming.netlify.app',
  },
  {
    title: 'Private Movies Database',
    img: 'movies-database.jpg',
    tags: ['api', 'react', 'redux', 'netlify serverless'],
    url: 'https://movies41.netlify.app',
  },
  {
    title: 'Boss Machine',
    img: 'codecademy-boss-machine.jpg',
    tags: ['express', 'cli', 'node'],
    url: 'https://github.com/qapush/codecademy-boss-machine',
  },
  {
    title: 'Mixed messages',
    img: 'codecademy-mixed-messages.jpg',
    tags: ['cli', 'node', 'javascript'],
    url: 'https://github.com/qapush/codecademy-mixed-messages',
  },
  {
    title: 'Recording studio website',
    img: 'domofonia.jpg',
    tags: ['html', 'css', 'javascript', 'wordpress', 'bootstrap'],
    url: 'https://domofoniastudio.pl',
  },
  {
    title: 'AI news',
    img: 'ai-news.jpg',
    tags: ['aws lambda', 'node', 'chat gpt', 'api', 'bootstrap'],
    url: 'https://www.instagram.com/warsaw_41/',
  },
  {
    title: 'Company homepage',
    img: 'company-webpage.jpg',
    tags: ['html', 'css'],
    url: 'https://qapush.github.io/codecademy-website-flex/',
  },
  {
    title: 'Responsive Club Website',
    img: 'codecademy-responsive-club.jpg',
    tags: ['html', 'css'],
    url: 'https://qapush.github.io/codecademy-club/',
  },
];

const portfolioWrapper = document.querySelector('.projects--wrapper');

const portfolioItems = Object.values(portfolio).forEach((item) => {
  portfolioWrapper.innerHTML += `
        <a href=${item.url} target="_blank">
            <div class="project">
                <div class="project--cover">
                    <img src="./assets/img/portfolio/${item.img}" alt="${item.title}">
                </div>
                <div class="project--description">
                    <h3>${item.title}</h3>
                    <div class="project-keywords">
                        <ul>
                            ${item.tags.map((tag) => '<li>' + tag + '</li>').join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </a>
        `;
});

console.log(portfolioWrapper);

/* 
    
 ██████╗  █████╗ ███╗   ███╗███████╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██║  ███╗███████║██╔████╔██║█████╗  
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
                                    

*/

// ===> VARIABLES

const showGame = document.getElementById('game-open');
const hideGame = document.getElementById('game-hide');
const newGame = document.getElementById('game-newgame');
const gameMessage = document.getElementById('game-message');
const timeResult = document.getElementById('game-time');
let timeStart = null;
let result = null;
let gameIsOn = false;
const baseUrl = './assets/img/game/';
const game = document.querySelector('#game');
const urls = [
  `${baseUrl}c1.jpg`,
  `${baseUrl}c2.jpg`,
  `${baseUrl}c3.jpg`,
  `${baseUrl}c4.jpg`,
  `${baseUrl}c5.jpg`,
  `${baseUrl}c6.jpg`,
  `${baseUrl}c7.jpg`,
  `${baseUrl}c8.jpg`,
];
const images = [...urls, ...urls];
let selectedCards = [];
let cards = [];
let cardsMatched = [];

// ===> FUNCTIONS

const shuffleImages = () => {
  for (let i = 0; i < images.length; i++) {
    const random = Math.floor(Math.random() * images.length);
    [images[i], images[random]] = [images[random], images[i]];
  }
};

const clearBoard = () => {
  if (document.querySelector('#game .game-cards'))
    document.querySelector('#game .game-cards').remove();
  gameIsOn = false;
  cards = [];
  cardsMatched = [];
  selectedCards = [];
  gameMessage.style.display = 'none';
};

const populateCards = () => {
  const board = document.createElement('div');
  board.classList.add('game-cards');
  images.forEach((item, index) => {
    const cardWrapper = document.createElement('div');
    const card = document.createElement('img');
    cardWrapper.classList.add('game-card');
    card.dataset.index = index;
    card.src = baseUrl + 'pattern.jpg';
    card.addEventListener('click', handleClick);
    cards.push(card);
    cardWrapper.appendChild(card);
    board.appendChild(cardWrapper);
  });
  game.appendChild(board);
};

const revealCard = (card) => {
  const cardIndex = +card.dataset.index;
  const cardImage = images[cardIndex];
  card.src = cardImage;
  selectedCards.push({
    cardIndex,
    cardImage,
  });
};

const isAlreadySelected = (cardToCheck) => {
  return selectedCards.some((card) => card.cardIndex === +cardToCheck.dataset.index);
};

const match = () => {
  selectedCards.forEach((card) => {
    cardsMatched.push(card.cardIndex);
    cards[card.cardIndex].style.border = '2px solid lime';
    cards[card.cardIndex].removeEventListener('click', handleClick);
  });
  selectedCards = [];
};

const pauseHide = () => {
  cards.forEach((card) => card.removeEventListener('click', handleClick));
  setTimeout(() => {
    selectedCards.forEach((item) => {
      cards[item.cardIndex].src = baseUrl + 'pattern.jpg';
    });
    selectedCards = [];
    cards.forEach((card) => {
      if (!cardsMatched.some((el) => el === card.cardIndex)) {
        card.addEventListener('click', handleClick);
      }
    });
  }, 1000);
};

const formatTimeResult = () => {
  let str = '';
  result = new Date().getTime() - timeStart;

  // result = new Date().getTime() - new Date(2023, 0, 22, 13, 5).getTime();

  const minutes = Math.floor(result / 60000);
  const seconds = Math.floor((result - minutes * 60000) / 1000);

  if (minutes >= 1) str += `${minutes} minute`;
  if (minutes > 1) str += `s`;

  str += ` ${seconds} second`;

  if (seconds > 1) str += `s`;

  return str;
};

const win = () => {
  gameIsOn = false;
  timeResult.innerHTML = formatTimeResult();
  gameMessage.style.display = 'inline';
};

const startClock = () => {
  gameIsOn = true;
  timeStart = new Date().getTime();
};

const handleClick = (e) => {
  gameIsOn ? null : startClock();

  const card = e.target;

  if (selectedCards.length <= 1 && !isAlreadySelected(card)) {
    revealCard(card);
  }

  if (selectedCards.length === 2 && selectedCards[0].cardImage === selectedCards[1].cardImage) {
    match();
  }

  if (selectedCards.length === 2 && selectedCards[0].cardImage !== selectedCards[1].cardImage) {
    pauseHide();
  }

  if (cardsMatched.length === cards.length) {
    win();
  }
};

const startNewGame = () => {
  clearBoard();
  shuffleImages();
  populateCards();
};

showGame.addEventListener('click', () => {
  game.style.display = 'block';
  startNewGame();
});
hideGame.addEventListener('click', () => {
  game.style.display = 'none';
  clearBoard();
});
newGame.addEventListener('click', startNewGame);
