import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
export default function Form() {


    const [comment,setComment] = useState([])
    const [rating,setRating] = useState(null)
    const [name,setName] = useState(null)
    const [email,setEmail] = useState(null)
    const [data,setData] = useState([])


    const id = uuidv4();



function handleSubmit(){


    let newData = {
        id,
        name,
        email,
        comment,
        rating,
    }
    

    setData([...data,newData])
    setComment("")
    setEmail("")
    setName("")
    setRating("")
    console.log(data)
// console.log(rating)
}

  return (
    <div>

        

<form onSubmit={(e) => (
            e.preventDefault(),
            handleSubmit()
        )} class="max-w-sm shadow mb-4  px-4 py-6 text-start mx-auto">
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={name} onChange={(e) => setName(e.target.value)} placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
    <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 ">Your Comment</label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Leave a comment..."></textarea>
  </div>
  <div class="mb-5">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Rate Here...</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"      onChange={(e)=> setRating(e.target.value)}>

  <option>Rate Here</option>
              <option>⭐</option>
              <option>⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐⭐</option>
  </select>
  </div>

  <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Purple</button>

</form>

   


        <Card data={data}/>
    </div>
  )
}
