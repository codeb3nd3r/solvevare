import React from 'react'
import styles from '../style';
import { graphicport2 } from "../constants/index";
import Graphiccard from './Graphiccard';

const Graphicportfolio = () => {
  return (
    <section id="graphicport" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-gradient text-center`}>
        Graphic Portfolio
      </h2>
    </div>

    <div className="flex flex-wrap  justify-center w-full items-center feedback-container relative ">
      {graphicport2.map((card) => <Graphiccard key={card.id}{...card} />)}
    </div>
  </section>
  );
};
export default Graphicportfolio