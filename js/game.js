let game = {
  start: function () {
    let canvas = document.getElementById("mycanvas");
        let ctx = canvas.getContext("2d");
        
    let background = new Image();
    background.src = "img/background.png";
        background.addEventListener("load", () => {
        window.requestAnimationFrame(() => {
            ctx.drawImage(background, 0, 0);
        });
        });
  }
};


game.start();

