import axios from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

interface ISignup {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>();
  const onSubmit: SubmitHandler<ISignup> = (data) => {
    const { email, username, password, confirmPassword } = data;

    axios
      .post(
        '/users/signup',
        {
          email,
          username,
          password,
          confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'post',
        }
      )
      .then(() => {});
  };

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Sign up to PSM
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'></p>
          </div>
          <form className=' mt-8 space-y-6' onSubmit={handleSubmit(onSubmit)}>
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
                  className={`rounded-md mb-1 block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                    errors.password
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500 '
                      : ''
                  }`}
                  placeholder={`${
                    errors.password ? errors.password?.message : 'Password'
                  }`}
                  {...register('password', {
                    required: '패스워드를 입력해주세요.',
                    min: 8,
                  })}
                />
              </div>
              <div>
                <label htmlFor='confirmPassword' className='sr-only'>
                  Password
                </label>
                <input
                  id='confirmPassword'
                  type='password'
                  className={`rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${
                    errors.confirmPassword
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500 '
                      : ''
                  }`}
                  placeholder={`${
                    errors.confirmPassword
                      ? errors.confirmPassword?.message
                      : 'Confirm Password'
                  }`}
                  {...register('confirmPassword', {
                    required: '확인 패스워드를 입력해주세요.',
                    min: 8,
                  })}
                />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm flex w-full justify-end'>
                <p className=' mr-2'>Already have an account? </p>

                <Link href='/signin'>
                  <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                    SIGN IN
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
