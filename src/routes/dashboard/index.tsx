import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <div>
      <div class="py-2">
        <h1 class="font-semibold text-lg">Job Aplications</h1>
      </div>
      <div>
        <div class="grid lg:grid-cols-2 gap-4">
          <AppliedJobCard />
          <AppliedJobCard />
          <AppliedJobCard />
        </div>
      </div>
    </div>
  );
});

const AppliedJobCard = component$(() => {
  return (
    <div>
      <div class="bg-white p-4 rounded-md shadow-sm border-[1px] border-white hover:border-gray-200">
        <div class="flex justify-between items-center">
          <h2 class="uppercase bg-orange-100 px-2 rounded-sm text-sm">
            Id : 234635
          </h2>
          <p class="text-gray-600  font-thin">12 hour ago</p>
        </div>
        <div class="mt-2">
          <div class=" flex-grow">
            <p class="text-lg mb-2 font-semibold text-gray-800">
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
          </div>
        </div>
      </div>
    </div>
  );
});
