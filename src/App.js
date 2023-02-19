import React, {useState} from 'react'
import data from './data'


function App() {
  const [text, setText] = useState([])
  const [number, setNumber] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(number)
    if (number < 0) {
      setNumber(0)
    } else if (number > 8) {
      setNumber(8)
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Tired Of Boring Lorem Ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input type="number" id="amount" name="amount" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
