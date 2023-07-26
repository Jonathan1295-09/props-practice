
import './App.css';

const Book = (props) => {
return(
  <div> 
    <h3>{props.alt}</h3>
    <div>
      {props.author}
    </div>
    
  
  </div>
 
 

)
}

function App() {
  return (
    <div className="App">
      <Book
        alt="Harry Potter"
      />

      <Book
        alt="The Book"
      />

      <Book
        alt="My Book"
        author="Me"
      />

    </div>
  );
}

export default App;
