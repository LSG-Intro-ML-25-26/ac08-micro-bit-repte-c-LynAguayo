
# boto A: enviar missatge de text

def on_button_pressed_a():
    radio.send_string("Hola!!")
    basic.show_icon(IconNames.YES)
    basic.pause(500)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)
