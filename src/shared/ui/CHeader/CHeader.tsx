import {
  BookmarkIcon,
  ChevronDownIcon, HeartIcon, ShoppingCartIcon, UserIcon,
} from '@heroicons/react/24/outline'
import { CButton } from '../CButton'
import { CHoverMenu } from '../CHoverMenu'
import british from './assets/british.png'
import carvagoLogo from './assets/carvago-logo.svg'

const serviceButtons = ['CarAudit \u2122', 'Delivery', 'Financing', 'Warranty']

export const CHeader = () => {
  return (
      <header className="flex h-[70px] items-center">
          <div className="flex h-full w-full items-center justify-between px-7">
              <div className="flex items-center gap-6 ">
                  <img src={carvagoLogo} />

                  <div className="flex gap-3">
                      <CButton variant='underline'>
                          Buy
                      </CButton >

                      <CButton variant='underline'>
                          How it works
                      </CButton>

                      <CButton variant='underline'>
                          Review
                      </CButton>

                      <CHoverMenu button={({ open, delayClose }) => (
                          <CButton
                              classes='hover:no-underline relative'
                              onMouseEnter={open}
                              onMouseLeave={delayClose}
                              variant='underline'
                          >
                              Services
                              <ChevronDownIcon className='h-4 w-4' />
                          </CButton>
                      )}
                      >
                          {({ close, open, delayClose }) => (
                              <div
                                  className="w-36 rounded-md border
                                  border-gray-200 bg-white shadow-lg"
                                  onMouseEnter={open}
                                  onMouseLeave={delayClose}
                              >
                                  <ul className="relative flex
                                   flex-col gap-1 overflow-hidden
                                   rounded-md bg-white py-2 px-4"
                                  >
                                      {serviceButtons.map((service) => {
                                        return (
                                            <li key={service}>
                                                <CButton
                                                    classes='w-full
                                                    justify-center'
                                                    onClick={close}
                                                    variant='light'
                                                >
                                                    {service}
                                                </CButton>
                                            </li>
                                        )
                                      })}
                                  </ul>
                              </div>
                          )}
                      </CHoverMenu>
                  </div>
              </div>

              <div className='flex items-center gap-7 text-indigo-900'>
                  <div className='flex items-center gap-4'>

                      <CHoverMenu button={({ open, delayClose }) => (
                          <HeartIcon
                              className='h-6 w-6'
                              onMouseEnter={open}
                              onMouseLeave={delayClose}
                          />
                      )}
                      >
                          {({ open, delayClose }) => (
                              <div
                                  className="rounded-md border
                                  border-gray-200 bg-white shadow-lg"
                                  onMouseEnter={open}
                                  onMouseLeave={delayClose}
                              >
                                  <div className="relative overflow-hidden
                                   rounded-md bg-white"
                                  >
                                      <div>
                                          <div className='bg-gray-100
                                           px-4 py-6'
                                          >
                                              <CButton
                                                  classes='mb-6'
                                                  size='lg'
                                                  variant='primary'
                                              >
                                                  Login
                                              </CButton>

                                              <p className='flex justify-center
                                               gap-2 text-sm text-gray-500'
                                              >
                                                  Don&apos;t have an account?
                                                  <CButton
                                                      classes='font-semibold
                                                      hover:underline-offset-8
                                                      decoration-1'
                                                      variant='underline'
                                                  >
                                                      Register
                                                  </CButton>
                                              </p>
                                          </div>

                                          <div
                                              className='py-4 text-center
                                              text-sm text-gray-500'
                                          >
                                              <p className='font-semibold'>
                                                  To follow your favourite cars
                                              </p>

                                              <p>
                                                  you must be logged in
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          )}
                      </CHoverMenu>

                      <CHoverMenu button={({ open, delayClose }) => (

                          <div
                              className='flex gap-3'
                              onMouseEnter={open}
                              onMouseLeave={delayClose}
                          >
                              <UserIcon className='h-6 w-6' />
                              Login
                          </div>
                      )}
                      >
                          {({ open, delayClose }) => (
                              <div
                                  className="rounded-md border
                                  border-gray-200 bg-white shadow-lg"
                                  onMouseEnter={open}
                                  onMouseLeave={delayClose}
                              >
                                  <div className="relative overflow-hidden
                                  rounded-md bg-white"
                                  >
                                      <div className='border-b
                                           bg-gray-100 px-4 py-6'
                                      >
                                          <CButton
                                              classes='mb-6'
                                              size='lg'
                                              variant='primary'
                                          >
                                              Login
                                          </CButton>

                                          <p className='flex justify-center
                                               gap-2 text-sm text-gray-500'
                                          >
                                              Don&apos;t have an account?
                                              <CButton
                                                  classes='font-semibold
                                                      hover:underline-offset-8
                                                      decoration-1'
                                                  variant='underline'
                                              >
                                                  Register
                                              </CButton>
                                          </p>
                                      </div>

                                      <ul className='flex cursor-default
                                      flex-col gap-3 p-6
                                      text-blue-300/75'
                                      >
                                          <li className='flex
                                          items-center gap-2'
                                          >
                                              <ShoppingCartIcon
                                                  className='h-6 w-6'
                                              />
                                              Orders in progress
                                          </li>

                                          <li className='flex
                                          items-center gap-2'
                                          >
                                              <HeartIcon
                                                  className='h-6 w-6'
                                              />
                                              Favorite cars
                                          </li>

                                          <li className='flex
                                          items-center gap-2'
                                          >
                                              <BookmarkIcon
                                                  className='h-6 w-6'
                                              />
                                              Saved searches
                                          </li>

                                          <li className='flex
                                          items-center gap-2'
                                          >
                                              <UserIcon className='h-6 w-6' />

                                              My profile
                                          </li>

                                      </ul>
                                  </div>
                              </div>
                          )}
                      </CHoverMenu>
                  </div>

                  <div className='h-10 border' />

                  <div className='flex items-center gap-7'>
                      <CButton className='flex items-center gap-2'>
                          <img
                              alt="language"
                              className='h-7 w-7 rounded-full'
                              src={british}
                          />

                          <ChevronDownIcon className='h-4 w-4' />
                      </CButton>

                      <div>
                          EUR
                      </div>
                  </div>
              </div>
          </div>
      </header>
  )
}
