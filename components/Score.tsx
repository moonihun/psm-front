import Search from './Search';

function Score({ data }: any) {
  console.log(data);
  return (
    <div className='overflow-x-auto sm:rounded-lg '>
      <Search />
      <h1 className='flex justify-center items-center w-full pb-3 font-bold'>
        {/* 20{scores[0].month.slice(0, 2)}년 {scores[0].month.slice(2, 4)}월 정기전 점수 */}
      </h1>
      <table className='m-auto w-full max-w-7xl text-sm text-left text-gray-500 dark:text-gray-400 shadow-md'>
        <thead className='text-xs text-gray-700 uppercase border-t border-b bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-4 py-4 '>
              이름
            </th>
            <th scope='col' className='text-center px-4 py-4'>
              그룹
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              게임1
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              게임2
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              게임3
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              게임4
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              게임5
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              게임6
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              핸디1
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              핸디2
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              핸디3
            </th>
            <th
              scope='col'
              className='text-center px-4 py-4 hidden md:table-cell'
            >
              여자핸디
            </th>
            <th scope='col' className='text-center px-4 py-4'>
              에버
            </th>
            <th scope='col' className='text-center px-4 py-4'>
              평균
            </th>
            <th scope='col' className='text-center px-4 py-4'>
              합계
            </th>
            <th scope='col' className='text-center px-4 py-4'>
              최종합계
            </th>
            <th scope='col' className='text-center px-4 py-4'>
              등수
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((member: any) => (
            <tr
              key={member.user_id + member.month}
              className={` bg-white border-b dark:bg-gray-800  dark:border-gray-700  dark:hover:bg-gray-600          
              ${member.sum === 0 && 'bg-gray-200 '}
              ${
                member.group === 'A'
                  ? 'bg-rose-50 hover:bg-[#FFEAF1]'
                  : member.group === 'B'
                  ? 'bg-[#F4F9FF] hover:bg-indigo-50'
                  : null
              } ${
                member.group === 'A' && member.rank === '1'
                  ? 'bg-[#FFEAF1]'
                  : member.group === 'B' && member.rank === '1'
                  ? 'bg-indigo-50'
                  : null
              }
              `}
            >
              <th
                scope='row'
                className='px-4 py-4 font-sm text-gray-700 dark:text-white whitespace-nowrap'
              >
                {member.name}
              </th>
              <td className='text-center px-4 py-4'>{member.group}</td>
              <td
                className={`text-center px-4 py-4 hidden md:table-cell ${
                  member.game1 > 200 ? 'text-rose-600' : null
                }`}
              >
                {member.game1}
              </td>
              <td
                className={`text-center px-4 py-4 hidden md:table-cell ${
                  member.game2 > 200 ? 'text-rose-600' : null
                }`}
              >
                {member.game2}
              </td>
              <td
                className={`text-center px-4 py-4 hidden md:table-cell ${
                  member.game3 > 200 ? 'text-rose-600' : null
                }`}
              >
                {member.game3}
              </td>
              <td
                className={`text-center px-4 py-4 hidden md:table-cell ${
                  member.game4 > 200 ? 'text-rose-600' : null
                }`}
              >
                {member.game4}
              </td>
              <td
                className={`text-center px-4 py-4 hidden md:table-cell  ${
                  member.game5 > 200 ? 'text-rose-600' : null
                }`}
              >
                {member.game5}
              </td>
              <td
                className={`text-center px-4 py-4 hidden md:table-cell ${
                  member.game6 > 200 ? 'text-rose-600' : null
                }`}
              >
                {member.game6}
              </td>
              <td className='text-center px-4 py-4 hidden md:table-cell'>
                {member.handi1}
              </td>
              <td className='text-center px-4 py-4 hidden md:table-cell'>
                {member.handi2}
              </td>
              <td className='text-center px-4 py-4 hidden md:table-cell'>
                {member.handi3}
              </td>
              <td className='text-center px-4 py-4 hidden md:table-cell'>
                {member.female_handi}
              </td>
              <td
                className={`text-center px-4 py-4 font-semibold  ${
                  member.avg > 200 ? 'text-rose-600' : 'text-indigo-700'
                }`}
              >
                {member.this_average}
              </td>
              <td className={`text-center px-4 py-4 font-semibold`}>
                {member.avg}
              </td>
              <td className='text-center px-4 py-4 font-semibold'>
                {member.sum}
              </td>
              <td className='text-center px-4 py-4 font-semibold'>
                {member.final_sum}
              </td>
              <td
                className={`text-center px-4 py-4 font-semibold ${
                  member.rank === '1' && 'text-rose-700'
                }`}
              >
                {member.rank}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Score;
