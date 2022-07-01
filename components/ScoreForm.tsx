import React from 'react';
import { useForm } from 'react-hook-form';

function ScoreForm({ user, register }: any) {
  return (
    <>
      <input
        id={`game1_${user.id}`}
        className='text-center py-2 rounded-tl rounded-bl border w-20 ml-3'
        type='text'
        placeholder='Game1'
        maxLength={3}
        {...(register(`game1_${user.id}`),
        {
          pattern: /^(0|[1-9]\d*)(\.\d+)?$/,
        })}
      />
      <input
        id={`game2_${user.id}`}
        className='text-center py-2 border w-20'
        type='text'
        placeholder='Game2'
        maxLength={3}
        {...register(`game2_${user.id}`)}
      />
      <input
        id={`game3_${user.id}`}
        className='text-center py-2 rounded-tr rounded-br border w-20'
        type='text'
        placeholder='Game3'
        maxLength={3}
        {...register(`game3_${user.id}`)}
      />
    </>
  );
}

export default ScoreForm;
