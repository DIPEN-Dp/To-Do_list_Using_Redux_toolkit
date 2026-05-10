import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-950 flex flex-col items-center py-12 px-4 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8 text-center drop-shadow-xl tracking-tight">
          Manage Your Tasks
        </h1>
        <Addtodo />
        <div className="mt-8 border-t border-white/10 pt-8">
          <Todos />
        </div>
      </div>
    </div>
  )
}

export default App
