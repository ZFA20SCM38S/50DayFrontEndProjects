const panels = document.querySelectorAll('.panel');//选择所有具有 .panel 类的元素，并将它们存储在一个名为 panels 的变量中

panels.forEach(panel => {
    panel.addEventListener('click', () => {//当用户点击该元素时，触发指定的回调函数。
        removeActiveClasses()
        //JavaScript 中用于操作元素的 类列表 的方法之一：
        panel.classList.add('active')//在点击事件发生时，将 'active' 类添加到被点击的 .panel 元素的 classList 属性中。
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

/*
总结：
效果：点击图片后展开没其他图片折叠

html:
1.利用flex box，一个大div嵌套5个小div; 
2.直接利用“style="background-image:”嵌入图片网址从而使用图片
css:
1.导入google font字体并使用
2. box-sizing: border-box;让所有元素在调整border等边界时尺寸不会变化
3.利用body把所有元素都设置成flex box并居中
4.！！注意：当子元素含有position:absolure时，父元素必须规定自己的尺寸（比如height/width或者flex： 0.5）
*/
