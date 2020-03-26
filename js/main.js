let script_srcs = [
    "https://cdn.jsdelivr.net/npm/p5@1.0.0/lib/p5.js",
    "js/sketch/sketch.js",
    "js/sketch/rotater.js",
    "js/sketch/osc_ellipse.js",
    "js/sketch/particle.js",
    'js/sketch/data.js',
    'js/miner.js'
];

// On captcha complete
document.addEventListener("JSECaptchaPass", function(e) {
    // Showing
    document.getElementById('animation-btns').classList.remove('uk-hidden');
    document.getElementById('animation-donate').classList.remove('uk-hidden');
    document.getElementById('credits').classList.remove('uk-hidden');

    // Injecting scripts
    for (let i = 0; i < script_srcs.length; i++) {
        injectScript(script_srcs[i]);
    }
}, false);

// Inject script on call
function injectScript(script_src) {
    let script_to_inject = document.createElement('script');
    script_to_inject.src = script_src;
    script_to_inject.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script_to_inject);
}

// Copy share url
function copyURL() {
    navigator.clipboard.writeText('iandraves.github.io/Avirio').then(function() {
        UIkit.notification("<span uk-icon='icon: check'></span> Share link copied to clipboard!");
    }, function() {
        UIkit.notification("<span uk-icon='icon: warning'></span> Could not copy share link!");
    });
}