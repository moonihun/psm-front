import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import ScoreForm from '../../components/ScoreForm';
import Search from '../../components/Search';

function ScoreIndex({ data }: any) {
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

    // router.push(`/score/${month}`);
  };

  return (
    <div className='w-full h-full flex flex-col justify-center items-center md:flex-row'>
      <Link href='/score/search'>
        <a className='flex flex-col items-center '>
          <p>점수조회</p>
          <button className='px-4 py-4 m-3 w-24  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Search
          </button>
        </a>
      </Link>
      <Link href='/score/add'>
        <a className='flex flex-col items-center '>
          <p>점수등록</p>
          <button className='px-4 py-4 m-3 w-24  border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Add
          </button>
        </a>
      </Link>
      <Link href='/score/update'>
        <a className='flex flex-col items-center'>
          <p>점수수정</p>
          <button className='px-4 py-4 m-3 w-24 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            Update
          </button>
        </a>
      </Link>
    </div>
  );
}

export default ScoreIndex;
