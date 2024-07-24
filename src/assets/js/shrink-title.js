ScrollTrigger.create({
    animation: gsap.from(".website-title-shrink", { // element to animate
        y: "50vh", // Move element at 50vh
        scale: 2, // Scale element size 3 times original size
        yPercent: -50, // Align vertically -50% own height
    }),
    scrub: true, // animation in sync with scrollbar. play forward when scroll down, play backward when scroll up
    trigger: ".home-banner-image", // animate when .content is in view
    start: "top bottom", // start animation when top of trigger reach bottom of viewport
    endTrigger: ".home-banner-image", // element to stop animation
    end: "bottom top", // end animation when top of trigger reach center of viewport
});