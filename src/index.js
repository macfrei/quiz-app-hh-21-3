const buttonHome = document.querySelector('.js-home-button')
const buttonBookmark = document.querySelector('.js-bookmark-button')
const buttonCreate = document.querySelector('.js-create-button')
const buttonQuizCard = document.querySelector('.quiz-card__button')
const bookmark = document.querySelector('.quiz-card__bookmark')

const homePage = document.querySelector('.page-home')
const bookmarkPage = document.querySelector('.page-bookmark')
const createPage = document.querySelector('.page-create')

const homePageHeader = document.querySelector('.page-home-header')
const bookmarkPageHeader = document.querySelector('.page-bookmark-header')
const createPageHeader = document.querySelector('.page-create-header')

const quizCardAnswer = document.querySelector('.js-quiz-card-answer')

buttonQuizCard.addEventListener('click', () => {
  quizCardAnswer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

buttonHome.addEventListener('click', () => {
  homePage.classList.remove('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.add('hidden')

  homePageHeader.classList.remove('hidden')
  bookmarkPageHeader.classList.add('hidden')
  createPageHeader.classList.add('hidden')

  buttonHome.classList.add('navigation__link--active')
  buttonBookmark.classList.remove('navigation__link--active')
  buttonCreate.classList.remove('navigation__link--active')
})

buttonBookmark.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarkPage.classList.remove('hidden')
  createPage.classList.add('hidden')

  homePageHeader.classList.add('hidden')
  bookmarkPageHeader.classList.remove('hidden')
  createPageHeader.classList.add('hidden')

  buttonHome.classList.remove('navigation__link--active')
  buttonBookmark.classList.add('navigation__link--active')
  buttonCreate.classList.remove('navigation__link--active')
})

buttonCreate.addEventListener('click', () => {
  homePage.classList.add('hidden')
  bookmarkPage.classList.add('hidden')
  createPage.classList.remove('hidden')

  homePageHeader.classList.add('hidden')
  bookmarkPageHeader.classList.add('hidden')
  createPageHeader.classList.remove('hidden')

  buttonHome.classList.remove('navigation__link--active')
  buttonBookmark.classList.remove('navigation__link--active')
  buttonCreate.classList.add('navigation__link--active')
})
