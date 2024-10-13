import React from "react";
import MapInput from "../components/MapInput";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddObjectForm() {
  const [forms, setForms] = useState([{}]); // Birinchi form boshiga formalar arrayi
  const formRefs = useRef([]); // Har bir form uchun referenslar

  // Yangi form qo'shish
  const addNewForm = () => {
    setForms([...forms, {}]);
  };

  // Barcha form ma'lumotlarini olish va Supabase'ga yuborish
  const onSubmit = async () => {
    const allData = formRefs.current.map((formRef) => {
      const data = formRef.getValues(); // Har bir formadan ma'lumotlarni olish
      return {
        ...data,
        koordinate: formRef.koordinateRef.current?.value.split(",").map(Number),
      };
    });

    const { data, error } = await supabase.from("objects").insert(allData); // Ma'lumotlarni yuborish
    if (error) {
        toast("Все поля должны быть заполнены", {
            type: "error",
            position: "top-center",
          });
    } else {
      setForms([]);
      toast("Все объекты успешно добавлены", {
        type: "success",
        position: "top-right",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Har bir forma uchun iteratsiya */}
      {forms.map((_, index) => (
        <FormComponent
          key={index}
          ref={(el) => (formRefs.current[index] = el)} // Form referenslarini to'ldirish
        />
      ))}

      <div className="flex gap-x-4 mt-6 mb-8">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          onClick={addNewForm}
        >
          новый объект
        </button>
        <button
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
          onClick={onSubmit}
        >
          Сохранить информацию
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

// Form componentini yaratamiz
const FormComponent = React.forwardRef((props, ref) => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const koordinateRef = useRef(null);

  // Ref orqali funksiyalarni tashqi komponentlarga o'tkazamiz
  React.useImperativeHandle(ref, () => ({
    getValues,
    koordinateRef,
  }));

  return (
    <form
      onSubmit={handleSubmit(() => {})}
      className="w-full flex flex-col pb-8 items-center border-b mb-4"
    >
      <div className="flex justify-around w-full">
        <div className="flex flex-col w-full max-w-[500px]">
          <label className="flex flex-col gap-y-1 text-[20px]">
            Тип:
            <input
              {...register("type", { required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Вид:
            <input
              {...register("view",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Кадастровый номер:
            <input
              {...register("kadastreNumber",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Кадастровый квартал:
            <input
              {...register("kadastreKvartal", { required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Адрес:
            <input
              {...register("adress",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Площадь уточненная:
            <input
              {...register("areaAdjusted", { required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Статус:
            <input
              {...register("status",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Категория земель
            <select
              {...register("category",{ required: true })}
              className="w-full border h-12 border-gray-700 outline-none pl-2 rounded-sm"
              cols="30"
              rows="2"
            >
                <option selected value="промышленности">Земли промышленности</option>
                <option value="поселений">земли поселений</option>
                <option value="сельскохозяйственного">земли сельскохозяйственного назначения </option>
            </select>
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
        </div>

        <div className="flex flex-col w-full max-w-[500px]">
          <label className="flex flex-col gap-y-1 text-[20px]">
            Разрешенное использование:
            <input
              {...register("useArea",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Форма собственности:
            <input
              {...register("ownership",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Кадастровая стоимость:
            <input
              {...register("kadasteValue",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата определения:
            <input
              {...register("dateDetermination",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата утверждения:
            <input
              {...register("approvaDate",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата внесения сведений:
            <input
              {...register("enteringDate",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата применения:
            <input
              {...register("dateApplication",{ required: true })}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
            {errors.type && <span className="text-red-500">Это поле является обязательным</span>}
          </label>
          <MapInput koordinate={koordinateRef} />
        </div>
      </div>
    </form>
  );
});

export default AddObjectForm;
