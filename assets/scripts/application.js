document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".social").forEach(function($el){
        $el.addEventListener("mousemove", onPerspectiveMouseMove);
    })
});

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/a-3d-hover-effect-using-css-transforms
 */
function onPerspectiveMouseMove(e) {
    const THRESHOLD = 5;
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    /**
     * CSS properties should be set like:
     * transform: scale3d(1, 1, 1) translate(var(--js-y), var(--js-x));
     */
    currentTarget.style.setProperty('--js-perspective', `${clientWidth}px`);
    currentTarget.style.setProperty('--js-x', `${-rotateY}px`);
    currentTarget.style.setProperty('--js-y', `${rotateX}px`);
}
