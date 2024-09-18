OLED12864_I2C.init()
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    OLED12864_I2C.clear()
    OLED12864_I2C.String("Hello", 0, 0, 1)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
})
