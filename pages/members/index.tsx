import Link from 'next/link';
import React from 'react';

function Members() {
  const mockData = [
    {
      id: Date.now(),
      name: 'Hong gildong',
      group: 'A',
      avg: '199',
    },
  ];
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between items-center m-8'>
        <Link href='/members/add'>
          <a className=' whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
            Add Member
          </a>
        </Link>
        <h1>Members : {mockData.length}</h1>
      </div>

      <div className=' overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Group
              </th>
              <th scope='col' className='px-6 py-3'>
                AVG
              </th>

              <th scope='col' className='px-6 py-3'>
                <span className='sr-only'>Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((data) => {
              return (
                <tr
                  key={data.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
                  >
                    {data.name}
                  </th>
                  <td className='px-6 py-4'>{data.group}</td>
                  <td className='px-6 py-4'>{data.avg}</td>
                  <td className='px-6 py-4 text-right'>
                    <Link href='#'>
                      <a className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                        Edit
                      </a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Members;
