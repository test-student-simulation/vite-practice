import './App.css'
import { items } from './data'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">私のおすすめゲーム3選</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {items.map((item) => (
          <div
            key={item.name}
            className="p-4 bg-white rounded-lg shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[340px] h-[200px] object-contain mx-auto"
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>おすすめ度：{item.score}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App