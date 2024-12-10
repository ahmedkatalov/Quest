import React from "react";
import style from "./AboutSection.module.css";
import img1 from '../../assets/gorizShayt.svg';
import img2 from '../../assets/shayt3.svg';
import img3 from '../../assets/vkletke.svg'

export const AboutSection = () => {
  return (
    <div className={style.wrapSection}>
      <div className={style.wrapHead}>
        <h1 className="name-head">Квесты для компаний</h1>

      <p className={style.pSection}>
        Квесты-приключения в Москве идеально подходят для отдыха как с друзьями,
        так и с семьей. Наверняка, ещё с детства вы хотели принять участие в
        раскопках древних цивилизаций или отправиться с пиратами покорять моря в
        поисках сокровищ, а может найти гробницу фараона и затерянные страны.
        Теперь у вас есть такая возможность! На «Квест City» вы найдете большое
        количество самых разных приключенческих квестов. Для взрослых, для
        детей, мистические, активные в стиле игры «Форт Боярд» и многие другие.
        Проходите испытания, решайте загадки и действуйте сообща, чтобы
        достигнуть цели. <br /><br />Бронируйте квесты-приключения в Москве уже сейчас.
        Ознакомьтесь с предложениями из нашего каталога. Почитайте отзывы,
        посмотрите программу квеструмов и расписание, чтобы определиться с
        выбором. Кроме того, вы можете приобрести подарочный сертификат, чтобы
        порадовать родных и близких.
      </p>
      </div>

      <div className={style.wrapImg}>
        <img src={img1} alt="" className={style.img1}/>
        <img src={img2} alt="" className={style.img2}/>
        <img src={img3} alt="" className={style.img3}/>
      </div>
    </div>
  );
};