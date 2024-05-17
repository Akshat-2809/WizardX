function page1() {
    var tl = gsap.timeline()
tl.from("nav h1",{
    y:-30,
    opacity:0,
    delay:0.3,
    duration:0.4
})
tl.from("nav a",{
    y:-30,
    opacity:0,
    delay:0.3,
    duration:0.5,
    stagger:0.19
})

tl.from(".center1 h1, .center1 p",{
    x:-300,
    opacity:0,
    duration:0.6,
    delay:0.2
})
tl.from(".center1 a>button",{
    x:-300,
    opacity:0,
    duration:0.4,
    delay:0.2
})
tl.from(".bottom-page img",{
   y:30,
    opacity:0,
    duration:0.6,
    delay:0,
    stagger:0.19
}) 
}
page1()

function page2(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".Section3",
            scroller:"body",
            start:"top 98%",
            end:"top 50%",
            scrub:5
        }
    })
    
    tl2.from(".Section3",{
        x:200,
        opacity:0,
        duration:2,
        delay:0
    })
    tl2.from(".Section4 .heading",{
        x:-150,
        opacity:0,
        duration:1,
        delay:0.5,
    })
}
page2()


    



