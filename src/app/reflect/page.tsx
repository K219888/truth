'use client'

import { useState, useEffect } from 'react'

export default function ReflectPage() {
  const [text, setText] = useState('')
  const [saved, setSaved] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Load saved reflection on page load
  useEffect(() => {
    const savedText = localStorage.getItem('reflection')
    if (savedText) {
      setText(savedText)
      setLoaded(true)
      setTimeout(() => setLoaded(false), 2000)
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('reflection', text)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-6">Reflect in Truth</h2>

      <blockquote className="text-center text-lg max-w-2xl mb-6 border-l-4 border-gray-400 pl-4 italic">
        “And say: Truth has come, and falsehood has vanished. Indeed, falsehood is ever bound to vanish.”<br />
        <span className="text-sm mt-2 block">— Qur’an 17:81</span>
      </blockquote>

      <p className="mb-4 text-center max-w-xl">
        Write down 3 truths you’ve been avoiding.  
        Only you and Allah ﷻ will know what’s here.
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start writing..."
        className="w-full max-w-xl h-40 bg-gray-100 text-black p-4 rounded-lg resize-none outline-none border border-gray-300 focus:border-black"
      />

      <button
        onClick={handleSave}
        className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Save
      </button>

      {saved && (
        <p className="text-green-600 mt-2">✅ Saved successfully!</p>
      )}

      {loaded && (
        <p className="text-blue-600 mt-2">📂 Loaded saved reflection</p>
      )}
    </main>
  )
}
