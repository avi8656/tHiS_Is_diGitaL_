// function locomo(){
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#main'),
//         smooth: true
//     });
// }
// locomo();



var tl = gsap.timeline();

tl
    .from("#home-page-img1", {
        y: 100,
        delay: .5,
        duration: 1,
    })

    .from("#home-page-img2", {
        x: 100,
        delay: .5,
        duration: 1,
    }, "-=1.5")

    .from("#home-page-img3", {
        y: -100,
        delay: .5,
        duration: 1,
    }, "-=1.5")