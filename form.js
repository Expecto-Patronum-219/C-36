class Form{
    constructor(){
    }
    display(){
        var title=createElement("h1")
        title.html("Enter Car Racing Game")
        title.position(200, 0)
        var input=createInput("name")
        input.position(200, 100)
        var button=createButton("PLAY")
        button.position(300, 150)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount=playerCount+1
            player.update(name)
            player.updateCount(playerCount)
            var greeting = createElement("h2")
            greeting.html("Hi "+ name+" Waiting for other players to join")
            greeting.position(200, 150)
        })
    }
}