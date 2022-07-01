import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

interface ISignin {
  username: string;
  password: string;
}

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignin>();
  const onSubmit: SubmitHandler<ISignin> = (data) => {
    console.log(data);

    const { username, password } = data;

    axios.post(
      '/signin',
      {
        username,
        password,
      },
      {
        method: 'post',
      }
    );
  };

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'></p>
          </div>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='username' className='sr-only'>
                  Username
                </label>
                <input
                  id='username'
                  type='text'
                  autoComplete='username'
                  className={`rounded-md mb-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                    errors.username
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500 '
                      : ''
                  }`}
                  placeholder={`${
                    errors.username ? errors.username?.message : 'Username'
                  }`}
                  {...register('username', {
                    required: '이름을 입력해주세요.',
                  })}
                />
              </div>

              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  autoComplete='current-password'
                  className={`rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                    errors.password
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500 '
                      : ''
                  }`}
                  placeholder={`${
                    errors.password ? errors.password.message : 'Password'
                  }`}
                  {...register('password', {
                    required: '패스워드를 입력해주세요.',
                  })}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  name='remember-me'
                  type='checkbox'
                  className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='remember-me'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember
                </label>
              </div>

              <div className='text-sm flex'>
                <p className='mr-2'>Don’t have an Account?</p>
                <Link href='/signup'>
                  <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                    Sign Up
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
