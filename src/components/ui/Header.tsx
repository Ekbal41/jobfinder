import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const menuOpen = useSignal<boolean>(false);
  return (
    <>
      <header>
        <div class="bg-blue-700 fixed top-0 z-50 bg-opacity-80 backdrop-blur-md w-full">
          <div class="mx-auto max-w-screen-xl px-4  sm:px-6 py-4 lg:px-8">
            <div class="flex justify-between items-center">
              <Link
                href="/"
                class="uppercase text-xl md:text-2xl text-white font-semibold"
              >
                JobFinder
              </Link>

              <div class="relative">
                <button
                  onClick$={() => (menuOpen.value = !menuOpen.value)}
                  class="text-white  flex gap-2 justify-center px-3 py-1 items-center hover:bg-blue-600"
                >
                  <p class="capitalize text-lg fpnt-semibold">Asif Ekbal</p>
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Asif Ekbal"
                    class="rounded-full object-cover"
                    height="20"
                    width="20"
                  />
                </button>
                {menuOpen.value && (
                  <div class="absolute p-1 right-0 bg-white w-48 rounded-md shadow-sm border-[1px] border-blue-100">
                    <ul class="rounded-md ">
                      <li class="hover:bg-blue-100 px-3 ">
                        <Link href="/auth/signin" class="block py-2">
                          Sign In
                        </Link>
                      </li>
                      <li class="hover:bg-blue-100 px-3 ">
                        <Link href="/auth/signup" class="block py-2">
                          Create Account
                        </Link>
                      </li>
                      <li class="hover:bg-blue-100 px-3 border-t-[1px]">
                        <Link href="/dashboard/profile" class="block py-2">
                          Profile
                        </Link>
                      </li>
                      <li class="hover:bg-blue-100 px-3 ">
                        <Link href="/dashboard" class="block py-2">
                          Dashboard
                        </Link>
                      </li>
                      <li class="hover:bg-blue-100 px-3 border-t-[1px]">
                        <Link href="/dashboard/profile" class="block py-2">
                          Help
                        </Link>
                      </li>
                      <li class="hover:bg-blue-100 px-3 ">
                        <Link href="/dashboard/profile" class="block py-2">
                          FAQ
                        </Link>
                      </li>
                      <li class="hover:bg-blue-100 px-3 border-t-[1px]">
                        <Link href="/dashboard/profile" class="block py-2">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class="h-12"></div>
      </header>
    </>
  );
});
