import { component$ } from "@builder.io/qwik";
import { JobCard } from "..";
export default component$(() => {
  return (
    <>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div class="order-first">
          <div class="bg-white p-4  rounded-sm">
            <div>
              <p class="text-lg mb-2 font-semibold text-blue-700">
                Frontend Developer
              </p>
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
              <button class="bg-blue-600 w-full mt-4 hover:bg-blue-600/75 text-white px-4 py-2 rounded-md">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div class=" lg:col-span-2">
          {" "}
          <div class="bg-white p-4  rounded-sm">
            <h1 class="text-lg font-semibold">Job Description</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            perspiciatis inventore unde ratione. Magnam sequi eveniet expedita
            quia ratione sapiente eligendi nihil est doloremque, magni earum
            commodi debitis architecto repellat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sit magni assumenda dicta blanditiis
            sint a odit sequi temporibus rem molestiae iure culpa sunt, quas ab
            harum obcaecati debitis. Doloremque, dolorum earum! Dignissimos
            deleniti numquam, perspiciatis impedit quo qui necessitatibus labore
            voluptas, dolore consectetur facere nam a hic, aliquid esse
            excepturi!
          </div>
        </div>
      </div>
      <div class="mt-6 grid lg:grid-cols-3 gap-6">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </>
  );
});
