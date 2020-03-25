let script_srcs = [
    "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js",
    "js/sketch/sketch.js",
    "js/sketch/rotater.js",
    "js/sketch/osc_ellipse.js",
    "js/sketch/particle.js",
    "js/miner.js"
];

// Beginning mining with animations
function startMining() {
    // Animating play button
    document.getElementById("play-button").remove();

    // Injecting div for animation
    let animation_div = document.createElement('div');
    animation_div.class = "sketch";
    animation_div.onload = function() {
        this.remove();
    };
    (document.body || document.documentElement).appendChild(animation_div);

    // Injecting miner & animation scripts
    for (let i = 0; i < script_srcs.length; i++) {
        injectScript(script_srcs[i]);
    }
}

// Inject script on call
function injectScript(script_src) {
    let script_to_inject = document.createElement('script');
    script_to_inject.src = script_src;
    script_to_inject.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script_to_inject);
}