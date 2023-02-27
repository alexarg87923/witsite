import './App.css';


const headerStyle = { 
  marginTop: '71px',
  paddingLeft: '71px',
  color:"red"
};
const margin = { 
  marginTop: '71px'
};
function App() {
  
  return (

    <div style={margin} className="App">

      <a href="/about">
        TEST
      </a>

      <a href="/events" style={headerStyle}>
        TEST
      </a>

      <a href="https://sharknet.mdc.edu/organization/witmdc" style={headerStyle}>
        TEST
      </a>


    </div>
    
  );
}



export default App;
