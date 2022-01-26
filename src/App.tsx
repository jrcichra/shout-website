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
  const [ttl, setTtl]: [any, any] = useState(undefined);
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
            url: url,
            ttl: ttl === undefined ? ttl : ttl * 60,
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

  function handleKeyPress(e: any) {
    if (e.key === 'Enter') {
      setGo(true);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>shout</p>
        <input type="text" placeholder='https://google.com' value={url} onChange={(e) => setUrl(e.target.value)} onKeyPress={handleKeyPress} />
        <br></br>
        <input id="ttl" type="text" placeholder='300' value={ttl} onChange={(e) => setTtl(Number(e.target.value))} onKeyPress={handleKeyPress} />
        <br></br>
        <input type="button" value="Shout" onClick={() => setGo(true)} />
        <br></br>
        <a href={response}>{response}</a>
      </header>
    </div>
  )
}

export default App
