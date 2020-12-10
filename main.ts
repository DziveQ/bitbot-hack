input.onButtonPressed(Button.A, function () {
    for (let indeks = 0; indeks <= 255; indeks++) {
        radio.setGroup(indeks)
        for (let indeks2 = 0; indeks2 <= 255; indeks2++) {
            radio.sendNumber(indeks2)
        }
    }
})
