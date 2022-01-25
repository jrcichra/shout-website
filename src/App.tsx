import { useEffect, useState } from 'react'
import './App.css'

function isValidHttpUrl(string: string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}


function App() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');
  const [go, setGo] = useState(false);

  useEffect(() => {
    if (go) {
      setGo(false);
      setResponse('');
      if (isValidHttpUrl(url)) {
        fetch(`api/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            url: url
          })
        })
          .then(res => res.json())
          .then(res => {
            setResponse(`${window.location.href}w/${res.word}`);
          })
      } else {
        setResponse(`'${url}': Invalid URL`);
      }
    }
  }, [go]);

  return (
    <div className="App">
      <header className="App-header">
        <p>shout</p>
        <input type="text" placeholder='https://google.com' value={url} onChange={(e) => setUrl(e.target.value)} />
        <br></br>
        <input type="button" value="Add" onClick={() => setGo(true)} />
        <p>{response}</p>
      </header>
    </div>
  )
}

export default App
