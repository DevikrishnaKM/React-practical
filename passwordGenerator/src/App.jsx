import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState('')

  const inputEl = useRef(null)

  const passwordGenerator = useCallback( () => {

    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numbers){
      str += '0123456789'
    }

    if(char){
      str += '!@#$%^&*(){}[]<>?'
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numbers, char,setPassword])

 useEffect(() => {
   passwordGenerator()
 },[length, numbers, char,passwordGenerator])


  const copyToClipboard = useCallback(() => {
    inputEl.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
   
    <div className='w-full max-w-md mx-auto shadow-md text-center rounded-lg px-4 py-4 my-8 text-green-500 bg-gray-700'>
      <h1 className='text-3xl font-bold my-4'>Password Generator</h1>
     <div className='flex shadow-lg rounded-lg overflow-hidden mb-4'>
        <input type='text' ref={inputEl} value={password} className='w-full rounded-l-lg px-3 py-1 outline-none' placeholder='Password' readOnly />
        <button onClick={copyToClipboard} className='bg-green-500 hover:bg-green-600 text-white shrink-0 font-bold px-3 py-0.5'>Copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
          type='range'
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
        />
        <label> Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          defaultChecked={numbers}
          id='numbers'
          onChange={() => setNumbers((prev) => !prev)}
        />
        <label htmlFor='numbers'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          defaultChecked={char}
          id='symbols'
          onChange={() => setChar((prev) => !prev)}
        />
        <label htmlFor='symbols'>Symbols</label>
      </div>
     </div>
    </div>
    </>
  )
}

export default App
