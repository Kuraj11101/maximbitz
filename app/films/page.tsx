import Image from "next/image"


export default function Films() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {/* <div className="space-y-10"> */}
    <div className="flex items-center rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
      <div className="flex bg-gray-100 p-4 w-auto space-x-2 rounded-lg">
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg> */}
        <input className="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
      </div>
      <div className="flex py-0 px-0 rounded-lg text-gray-200 font-semibold cursor-pointer">
        <span>All categories</span>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className="flex px-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
      </div>
    </div>



    {/* </div> */}
 
        </main>
    )
}