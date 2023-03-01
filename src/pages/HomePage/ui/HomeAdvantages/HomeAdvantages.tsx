import { PlusCircleIcon } from '@heroicons/react/24/solid'
import moneyBack from './assets/moneyBack.svg'
import safePurchase from './assets/safePurchase.svg'
import check from './assets/check.svg'

export const HomeAdvantages = () => {
  return (
      <ul className='flex'>
          <li className="group relative max-w-sm rounded-l-xl
           bg-slate-100 px-8 pt-8 pb-10 hover:bg-slate-50"
          >
              <div className='flex items-center gap-6'>
                  <img
                      alt="moneyBackIcon"
                      className='h-5 w-5'
                      src={moneyBack}
                  />

                  <div className='text-xl font-semibold text-slate-700'>
                      Money back guarantee
                  </div>
              </div>

              <div className='pl-[44px] pt-3 text-sm text-slate-600'>
                  And if you simply don’t like the car,
                  you can return it to us within 14 days of receiving it.
              </div>

              <div className='absolute right-3 bottom-3
               hidden items-center gap-4 text-2xl group-hover:flex'
              >
                  <div className='text-sm font-semibold text-blue-800'>
                      More
                  </div>

                  <PlusCircleIcon className='h-6 w-6 text-blue-800' />
              </div>
          </li>

          <li className="group relative max-w-sm border-x bg-slate-100
           px-8 pt-8 pb-10 hover:bg-slate-50"
          >
              <div className='flex items-center gap-6'>
                  <img
                      alt="safePurchaseIcon"
                      className='h-5 w-5'
                      src={safePurchase}
                  />

                  <div className='text-xl font-semibold text-slate-700'>
                      Safe purchase
                  </div>
              </div>

              <div className='pl-[44px] pt-3 text-sm text-slate-600'>
                  We carefully inspect each car and
                  guarantee it is in good condition before the purchase.
              </div>

              <div className='absolute right-3 bottom-3
               hidden items-center gap-4 text-2xl group-hover:flex'
              >
                  <div className='text-sm font-semibold text-blue-800'>
                      More
                  </div>

                  <PlusCircleIcon className='h-6 w-6 text-blue-800' />
              </div>
          </li>

          <li className="group relative max-w-sm rounded-r-lg
           bg-slate-100 px-8 pt-8 pb-10 hover:bg-slate-50"
          >
              <div className='flex items-center gap-6'>
                  <img
                      alt="checkIcon"
                      className='h-5 w-5'
                      src={check}
                  />

                  <div className='text-xl font-semibold text-slate-700'>
                      6-month warranty
                  </div>
              </div>

              <div className='pl-[44px] pt-3 text-sm text-slate-600'>
                  In addition, with every car you receive an extended warranty.
              </div>

              <div className='absolute right-3 bottom-3
               hidden items-center gap-4 text-2xl group-hover:flex'
              >
                  <div className='text-sm font-semibold text-blue-800'>
                      More
                  </div>

                  <PlusCircleIcon className='h-6 w-6 text-blue-800' />
              </div>
          </li>
      </ul>
  )
}
