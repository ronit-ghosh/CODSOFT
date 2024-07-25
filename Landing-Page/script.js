console.log("Hey It's me Ronit") 

// Moving circle
document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur_cursor.style.left = dets.x - 100 + "px"
    blur_cursor.style.top = dets.y - 100 + "px"

})

document.querySelectorAll("nav h4").forEach((e) => {
    e.addEventListener("mouseenter", () => {
        cursor.style.scale = 3
        cursor.style.border = "1px solid white"
        cursor.style.backgroundColor = "transparent"
        cursor.style.transition = "all ease-in-out .1s"
    })
    e.addEventListener("mouseleave", () => {
        cursor.style.scale = 1
        cursor.style.border = "none"
        cursor.style.backgroundColor = "#95c11e"
        cursor.style.transition = "none"
    })
})


gsap.to("nav", {
    backgroundColor: "black",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to(".container", {
    backgroundColor: "black",
    duration: 1,
    scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from(".about_us", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about_us",
        scroller: "body",
        start: "top 85%",
        end: "top 75%",
        scrub: 2
    }
})

gsap.from(".section3", {
    y: 100,
    scale: 0.9,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about_us",
        scroller: "body",
        start: "bottom 85%",
        end: "bottom 75%",
        scrub: 2
    }
})

gsap.to(".colon1", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        start: "bottom 50%",
        end: "top 105%",
        scrub: 3
    }
});

gsap.to(".colon2", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: ".colon2",
        scroller: "body",
        start: "bottom 110%",
        end: "top 120%",
        scrub: 3
    }
});

gsap.to(".section6 h1", {
    y: -70,
    scrollTrigger: {
        trigger: ".section6 h1",
        scroller: "body",
        start: "top 70%",
        end: "top 75%",
        scrub: 3
    }
})