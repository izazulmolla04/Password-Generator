import { useCallback, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [number,setNumber]=useState(false)
  const [char,setChar]=useState(false)
  const [password,setPassword]=useState("")
  const passwordRef=useRef(null)
  const copypassToclipboard=useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const genpassword = useCallback(()=>{
    let pass=""
    let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let numbers="0123456789"
    let special="!@#$%^&*()_+~`|}{[]:;?><,./-="
    if(char) chars+=special
    if(number) chars+=numbers

    for (let i = 1; i <=length; i++) {
      let index=Math.floor(Math.random()*chars.length)
      pass=pass+chars.charAt(index)
      setPassword(pass)
      
    }

  },[length,number,char,setPassword])

  return (
    <>
     <div className="w-full max-w-2xl mx-auto px-4 py-2 rounded-2xl bg-gray-600 mt-10">
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='flex flex-col gap-4 mt-4 overflow-hidden'>
        <div className="flex items-center">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className="bg-white text-orange-400 text-center p-2 outline-none flex-1"
            placeholder="Password"
            readOnly
          />
          <button className="px-4 py-2 bg-blue-500 text-white outline-none shrink-0" onClick={copypassToclipboard}>copy</button>
        </div>
        <div className='flex items-center gap-x-2'>
          <input 
           type="range" 
           min={8}
           max={20}
           value={length}
          //  onClick={(e)=>setLength(e.target.value)}xtfWJFVS(e)=>(password)(e)=>(password)fYeKxoek
           className='cursor-pointer'
           onChange={(e)=>setLength(e.target.value)}
          />
          <label className='text-2xl text-shadow-blue-50'>length:{length}</label>
          <input 
           type="checkbox"
           checked={number}
           id='numberInput'
            className='w-5 h-5 cursor-pointer'
            onChange={
              ()=>setNumber(prev=>!prev)
            }
          />
          <label htmlFor='numberInput' className='text-2xl text-shadow-blue-50'>Numbers</label>
          <input 
           type="checkbox"
           checked={char}
           id='charInput'
            className='w-5 h-5 cursor-pointer'
            onChange={
              ()=>setChar(prev=>!prev)
            }
          />
          <label htmlFor='charInput' className='text-2xl text-shadow-blue-50'>Special Characters</label>
        </div>
        <div>
          <button 
           className='w-full bg-green-500 text-white p-2 '
           onClick={genpassword}
          >Generate Password</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
