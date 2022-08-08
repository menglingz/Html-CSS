var lis = document.querySelectorAll('.watch-title .tab-list>li')
const watchRight = document.querySelector('.watch-right')
const watchRight1 = document.querySelector('.watch-right1')
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseenter', function () {
    for (let j = 0; j < lis.length; j++) {
      lis[j].style.color = '#424242'
      lis[j].style.border = 'none'
    }
    this.style.color = '#ff6700'
    this.style.borderBottom = '2px solid #ff6700'
    if (i === 0) {
      watchRight.style.display = 'block'
      watchRight1.style.display = 'none'
    } else {
      watchRight.style.display = 'none'
      watchRight1.style.display = 'block'
    }
  })
}
