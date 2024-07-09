
function App() {
  return (
    <button onClick={async () => {
      const res = await fetch('/api')
      const data = await res.text()
      console.log(data)
    }}>
      Fetch data
    </button>
  )
}

export default App