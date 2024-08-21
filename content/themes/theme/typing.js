var app = document.getElementById("typing-container");

var tw = new Typewriter(app, {
    loop: false,
    delay: 75,
});

tw.start()
    .pauseFor(1500)
    .typeString("And there seems to be no sign of intelligent life anywhere.");
