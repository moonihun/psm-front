/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Header() {
  return (
    <Popover className='relative bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <a>
                <span className='font-extrabold text-2xl text-indigo-600 h-8 w-auto sm:h-10 hover:text-indigo-500 '>
                  PSM
                </span>
              </a>
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden md:flex space-x-10'>
            <Link href='/dues'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                DUES
              </a>
            </Link>
            <Link href='/members'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                MEMBERS
              </a>
            </Link>
            <Link href='/score'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                SCORE
              </a>
            </Link>
          </Popover.Group>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <Link href='/signin'>
              <a className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                SIGN IN
              </a>
            </Link>

            <Link href='/signup'>
              <a className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                SIGN UP
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <span className='h-8 w-auto font-extrabold text-2xl text-indigo-600'>
                    <Link href='/'>
                      <a>PSM</a>
                    </Link>
                  </span>
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <div className='flex flex-col justify-center'>
                    <Link href='/'>
                      <a className='mb-8 text-base font-medium text-gray-900 hover:text-gray-700'>
                        HOME
                      </a>
                    </Link>
                    <Link href='/dues'>
                      <a className='mb-8 text-base font-medium text-gray-900 hover:text-gray-700'>
                        DUES
                      </a>
                    </Link>

                    <Link href='/members'>
                      <a className='mb-8 text-base font-medium text-gray-900 hover:text-gray-700'>
                        MEMBERS
                      </a>
                    </Link>
                    <Link href='/score'>
                      <a className='text-base font-medium text-gray-900 hover:text-gray-700'>
                        SCORE
                      </a>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div>
                <Link href='/signup'>
                  <a className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                    SIGN UP
                  </a>
                </Link>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Existing customer?{' '}
                  <Link href='/signin'>
                    <a className='text-indigo-600 hover:text-indigo-500'>
                      SIGN IN
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
