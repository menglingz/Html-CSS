window.onload = function () {
  const body = document.querySelector('body')
  const app = document.querySelector('#app')
  app.onscroll = function () {
    console.log(app.scrollTop)
    if (app.scrollTop != '0') {
      body.style.background = '#fff'
      app.style.background = '#f2f2f2'
    } else {
      body.style.background = 'url(http://mooc-image.nosdn.127.net/163af1633be64e2dab278d3ed52ec5a8.png?imageView&quality=100&thumbnail=1125y1176) 50% 0px / contain no-repeat'
      app.style.background = 'none'
    }
  }
}
