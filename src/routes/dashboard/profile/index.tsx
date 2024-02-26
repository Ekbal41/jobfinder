import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <div>
      <div class="mt-2">
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div class="p-4 bg-white rounded-sm border-t-[4px] border-blue-600 h-fit">
            <h1 class="font-semibold text-lg">Asif Ekbal</h1>
            <p class="text-md text-gray-600 ">Owner at His Company Inc.</p>
            <p class=" text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              doloribus architecto voluptas veniam porro asperiores nobis.
            </p>
            <div class="bg-gray-100 rounded-md mt-3 p-3">
              <div class="flex justify-between border-b-[1px] pb-3">
                <p class="text-gray-500">Status</p>
                <div class="bg-green-500 px-2 text-sm text-white rounded-md">
                  Active
                </div>
              </div>
              <div class="flex justify-between pt-2">
                <p class="text-gray-500">Member Sincs</p>
                <div class="text-gray-500">20 Jan 2002</div>
              </div>
            </div>
          </div>
          <div class=" lg:col-span-2">
            <div class="p-4 bg-white rounded-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis ipsa provident vitae voluptas pariatur facere
              accusamus ipsum enim, quibusdam commodi! Voluptatem ullam
              aspernatur dolore eos quo quis asperiores debitis, laborum iste
              perspiciatis facilis! Magni perferendis laboriosam voluptas amet
              ratione atque ad distinctio dolorum, debitis nesciunt autem ea
              soluta velit quibusdam ipsa assumenda voluptatem. Non dignissimos
              quibusdam voluptatem dicta, doloribus quos eaque reprehenderit
              provident itaque ad explicabo, odio harum pariatur molestiae
              expedita sit blanditiis a? Beatae, quod veritatis iure minima
              deleniti porro quidem amet officia unde sed, vitae ea sapiente
              quia libero cupiditate exercitationem labore inventore ut eligendi
              quasi eos! Corrupti.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
