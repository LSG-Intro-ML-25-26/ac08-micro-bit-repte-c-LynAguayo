my_number = 0
# configurar grup de radio
radio.set_group(1)
# inici
basic.show_icon(IconNames.HEART)

# boto A: enviar missatge de text

def on_button_pressed_a():
    radio.send_string("Hola!!")
    basic.show_icon(IconNames.YES)
    basic.pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

# botó B: jugar als daus (enviar número aleatori)

def on_button_pressed_b():
    global my_number
    my_number = randint(1, 6)
    # enviar el meu número
    radio.send_number(my_number)
    # mostrar el meu número
    basic.show_string("JO:")
    basic.show_number(my_number)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)
