$(document).ready(function () {
    let circle = $('.circle');
    // let c = document.getElementById('c');



    // let cl = document.getElementsBytag('circle')[0];

    //let arr = ['erti', 'ori', 'sami'];
    //arr[1];

    // innerhtml innertext

    // console.log(cl);

    // window.innerHeight
    // window.innerWidth

    // console.log('Height', window.innerHeight)
    // console.log('Width', window.innerWidth)

    // console.log($(window).width())

    $(document).on('mousemove', function (e) {
        let x = (e.pageX - 50);
        let y = (e.pageY - 50);

        circle.css('left', x + 'px');
        circle.css('top', y + 'px');
    })

    const icons = [
        'fa-solid fa-fish',
        'fa-solid fa-fish fish icon',
        'fa-solid fa-lemon lemon icon',
        'fa-solid fa-cookie coockie icon',
        'fa-solid fa-bone bone icon',
    ]

    // let number = 1 + Math.floor(Math.random() * 5);


    // for (let i = 0; i < icons.length; i++) {
    //     $('body').append('<i class="' + icons[i] + '"></i>')
    // }
})