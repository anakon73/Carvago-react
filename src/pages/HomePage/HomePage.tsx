/* eslint-disable max-len */
import { HomeAdvantages } from './ui/HomeAdvantages'
import { HomeSearchForm } from '@/widget/HomeSeachForm'

export const HomePage = () => {
  return (
      <div className="
          relative z-10 block h-[40rem]
          bg-[url('https://carvago.com/images/B2C-homepage/hero.webp')]
          bg-cover bg-center
          bg-no-repeat p-0 "
      >
          <div className="relative z-10 h-full">
              <div className='px-4'>
                  <div className=" mx-7 flex">
                      <div className='relative top-11 w-full'>
                          <HomeSearchForm />
                      </div>
                  </div>
              </div>
          </div>

          <div
              className="absolute
                 inset-x-0 bottom-0
                 h-80 w-full
                 bg-[linear-gradient(0deg,_rgb(31,_43,_89)_28%,_rgba(31,_43,_89,_0)_100%)]
                 after:absolute
                 after:bottom-0
                 after:z-[8]
                 after:block after:h-[50px] after:w-full after:bg-white
                 after:content-[''] after:[clip-path:polygon(100%_0,_0%_100%,_100%_100%)]"
          />

          <div className='relative bottom-[10%] z-[9]
           flex justify-center pb-16'
          >
              <HomeAdvantages />
          </div>
      </div>
  )
}
