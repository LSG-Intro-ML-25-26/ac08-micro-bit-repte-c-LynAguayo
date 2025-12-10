let my_number = 0
//  configurar grup de radio
radio.setGroup(1)
//  inici
basic.showIcon(IconNames.Heart)
//  boto A: enviar missatge de text
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hola!!")
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
//  botó B: jugar als daus (enviar número aleatori)
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    my_number = randint(1, 6)
    //  enviar el meu número
    radio.sendNumber(my_number)
    //  mostrar el meu número
    basic.showString("JO:")
    basic.showNumber(my_number)
    basic.pause(1000)
    basic.clearScreen()
})
