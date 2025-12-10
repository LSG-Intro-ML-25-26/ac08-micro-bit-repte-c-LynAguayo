//  boto A: enviar missatge de text
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hola!!")
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
