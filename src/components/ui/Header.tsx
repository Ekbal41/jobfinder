import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ThunderIcon from "../../media/thunder.png";

export default component$(() => {
  const menuOpen = useSignal<boolean>(false);
  return (
    <>
      <header>
        <div class="bg-white shadow-sm fixed top-0 z-50 bg-opacity-80 backdrop-blur-md w-full">
          <div class="mx-auto max-w-screen-xl px-4  sm:px-6 py-4 lg:px-8">
            <div class="flex justify-between items-center">
              <Link
                href="/"
                class="uppercase text-lg md:text-2xl text-blue-600 font-semibold"
              >
                Jobify
              </Link>

              <div class="relative">
                <button
                  onClick$={() => (menuOpen.value = !menuOpen.value)}
                  class="flex gap-2 justify-center items-center hover:bg-blue-50 rounded-md"
                >
                  <p class="capitalize text-lg fpnt-semibold">Asif Ekbal</p>
                  <img
                    src={ThunderIcon}
                    alt="Asif Ekbal"
                    class="rounded-full object-cover"
                    height="20"
                    width="20"
                  />
                </button>
                {menuOpen.value && (
                  <div class="absolute right-0 bg-white w-48 rounded-sm shadow-md border-[1px] border-blue-100">
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
