const cursor = document.querySelector('.cursor-outer')
const cursor2 = document.querySelector('.cursor-inner')
document.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'

    cursor2.style.top = e.pageY + 'px'
    cursor2.style.left = e.pageX + 'px'
})