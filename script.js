const show = (title, box)=>{
    document.getElementById(title).addEventListener('click',()=>{
        document.getElementById(box).classList.toggle('show')
    })
}

show('title_herokucors', 'box_herokucors')