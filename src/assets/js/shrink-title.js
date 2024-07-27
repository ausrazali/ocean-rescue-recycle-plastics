ScrollTrigger.create({
    animation: gsap.from(".website-title-shrink", { // element to animate
        y: "50vh", // Move element at 50vh
        scale: 2, // Scale element size 2 times original size
        yPercent: -50, // Align vertically -50% own height
    }),
    scrub: true, // animation in sync with scrollbar. play forward when scroll down, play backward when scroll up
    trigger: ".home-banner-image", // animate when .home-banner-image is in view
    start: "top bottom", // start animation when top of trigger reach bottom of viewport
    endTrigger: ".home-banner-image", // element to stop animation
    end: "top top", // end animation when center of trigger reach top of viewport
});