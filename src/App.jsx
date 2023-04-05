import './App.css'

function App() {
  
  const getBox = () => 
  {
    return document.querySelector('.carousleContainer')
  }

  const prev = () => 
  {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = width - box.scrollLeft;
  }

  const next = () =>
  {
    const box = getBox();
    const width = box.clientWidth;
    box.scrollLeft = width + box.scrollLeft;
  }


  return (
    <div className='Carousle'>
    <button className='prev' onClick={prev}>
          prev
        </button>
      <div className='carousleContainer'>
        <div className='carousleItem'>
          <div className='list'>
            one
          </div>
        </div>
        <div className='carousleItem'>
          <div className='list'>
            two
          </div>
        </div>
        <div className='carousleItem'>
          <div className='list'>
            three
          </div>
        </div>
        <div className='carousleItem'>
          <div className='list'>
            four
          </div>
        </div>
      </div>
      <button className='next' onClick={next}>
          next
        </button>
    </div>
  )
}

export default App
