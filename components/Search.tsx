import axios from 'axios';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ISearch {
  search: string;
}

export default function Search() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearch>();
  const onSubmit: SubmitHandler<ISearch> = (data) => {
    const { search } = data;

    router.push(`/score/${search}`);
  };

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8'>
        <form className='mt-6  w-full' onSubmit={handleSubmit(onSubmit)}>
          <div className='px-4 flex justify-center items-center'>
            <label htmlFor='search' className='sr-only'></label>
            <input
              id='search'
              type='text'
              className={`rounded-md block  px-12 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                errors.search
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500 '
                  : ''
              }`}
              placeholder={`${
                errors.search
                  ? errors.search.message
                  : '연도와 월을 입력해주세요.'
              }`}
              {...register('search', {
                required: 'ex) 2206',
                maxLength: 4,
              })}
            />
            <button
              type='submit'
              className='py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
