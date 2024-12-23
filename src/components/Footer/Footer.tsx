import style from "./Footer.module.css";
import { BtnDiscount } from "../Buttons/BtnDiscount/BtnDiscount";

export const Footer = () => {
  return (
    <div className={style.section}>
      <div className={style.content}>
        <h1 className={style.dis}><span className={style.discount}>Скидка 25%</span> на квест</h1>
        <h1 className={style.head}>"Тайная комната"</h1>
        <BtnDiscount txt = 'Смотреть предложениe'/>
      </div>
      <div className={style.image}>
      </div>
    </div>
  );
};
