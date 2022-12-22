import './App.css';

function App({chandan}) {
  // code here
  console.log(chandan);
  return (
    <div className='App'>
      <h1> Kalvium gallery </h1>
      <div className='image'>
      <img alt="" src={chandan[0].img}/>
      <img alt="" src={chandan[1].img}/>
      </div>
      <div className='image'>
      <img alt="" src={chandan[2].img}/>
      <img alt="" src={chandan[3].img}/>
      </div>   
    </div>
  )
}

export default App;
