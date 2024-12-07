import React from 'react'
import Sliders from './Slider/Sliders'
import style from './BodySlider.module.css'

export const BodySlider = () => {
  return (
    <div className={style.bodySlider}>
        <h2 className={style.headBody}>
        Квесты для компаний
        </h2>
        <p className={style.pSlider}>
        Квесты для больших компаний — не просто комнаты с закрытой дверью и загадками. Локации для команд, насчитывающих более 4 участников, — это многоуровневые помещения или даже настоящие городские лабиринты. Большая компания — повод для сценаристов устроить действительно масштабное игровое действо. Поэтому среди сюжетов таких квестов попадаются зомби-апокалипсис, мир Дикого запада и даже события Великой Отечественной войны. В дело часто вступают актёры, которые служат проводниками или антагонистами. В некоторых квестах применяются VR-технологии, благодаря которым пространство квест-комнат становится практически безграничным.
        </p>
        <Sliders />
    </div>
  )
}
