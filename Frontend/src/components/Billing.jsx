import { payment,apple, bill, google } from "../assets/assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="Transactions" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={payment} alt="billing" className="w-[150%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Affordable & Friendly <br className="sm:block hidden" /> Payment Methods
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our business accepts payments through trusted platforms such as PayPal, Cash App, and Stripe, providing clients with secure and reliable payment options. We also ensure the convenience of credit/debit card transactions, building trust through widely recognized and reputable financial channels.
      </p>
    </div>
  </section>
  
);

export default Billing;