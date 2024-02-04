import { useEffect, useState  } from 'react'
import './App.css'




function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")
  const [err, setErr] = useState(null);

  function cot(){

    fetch(`https://api.quotable.io/random`)
    .then(Result => Result.json())
    .then(data => {
      setQuote(data.content)
      setAuthor(data.author)
    })
    .then(Error => {
      setErr(Error, "something went wrong please tray aegean")
    })

  }

useEffect(()=>{
  cot()
},[])

const sharebtn = () => {
  window.open(`https://www.linkedin.com/in/manthan-harale-04a469276/overlay/create-post/= ${quote}`)
}

  return (
    <div className='h-[100vh] w-full flex  items-center justify-center'>

      <div className='h-[500px] w-[700px] bg-gray-400 text-white flex flex-col justify-center items-center rounded-xl p-10'>

<p className='flex items-center justify-center h-[200px] text-[30px] font-bold'>
{quote}
{err}
</p>
<h5 className='mt-5 '>author :- {author}</h5>

<button className='bg-orange-500 text-white font-bold w-20 h-10 rounded-lg mt-5 mb-5' onClick={cot}>genret</button>

</div>
    </div>
  )
}

export default App
