import MapInput from "../components/MapInput";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { supabase } from "../lib/supabaseClient";
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddObject() {
  const { register, handleSubmit } = useForm();
  const koorfinate = useRef(null)
  const formRef = useRef(null)
  const onSubmit = data => {
    const newObg = {
      ...data,
      koordinate:koorfinate.current?.value.split(',').map(Number)
    }
    const addObject = async (objectData) => {
      const { data, error } = await supabase
        .from('objects')
        .insert([objectData]);
    
      if (error) {
        console.error('Error adding object:', error);
      } else {
        toast('Added', { type: 'success',position: 'top-right' });
      }
    };    
    addObject(newObg);
    formRef.current.reset();
    koorfinate.current.value = null;
  }
  return (
    <div className="w-[1300px] h-screen flex flex-col p-5">
      <ToastContainer />
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center">
        <div className="flex justify-around w-full">
        <div className="flex flex-col w-full max-w-[500px]">
          <label className="flex flex-col gap-y-1 text-[20px]">
            Тип:
            <input
              {...register('type')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Вид:
            <input
              {...register('view')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Кадастровый номер:
            <input
              {...register('kadastreNumber')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]" l>
            Кадастровый квартал:
            <input
              {...register('kadastreKvartal')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Адрес:
            <input
              {...register('adress')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Площадь уточненная:
            <input
            {...register('areaAdjusted')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Статус:
            <input
            {...register('status')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Категория земель
            <textarea
              {...register('category')}
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
            {...register('useArea')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Форма собственности:
            <input
            {...register('ownership')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            Кадастровая стоимость:
            <input
            {...register('kadasteValue')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="text"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата определения:
            <input
            {...register('dateDetermination')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата утверждения:
            <input
            {...register('approvaDate')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата внесения сведений:
            <input
            {...register('enteringDate')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <label className="flex flex-col gap-y-1 text-[20px]">
            дата применения:
            <input
            {...register('dateApplication')}
              className="w-full border border-gray-700 outline-none pl-2 rounded-sm"
              type="date"
            />
          </label>
          <MapInput koordinate={koorfinate}/>
          
        </div>
        </div>
        
        <button  className="w-[400px] py-1 outline-none rounded-sm mt-6 text-[20px] font-semibold bg-green-400">
        Сохранить информацию
          </button>
      </form>
    </div>
  );
}

export default AddObject;
