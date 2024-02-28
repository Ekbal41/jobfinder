import { component$ } from "@builder.io/qwik";
import LightThemeImage from "../../../media/light.png";
import DarkThemeImage from "../../../media/dark.png";
export default component$(() => {
  return (
    <div class="">
      <div class="border-b[1px] pb-2">
        <h1 class="font-semibold text-lg">Account Info</h1>
      </div>
      <div class="mt-3 lg:w-1/2">
        <div class="mb-4 ">
          <label class="block text-sm font-medium text-gray-700 mb-3">
            Name
          </label>
          <input
            type="text"
            class="w-full border-[1px] bg-gray-50 border-gray-300 rounded-md py-2 px-3"
            placeholder="First Name"
          />
          <span class="text-xs text-gray-500">
            This is the name that will be displayed on your profile and in
            emails.{" "}
          </span>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">
            Email
          </label>
          <input
            type="email"
            class="w-full border-[1px] bg-gray-50 border-gray-300 rounded-md py-2 px-3"
            placeholder="Your Email"
          />
          <span class="text-xs text-gray-500">
            Your email is used for login and communication.
          </span>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">
            Date of Birth
          </label>
          <input
            type="text"
            class="w-full border-[1px] bg-gray-50 border-gray-300 rounded-md py-2 px-3"
            placeholder="Your Birthday"
            onClick$={(e) => {
              const inputElement = e.target as HTMLInputElement;
              inputElement.type = "date";
            }}
            onBlur$={(e) => {
              const inputElement = e.target as HTMLInputElement;
              if (inputElement.value === "") {
                inputElement.type = "text";
              }
            }}
          />
          <span class="text-xs text-gray-500">
            Your date of birth is used to calculate your age.
          </span>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">
            Appearance
          </label>
          <div class="flex gap-4">
            <div>
              <button
                class="border-[1px] border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none
            "
              >
                <img
                  src={LightThemeImage}
                  class=" rounded-sm"
                  height={150}
                  width={150}
                />
              </button>
              <p class="text-center text-gray-500 text-xs mt-1">Ligh theme</p>
            </div>
            <div>
              {" "}
              <button
                class="border-[1px] border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none
            "
              >
                <img
                  height={150}
                  width={150}
                  src={DarkThemeImage}
                  class=" rounded-sm "
                />
              </button>
              <p class="text-center text-gray-500 text-xs mt-1">Dark theme</p>
            </div>
          </div>
        </div>
        <button class="bg-blue-600 text-white rounded-sm py-2 px-3 mt-2">
          Update Account
        </button>
      </div>
    </div>
  );
});
