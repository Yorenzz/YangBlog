export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

export const scrollToArticle = () => {
  window.scroll({
    top: window.innerHeight + 1,
    behavior: 'smooth',
  })
}
