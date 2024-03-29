import { component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
// import ThunderImage from "../media/thunder.png";

export default component$(() => {
  const showMobileFilter = useSignal(false);
  return (
    <>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="">
          {/* web filter */}
          <div class="hidden lg:block mb-6">
            <JobFilter />
          </div>
          {/* svaed jobs */}
          <div class="hidden lg:block bg-white rounded-sm shadow-sm mb-6">
            <div class="px-4 py-2 border-b-[1px]">
              <p class="text-lg font-semibold text-gray-800">Saved Jobs</p>
            </div>
            <div class="p-4">
              <div class="flex justify-between items-center mb-3">
                <div>
                  {" "}
                  <p class="text-lg mb-1 text-gray-800">Frontend Developer</p>
                  <div class="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>

                    <p class="text-sm text-gray-700">Doyan Tech</p>
                  </div>
                </div>{" "}
                <button class="bg-blue-600  hover:bg-blue-600/75  text-white px-4 py-1 pb-2 rounded-sm">
                  Apply
                </button>
              </div>
              <div class="flex justify-between items-center">
                <div>
                  {" "}
                  <p class="text-lg mb-1 text-gray-800">Frontend Developer</p>
                  <div class="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 "
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>

                    <p class="text-sm text-gray-700">Doyan Tech</p>
                  </div>
                </div>{" "}
                <button class="bg-blue-600  hover:bg-blue-600/75  text-white px-4 py-1 pb-2 rounded-sm">
                  Apply
                </button>
              </div>
            </div>
          </div>
          {/* svaed jobs */}
          <div class="hidden lg:block bg-white rounded-sm shadow-sm ">
            <div class="px-4 py-2 border-b-[1px]">
              <p class="text-lg font-semibold text-gray-800">Saved Jobs</p>
            </div>
            <div class="p-4">
              <p class="text-gray-400">You have not saved any jobs yet!</p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-2">
          <div class="flex justify-between items-center gap-2">
            {/* search bar */}
            <div class="relative mx-auto shadow-sm bg-white  rounded-sm flex-grow ">
              <svg
                class="text-gray-400 h-4 w-4 fill-current absolute left-0 top-0 mt-3 ml-4"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background:new 0 0 56.966 56.966;"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
              <input
                class="outline-none border-0 w-full bg-white h-10 px-5 ps-12 rounded text-sm focus:outline-none "
                type="search"
                name="search"
                placeholder="Search for job Title"
              />
            </div>
            {/* filter button */}
            <button
              class="bg-blue-600 lg:hidden hover:bg-blue-600/75  text-white px-3 py-2 rounded-sm"
              onClick$={() =>
                (showMobileFilter.value = !showMobileFilter.value)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>
          </div>
          <div class="my-5">
            <div class="flex  items-center gap-3 overflow-x-auto scrollbar-hide">
              <p class="text-md font-semibold text-gray-600 text-nowrap">
                Populer Terms:
              </p>
              <div class="flex items-center space-x-2">
                <div
                  class="border-[1px] rounded-full px-3 transition ease-in-out duration-300 cursor-pointer
                  hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 text-nowrap"
                >
                  <p class="mb-[2px]">React</p>
                </div>
                <div
                  class="border-[1px] rounded-full px-3 transition ease-in-out duration-300 cursor-pointer
                  hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 text-nowrap"
                >
                  <p class="mb-[2px]">Vue</p>
                </div>
                <div
                  class="border-[1px] rounded-full px-3 transition ease-in-out duration-300 cursor-pointer
                  hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 text-nowrap"
                >
                  <p class="mb-[2px]">Mid-Level</p>
                </div>
                <div
                  class="border-[1px] rounded-full px-3 transition ease-in-out duration-300 cursor-pointer
                  hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 text-nowrap"
                >
                  <p class="mb-[2px]">Laravel</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="grid md:grid-cols-2 gap-4">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>
      </div>
      {showMobileFilter.value && (
        <div class="lg:hidden fixed bottom-0 left-0 w-full ">
          <JobFilter />
        </div>
      )}
    </>
  );
});

const JobFilter = component$(() => {
  return (
    <>
      {" "}
      <div class=" bg-white rounded-sm shadow-sm">
        <div class=" flex border-b-[1px] justify-between items-center px-4 py-2">
          <p class="text-lg font-semibold text-gray-800">Job Filter</p>
          <button class=" text-red-500 text-2xl rotate-45  hover:bg-red-100 h-6 w-6 pb-[5px] pl-[0px] rounded-full flex justify-center items-center">
            +
          </button>
        </div>
        <div class=" p-4">
          <fieldset class="mb-6">
            <legend class="text-lg font-medium text-gray-900 dark:text-white">
              Contract Status
            </legend>
            <div class="mt-4 space-y-2">
              <label
                for="Option1"
                class="flex cursor-pointer items-start gap-4"
              >
                <div class="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong class="font-normal text-gray-700 dark:text-white">
                    Full Time
                    <span class="text-sm text-gray-500 mx-1">(123)</span>
                  </strong>
                </div>
              </label>

              <label
                for="Option2"
                class="flex cursor-pointer items-start gap-4"
              >
                <div class="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong class="font-normal text-gray-700 dark:text-white">
                    Part Time
                    <span class="text-sm text-gray-500 mx-1">(423)</span>
                  </strong>
                </div>
              </label>

              <label
                for="Option3"
                class="flex cursor-pointer items-start gap-4"
              >
                <div class="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    id="Option3"
                  />
                </div>

                <div>
                  <strong class="font-normal text-gray-700 dark:text-white">
                    Internship
                    <span class="text-sm text-gray-500 mx-1">(83)</span>
                  </strong>
                </div>
              </label>
            </div>
          </fieldset>
          <fieldset class="mb-6">
            <legend class="text-lg font-medium text-gray-900 dark:text-white">
              Location Status
            </legend>
            <div class="mt-4 space-y-2">
              <label
                for="Option1"
                class="flex cursor-pointer items-start gap-4"
              >
                <div class="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    id="Option1"
                  />
                </div>

                <div>
                  <strong class="font-normal text-gray-700 dark:text-white">
                    On-Site
                    <span class="text-sm text-gray-500 mx-1">(233)</span>
                  </strong>
                </div>
              </label>

              <label
                for="Option2"
                class="flex cursor-pointer items-start gap-4"
              >
                <div class="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    id="Option2"
                  />
                </div>

                <div>
                  <strong class="font-normal text-gray-700 dark:text-white">
                    Remote
                    <span class="text-sm text-gray-500 mx-1">(23)</span>
                  </strong>
                </div>
              </label>

              <label
                for="Option3"
                class="flex cursor-pointer items-start gap-4"
              >
                <div class="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                    id="Option3"
                  />
                </div>

                <div>
                  <strong class="font-normal text-gray-700 dark:text-white">
                    Hybrid
                    <span class="text-sm text-gray-500 mx-1">(93)</span>
                  </strong>
                </div>
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
});

export const JobCard = component$(() => {
  return (
    <>
      <div class="bg-white p-4 shadow-sm rounded-md border-[1px] border-white hover:border-gray-200">
        <div class="flex justify-between items-start">
          <h2 class="uppercase bg-orange-100 px-2 rounded-sm text-sm">
            Id : 234635
          </h2>
          {/* <p class="text-gray-600  font-thin">12 hour ago</p> */}
          <button class=" text-gray-800 flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
          </button>
        </div>
        <div class="mt-2 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-end">
          <div class=" w-full">
            <div class=" flex-grow">
              <Link
                href="/job/"
                class="text-lg mb-2 font-semibold text-gray-800"
              >
                Frontend Developer
              </Link>
              <div class="flex gap-2 items-center mt-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>

                <p class="text-sm text-gray-700">Doyan Tech</p>
              </div>
              <div class="flex gap-2 items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <p class="text-sm text-gray-700">Remote</p>
              </div>
              <div class="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p class="text-sm text-gray-700">Full Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Job Finder",
  meta: [
    {
      name: "description",
      content: "Find your dream job today",
    },
  ],
};
