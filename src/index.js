const buttonQuizCard = document.querySelector('.js-quiz-card-button')
const bookmark = document.querySelector('.js-quiz-card-bookmark')
const quizCardAnswer = document.querySelector('.js-quiz-card-answer')

buttonQuizCard.addEventListener('click', () => {
  quizCardAnswer.classList.toggle('hidden')
})

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('quiz-card__bookmark--selected')
})

const buttonHome = document.querySelector('.js-home-button')
const buttonBookmark = document.querySelector('.js-bookmark-button')
const buttonCreate = document.querySelector('.js-create-button')

const homePage = document.querySelector('.js-page-home')
const bookmarkPage = document.querySelector('.js-page-bookmark')
const createPage = document.querySelector('.js-page-create')

const homePageHeader = document.querySelector('.js-page-home-header')
const bookmarkPageHeader = document.querySelector('.js-page-bookmark-header')
const createPageHeader = document.querySelector('.js-page-create-header')

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
