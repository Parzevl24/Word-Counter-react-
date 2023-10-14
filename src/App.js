import './App.css';

function App() {
  function countWords() {
    const text = document.getElementById('para');
    const value = text.value;

    var arr = value.split(" ");
    console.log(arr.length)
    document.getElementById('wordCount').innerHTML = arr.length;
    return 
  }

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea id="para"></textarea>
      <p id="wordCount">0</p>
      <button onClick={countWords}>Count</button>

    </div>
  );
}

export default App;
