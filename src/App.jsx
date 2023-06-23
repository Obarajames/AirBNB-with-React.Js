import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './card';
import card from './data'
import data from './data';




function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})        

  return (
    <>
     <nav>
      <img src="../images/airbnb-logo.png" alt="" srcset="" className='Nav-logo' />
     </nav>
     

     <section className="hero">
            <img src="../images/photo-grid.png" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
        <section className="cards-list">
                {cards}
        </section>
    </>
  )
}

export default App
