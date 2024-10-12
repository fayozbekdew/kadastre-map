import MapInput from "../components/MapInput";

function AddObject() {
  return (
    <div className="w-[1300px] h-screen flex  p-5">
      <form className="w-full flex flex-col items-center">
        <div className="flex justify-around w-full">
        <div className="flex flex-col w-full max-w-[500px]">
          <label className="flex flex-col gap-y-1 text-[20px]">
            Тип:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Вид:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Кадастровый номер:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]" l>
            Кадастровый квартал:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Адрес:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Площадь уточненная:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Статус:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Категория земель
            <textarea
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              cols="30"
              rows="2"
            ></textarea>
          </label>
        </div>
        <div className="flex flex-col w-full max-w-[500px]">
          <label className="flex flex-col gap-y-1 text-[20px]">
            Разрешенное использование:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Форма собственности:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Кадастровая стоимость:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата определения:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата утверждения:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата внесения сведений:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата применения:
            <input
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <MapInput/>
          
        </div>
        </div>
        <button className="w-[400px] py-1 outline-none rounded-sm mt-6 text-[20px] font-semibold bg-green-400">
            Submit
          </button>
      </form>
    </div>
  );
}

export default AddObject;
