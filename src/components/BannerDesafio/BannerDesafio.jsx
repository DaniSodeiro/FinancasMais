import React from "react";
import banner2 from "/icon/LP-banner2.svg";
import s from "./bannerDesafio.module.css";

const BannerDesafio = () => {
  return (
    <section className={s.sessao}>
      <div className={s.firstBlock}>
        <h2 className={s.titulo}>O desafio Financeiro</h2>
        <p className={s.texto1}>
          Sabemos que lidar com finanças pode ser um desafio para muitas
          pessoas.
        </p>
        <p className={s.texto2}>
          A falta de organização, o desconhecimento das despesas e o medo de não
          conseguir atingir suas metas financeiras são obstáculos comuns
          enfrentados por todos nós.
        </p>
        <p className={s.texto3}>
          É por isso que desenvolvemos o Finanças+ - para ajudá-lo a superar
          esses desafios e alcançar a liberdade financeira que você tanto
          deseja.
        </p>
      </div>
      <div>
        <img src={banner2} alt="" />
      </div>
    </section>
  );
};

export default BannerDesafio;
