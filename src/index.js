 import _ from 'lodash'
 // import './style.css'
 // import Icon from './icon.png'
 import printMe from './print.js'

  function component() {
    const element = document.createElement('div');
    const btn=document.createElement('button')

   // lodash（目前通过一个 script 引入）对于执行这一行是必需的
   // lodash，现在通过一个 script 引入
    element.innerHTML = _.join(['Hello', 'webpack','测试一下'], ' ');
    btn.innerHTML='点击这里111，然后查看console!'
    btn.onclick=printMe
    element.appendChild(btn)
    // element.classList.add('hello');
    /*const myIcon=new Image()
    myIcon.src=Icon
    element.appendChild(myIcon)*/
    return element;
  }

  document.body.appendChild(component());