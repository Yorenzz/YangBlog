export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

export const scrollToArticleInstant = () => {
  window.scroll({
    top: window.innerHeight + 1,
    behavior: 'instant',
  })
}

export const scrollToArticleSmooth = () => {
  window.scroll({
    top: window.innerHeight + 1,
    behavior: 'smooth',
  })
}

export const getVisitorIP = () => {
  fetch('https://extreme-ip-lookup.com/json/').then(res => {
    res.json().then(res1 => {
      data.ip = res1.query
      console.log('log', data.ip)
      fetch(`https://api.vore.top/api/IPdata?ip=${data.ip}`).then(res2 => {
        res2.json().then(res3 => {
          console.log('ipfrom', res3.ipdata)
          data.ipData = res3.ipdata
        })
      })
    })
  })
}

export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  return randomColor.length === 6 ? '#' + randomColor : '#0' + randomColor
}
