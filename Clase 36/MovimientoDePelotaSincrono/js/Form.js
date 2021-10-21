class Form {
    constructor() {
        
    }
    display() {
        var title = createElement("h2");
        title.html = "Juego de Carreras de Autos";
        title.position(130, 0);
        var input = createInput("nombre");
        var button = createButton("jugar");
        var greetings = createElement("h3");
        input.position(130, 160);
        button.position(250, 200);
        button.mousePressed(function() {
            input.hide(true);
            button.hide(true);
            var name = input.value;
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            greetings.html = (`Bienvenido ${name}!`);
            greetings.position(130, 60);
        });
    }
}