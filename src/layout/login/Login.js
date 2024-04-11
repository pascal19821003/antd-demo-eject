// 获取页面中所有的输入框元素
const inputs = document.querySelectorAll('.input-field')
// 获取页面中所有的切换按钮元素
const toggle_btn = document.querySelectorAll('.toggle')
// 获取页面中的main元素
const main = document.querySelector('main')
// 获取页面中所有的小圆点元素
const bullets = document.querySelectorAll('.bullets span')
// 获取页面中所有的图片元素
const images = document.querySelectorAll('.image')

// 为所有输入框元素添加获取焦点和失去焦点的事件监听器
inputs.forEach(inp =>{
    inp.addEventListener('focus',()=>{
        inp.classList.add('active')
    })
    inp.addEventListener('blur',()=>{
        if(inp.value !='')return
        inp.classList.remove('active')
    })
})

// 为所有切换按钮元素添加点击事件监听器
toggle_btn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        main.classList.toggle('sign-up-mode')
    })
})

// 定义moveSlider函数，用于实现图片轮播和文本滑动的效果
function moveSlider(){
    // 获取当前点击的小圆点的索引值
    let index = this.dataset.value;
    // 根据索引值获取对应的图片元素
    let currentImg = document.querySelector(`.img-${index}`)
    // 将其他图片元素的show类名移除，将当前图片元素添加show类名
    images.forEach(img =>{
        img.classList.remove('show')
    })
    currentImg.classList.add('show')
    // 获取文本滑动元素
    const textSlider = document.querySelector('.text-group')
    // 将文本滑动元素的transform属性设置为当前索引值对应的位置
    textSlider.style.transform = `translateY(${-(index-1)*2.2}rem)`
    // 将其他小圆点的active类名移除，将当前小圆点添加active类名
    bullets.forEach(bullet =>{
        bullet.classList.remove('active')
    })
    this.classList.add('active')
}

// 为所有小圆点元素添加点击事件监听器
bullets.forEach(bullet =>{
    bullet.addEventListener('click',moveSlider)
})
