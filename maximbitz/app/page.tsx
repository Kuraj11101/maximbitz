import Image from "next/image";
import { PaperClipIcon } from '@heroicons/react/20/solid'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
  <form className="flex items-center max-w-sm mx-auto">   
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

      <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Announcements and status quo on Maximbitz as a site. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">For Knowledge, Key and Emerging Tech Tools, Applications, Amusement and Educational Purpose Only!</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Maximbitz is here to offer its users open access to refined knowledge and insight into the tech world with key take on other industries. Our site also offer privileged access to open source amusement, fair use tech applications, internet archive and educational contents.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Contents</a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Insights <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>    
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      
    </div>
  </div>

  <div className="flex-col-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"> 
  <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
  <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Tania Andrew
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Software Engineer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Alexander
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Backend Developer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Emma Willever
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          UI/UX Designer @ Material Tailwind
        </p>
      </div>
    </div>
  </nav>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
  <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Tania Andrew
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Software Engineer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Alexander
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Backend Developer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Emma Willever
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          UI/UX Designer @ Material Tailwind
        </p>
      </div>
    </div>
  </nav>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
  <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Tania Andrew
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Software Engineer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Alexander
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Backend Developer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Emma Willever
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          UI/UX Designer @ Material Tailwind
        </p>
      </div>
    </div>
  </nav>
</div> 

 <div className="relative flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
  <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Tania Andrew
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Software Engineer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Alexander
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          Backend Developer @ Material Tailwind
        </p>
      </div>
    </div>
    <div role="button"
      className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div className="grid mr-4 place-items-center">
        <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg"
          className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
      </div>
      <div>
        <h6
          className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          Emma Willever
        </h6>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          UI/UX Designer @ Material Tailwind
        </p>
      </div>
    </div>
  </nav>
</div>

</div>
<br /><br /><br />

    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
              qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
              pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  
    </main>
  );
}
