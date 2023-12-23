import React,{useEffect, useState} from 'react'

const Graphiccard = ({ img }) => {
  const [card, setCard] = useState(null)
  const clickme=()=alert("Feature Cooming Soon")>;
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

    <div  onClick={clickme} className="flex flex-row">
      <img src={img}  className="w-[200px] h-[200px] "  />
    </div>
    {
      <div className='absolute top-0 left-0'>
        {JSON.stringify(card)}
        <img src={card} alt="" />
</div>    }
  </div>
  )
}

export default Graphiccard
