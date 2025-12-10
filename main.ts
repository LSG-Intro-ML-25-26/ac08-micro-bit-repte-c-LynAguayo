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
//  rebre nombre i comparar
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    //  mostrar nombre rebut
    basic.showString("ELL:")
    basic.showNumber(receivedNumber)
    basic.pause(1000)
    if (receivedNumber > my_number) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber < my_number) {
        basic.showIcon(IconNames.Happy)
    } else {
        //  empat
        basic.showIcon(IconNames.Meh)
    }
    
    basic.pause(2000)
    basic.clearScreen()
})
//  rebre i mostrar text
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
