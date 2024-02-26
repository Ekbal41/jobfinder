import { Slot, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const pathname = useLocation().url.pathname;
  return (
    <>
      {" "}
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div class="">
          <ul>
            <li>
              <Link
                href="/dashboard"
                class={`flex items-center gap-2 border-s-[3px]
                   px-4 py-3 dark:bg-blue-500/20 dark:text-blue-50
                 ${
                   pathname === "/dashboard/"
                     ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-50"
                     : "border-transparent text-gray-500 dark:text-gray-400"
                 }

                 `}
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
                    d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                  />
                </svg>

                <span class="text-sm font-medium">Jobs</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                class={`flex items-center gap-2 border-s-[3px]
                   px-4 py-3 dark:bg-blue-500/20 dark:text-blue-50
                 ${
                   pathname === "/dashboard/profile/"
                     ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-50"
                     : "border-transparent text-gray-500 dark:text-gray-400"
                 }

                 `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="text-sm font-medium"> Profile </span>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/account"
                class={`flex items-center gap-2 border-s-[3px]
                   px-4 py-3 dark:bg-blue-500/20 dark:text-blue-50
                 ${
                   pathname === "/dashboard/account/"
                     ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-50"
                     : "border-transparent text-gray-500 dark:text-gray-400"
                 }

                 `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>

                <span class="text-sm font-medium"> Account </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/billing"
                class={`flex items-center gap-2 border-s-[3px]
                   px-4 py-3 dark:bg-blue-500/20 dark:text-blue-50
                 ${
                   pathname === "/dashboard/billing/"
                     ? "border-blue-500 bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-50"
                     : "border-transparent text-gray-500 dark:text-gray-400"
                 }

                 `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span class="text-sm font-medium"> Billing </span>
              </Link>
            </li>
          </ul>
        </div>
        <div class=" lg:col-span-3">
          <div>
            <Slot />
          </div>
        </div>
      </div>
    </>
  );
});
