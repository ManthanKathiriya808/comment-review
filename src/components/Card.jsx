
export default function Card({data}) {



  return (
    <div>
       

       

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
{        
       data.map((ele)=>(
        <div class="w-full text-start max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 mt-5 dark:border-gray-700">

        <div class="flex flex-col items-center py-10">
        <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
        </div>
            <h5 class=" text-xl font-medium text-gray-900 mt-4 dark:text-white">Name : {ele.name}</h5>
            <h5 class="mb-1 text-md font-medium text-gray-900  dark:text-white">Email : {ele.email}</h5>
            <h5 class="mb-1 text-sm font-medium text-gray-900  dark:text-white">Comment : {ele.comment}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Rating : {ele.rating}</span>
        </div>
        </div>
       ))
}
</div>


    </div>
  )
}
