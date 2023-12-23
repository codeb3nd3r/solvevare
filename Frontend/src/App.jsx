import React from 'react'
import styles from './style';
import { ScrollToTopButton,Graphicportfolio,Contatctform, Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Websiteportfolio } from "./components";


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats         />
          <Business      />
          <Graphicportfolio />
          <CTA           />
          <Websiteportfolio/>
          <Billing       />
          {/* <Testimonials  /> */}
          <Contatctform  />
          <ScrollToTopButton/>
          <Footer        />
        </div>
      </div>
    </div>
  )
}

export default App