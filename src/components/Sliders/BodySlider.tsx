import style from "./BodySlider.module.css";
import Sliders from "./Slider/Sliders";

export const BodySlider = () => {
  return (
    <div className={style.bodySlider}>
      <div className={style.wrapHead}>
        <h1 className='name-head'>Квесты для компаний</h1>
      </div>
      <p className={style.pSlider}>
        Квесты для больших компаний — не просто комнаты с закрытой дверью и
        загадками. Локации для команд, насчитывающих более 4 участников, — это
        многоуровневые помещения или даже настоящие городские лабиринты. Большая
        компания — повод для сценаристов устроить действительно масштабное
        игровое действо. Поэтому среди сюжетов таких квестов попадаются
        зомби-апокалипсис, мир Дикого запада и даже события Великой
        Отечественной войны. В дело часто вступают актёры, которые служат
        проводниками или антагонистами. В некоторых квестах применяются
        VR-технологии, благодаря которым пространство квест-комнат становится
        практически безграничным.
      </p>
      <div className={style.wrapSlider}>
        <Sliders />
      </div>

    </div>
  );
};
