import Image from "next/image"


export default function Films() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form className="flex items-center max-w-sm mx-auto pb-16">   
    <label htmlFor="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search content..." required />
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
</form>

<div className="flex-col-1 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"> 
  <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="kunfupanda" src="images/kunfupand_4.jpg"
          className="relative h-200 w-400 rounded-lg object-cover object-center" />
      </div>
    <div className="flex items-center">
        <br />
       <a href="#"> 
            <h6 className="block place-items-center font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Kunfu Panda 4
            </h6>
        </a>
      </div>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
    <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
    </div>
    <div>
        <h5 className="block justify-center text-center place-items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Deal III
        </h5>
    </div>
 </div>

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>

<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>
</div>

<div className="flex-col-1 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"> 
<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="kunfupanda" src="images/kunfupand_4.jpg"
          className="relative h-200 w-400 rounded-lg object-cover object-center" />
      </div>
    <div className="flex items-center">
        <br />
       <a href="#"> 
            <h6 className="block place-items-center font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Kunfu Panda 4
            </h6>
        </a>
      </div>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
    <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
    </div>
    <div>
        <h5 className="block justify-center text-center place-items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Deal III
        </h5>
    </div>
 </div>

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>

<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>
</div>

<div className="flex-col-1 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"> 
<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="kunfupanda" src="images/kunfupand_4.jpg"
          className="relative h-200 w-400 rounded-lg object-cover object-center" />
      </div>
    <div className="flex items-center">
        <br />
       <a href="#"> 
            <h6 className="block place-items-center font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Kunfu Panda 4
            </h6>
        </a>
      </div>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
    <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
    </div>
    <div>
        <h5 className="block justify-center text-center place-items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Deal III
        </h5>
    </div>
 </div>

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>

<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>
</div>

<div className="flex-col-1 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"> 
<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="kunfupanda" src="images/kunfupand_4.jpg"
          className="relative h-200 w-400 rounded-lg object-cover object-center" />
      </div>
    <div className="flex items-center">
        <br />
       <a href="#"> 
            <h6 className="block place-items-center font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Kunfu Panda 4
            </h6>
        </a>
      </div>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
    <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
    </div>
    <div>
        <h5 className="block justify-center text-center place-items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Deal III
        </h5>
    </div>
 </div>

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>

<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>
</div>

<div className="flex-col-1 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"> 
<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="kunfupanda" src="images/kunfupand_4.jpg"
          className="relative h-200 w-400 rounded-lg object-cover object-center" />
      </div>
    <div className="flex items-center">
        <br />
       <a href="#"> 
            <h6 className="block place-items-center font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Kunfu Panda 4
            </h6>
        </a>
      </div>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
    <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
    </div>
    <div>
        <h5 className="block justify-center text-center place-items-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Deal III
        </h5>
    </div>
 </div>

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>

<div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
      <div className="flex place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative h-200 w-200 rounded-lg object-cover object-center" />
      </div>
</div>
</div>


        </main>
    )
}