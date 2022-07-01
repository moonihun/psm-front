import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ScoreForm from '../../components/ScoreForm';

function ScoreAdd({ data }) {
  const router = useRouter();

  const { register, handleSubmit } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => {
    const { month, round } = data;
    const newData = Object.entries(data)
      .filter((game) => game[0].includes('game'))
      .map((entrie, idx) => {
        const key = entrie[0].slice(0, 5);
        return {
          [key]: entrie[1],
          id: entrie[0].slice(6),
        };
      });

    const map = new Map();
    newData.forEach((item) =>
      map.set(item.id, { ...map.get(item.id), ...item })
    );
    const gameData = Array.from(map.values());

    axios.post(
      'http://localhost:4000/scores/add',
      { gameData, round, month },
      {
        method: 'post',
      }
    );

    router.push(`/score/${month}`);
  };

  return (
    <>
      <div className='mt-8'>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-center itemscen mb-4'>
            <input
              className='border p-2 rounded mr-4 border-indigo-300'
              type='text'
              id='month'
              placeholder='연월'
              {...(register('month'), { required: true })}
            />
            <select
              className='border p-2 rounded border-indigo-300 '
              form='score_form'
              id='round'
              {...register('round')}
            >
              <option value='ONE'>1</option>
              <option value='TWO'>2</option>
            </select>
          </div>
          <div
            id='score_form'
            className='flex items-center justify-center mb-6'
          >
            <div className='px-6 border-b pb-2 text-gray-700 border-indigo-200 text-center'>
              이름
            </div>
            <div className='px-6 border-b pb-2 text-gray-700 border-indigo-200 text-center'>
              게임1
            </div>
            <div className='px-6 border-b pb-2 text-gray-700 border-indigo-200 text-center'>
              게임2
            </div>
            <div className='px-6 border-b pb-2 text-gray-700 border-indigo-200 text-center'>
              게임3
            </div>
          </div>
          {data.map((user) => (
            <div
              key={user.id}
              className='flex items-center justify-center mb-6'
            >
              <div className='text-gray-700'>{user.username}</div>
              <ScoreForm register={register} user={user} />
            </div>
          ))}
          <div className='flex justify-center'>
            <button
              type='submit'
              className='py-3 px-6 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              등록!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ScoreAdd;

export async function getServerSideProps() {
  const { data } = await axios.get('http://localhost:4000/users');

  return {
    props: {
      data,
    },
  };
}
