input.onButtonPressed(Button.A, function () {
    for (let indeks = 0; indeks <= 255; indeks++) {
        radio.setGroup(indeks)
        serial.writeLine("Connected to " + indeks)
        for (let indeks2 = 0; indeks2 <= 255; indeks2++) {
            radio.sendNumber(indeks2)
            serial.writeLine("Sent " + indeks2 + "to " + indeks)
        }
    }
})
