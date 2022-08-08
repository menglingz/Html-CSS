window.onload = function () {
  const form = document.querySelector('.container>header form')
  const sousuo = document.querySelector('.container>header>div.a ')
  const aside = document.querySelector('.container>aside')
  console.log(aside)
  sousuo.addEventListener('click', function () {
    if (form.className === 'cur') {
      form.className = ''
    } else {
      form.className = 'cur'
    }
  })
  // window.onscroll = function () {
  //   height = document.documentElement.scrollTop
  //   console.log(height)
  //   if (height > '886') {
  //     aside.style.position = 'fixed'
  //     aside.style.top = '0px'
  //     aside.style.right = '0px'
  //   }
  // }
}
