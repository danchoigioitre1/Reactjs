import { useState, useEffect } from 'react'

//Call API
const tabs = ['posts', 'comments', 'albums']

function App() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [type]) // chi goi callback 1 lan khi component mounted
  return (
    <div className="App">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={tab === type ? { color: '#fff', background: '#333' } : {}}
        >{tab}</button>

      ))
      }

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div >
  );
}

function Content() {
  const [show, setShow] = useState(false)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <App/>}
    </div>

  )
}

export default Content;


