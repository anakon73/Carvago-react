/* eslint-disable react/jsx-closing-tag-location */
import {
  ArrowTrendingDownIcon,
  ArrowUturnLeftIcon, ChevronRightIcon,
} from '@heroicons/react/24/outline'

import {
  ExclamationCircleIcon, PlusCircleIcon,
} from '@heroicons/react/24/solid'

import { CButton } from '@/shared/ui/CButton'
import { CAutocomplete } from '@/shared/ui/CAutocomplete'
import { CCheckbox } from '@/shared/ui/CCheckbox'
import { CCheckboxGroup } from '@/shared/ui/CCheckboxGroup'
import { CColorPicker } from '@/shared/ui/CColorPicker'

const price: {
  value: number
  label: string
}[] = [
  { value: 1, label: '2000' },
  { value: 2, label: '3000' },
  { value: 3, label: '4000' },
  { value: 4, label: '5000' },
  { value: 5, label: '6000' },
  { value: 6, label: '7000' },
  { value: 7, label: '8000' },
  { value: 8, label: '10000' },
  { value: 9, label: '12500' },
  { value: 10, label: '15000' },
  { value: 11, label: '17500' },
  { value: 12, label: '20000' },
  { value: 13, label: '25000' },
  { value: 14, label: '30000' },
  { value: 15, label: '35000' },
  { value: 16, label: '40000' },
  { value: 17, label: '50000' },
  { value: 18, label: '75000' },
  { value: 19, label: '100000' },
  { value: 20, label: '150000' },
]
const registerDate: {
  value: number
  label: string
}[] = [
  { value: 1, label: '2023' },
  { value: 2, label: '2022' },
  { value: 3, label: '2021' },
  { value: 4, label: '2020' },
  { value: 5, label: '2019' },
  { value: 6, label: '2018' },
  { value: 7, label: '2017' },
  { value: 8, label: '2016' },
  { value: 9, label: '2015' },
  { value: 10, label: '2014' },
  { value: 11, label: '2013' },
  { value: 12, label: '2012' },
  { value: 13, label: '2011' },
  { value: 14, label: '2010' },
  { value: 15, label: '2009' },
  { value: 16, label: '2008' },
  { value: 17, label: '2007' },
  { value: 18, label: '2006' },
  { value: 19, label: '2005' },
  { value: 20, label: '2004' },
  { value: 21, label: '2003' },
]
const kmsDriven: {
  value: number
  label: string
}[] = [
  { value: 0, label: 'Any' },
  { value: 1, label: '2500' },
  { value: 2, label: '5000' },
  { value: 3, label: '10000' },
  { value: 4, label: '15000' },
  { value: 5, label: '20000' },
  { value: 6, label: '30000' },
  { value: 7, label: '40000' },
  { value: 8, label: '50000' },
  { value: 9, label: '60000' },
  { value: 10, label: '70000' },
  { value: 11, label: '80000' },
  { value: 12, label: '90000' },
  { value: 13, label: '100000' },
  { value: 14, label: '125000' },
  { value: 15, label: '150000' },
  { value: 16, label: '175000' },
  { value: 17, label: '200000' },
]
const transmissin: string[] = ['Manual', 'Automatic', 'Semi-automatic']
const fuels: string[] = [
  'CNG',
  'Diesel',
  'Electric',
  'Ethanol',
  'Hybrid',
  'Hydrogen',
  'LPG',
  'Other fuel type',
  'Petrol',
]

const colors = [
  'yellow',
  'orange',
  'red',
  'purple',
  'blue',
  'green',
  'SandyBrown',
  'beige',
  'white',
  'black',
  'gray',
  'silver',
  'gold',
]

export const SearchForm = () => {
  const [minPrice, setMinPrice] = useState({ value: 0, label: '' })
  const [maxPrice, setMaxPrice] = useState({ value: 0, label: '' })
  const [minRegisterDate, setMinRegisterDate]
  = useState([0])
  const [maxRegisterDate, setMaxRegisterDate]
  = useState([0])
  const [minKmsDriven, setMinKmsDriven]
  = useState([0])
  const [maxKmsDriven, setMaxKmsDriven]
  = useState([0])
  const [selectedTransmissin, setSelectedTransmissin] = useState<string[]>([])
  const [selectedFuels, setSelectedFuels] = useState<string[]>([])
  const [selectedColors, setSelecetedColors] = useState<string[]>([])

  const onChangeTransmission = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (selectedTransmissin.includes(value)) {
      const filteredValues = selectedTransmissin.filter((item) => {
        return item !== value
      })
      setSelectedTransmissin([...filteredValues])
    }
    else { setSelectedTransmissin([...selectedTransmissin, value]) }
  }
  const onChangeFuels = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (selectedFuels.includes(value)) {
      const filteredValues = selectedFuels.filter((item) => {
        return item !== value
      })
      setSelectedFuels([...filteredValues])
    }
    else { setSelectedFuels([...selectedFuels, value]) }
  }
  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    if (selectedColors.includes(value)) {
      const filteredValues = selectedColors.filter((item) => {
        return item !== value
      })
      setSelecetedColors([...filteredValues])
    }
    else { setSelecetedColors([...selectedColors, value]) }
  }

  return (
      <div className="w-60 bg-white p-6">
          <CButton
              classes='text-indigo-600 gap-1'
              variant="link"
          >
              <ArrowUturnLeftIcon className='h-4 w-4' />
              Previous filters
          </CButton>

          <div className='mx-[-2.2rem] my-8 h-[1px] w-auto bg-slate-200' />

          <div>
              <div className='text-sm font-semibold text-slate-700'>
                  MAKE AND MODEL
              </div>

              <CButton
                  classes='border w-full rounded-lg p-2 my-6'
                  variant='border'
              >
                  <div className='flex flex-1 items-center justify-between'>
                      <div className='flex items-center gap-1'>
                          <PlusCircleIcon className='h-5 w-5 text-indigo-600' />

                          <span className='text-slate-400'>
                              Add a car
                          </span>
                      </div>

                      <ChevronRightIcon className='h-5 w-5 text-indigo-600' />
                  </div>
              </CButton>

              <div className='text-sm font-semibold text-slate-700'>
                  PRICE VAT INCL. (EUR)
              </div>

              <div className='flex'>
                  <CAutocomplete
                      itemsList={price}
                      label={minPrice}
                      onChange={setMinPrice}
                      placeholder='From'
                      rounededSide='left'
                      variant='border'
                  />

                  <CAutocomplete
                      itemsList={price}
                      label={maxPrice}
                      onChange={setMaxPrice}
                      placeholder='To'
                      rounededSide='right'
                      variant='border'
                  />
              </div>

              <div className='my-4 rounded-md bg-slate-100 py-3 px-2'>
                  <CCheckbox>
                      <div className='flex items-center'>
                          <div
                              className='whitespace-nowrap
                              text-sm text-slate-600'
                          >
                              Discounted cars
                          </div>

                          <ExclamationCircleIcon
                              className='h-4 w-4 self-end text-slate-400'
                          />

                          <ArrowTrendingDownIcon
                              className='h-5 w-5 text-orange-400'
                          />
                      </div>
                  </CCheckbox>
              </div>

              <div className='px-2'>
                  <CCheckbox>
                      VAT deducion
                  </CCheckbox>
              </div>

              <div>
                  <div className='mt-5 mb-1 text-sm font-semibold text-slate-700'>
                      REGISTRATION FROM
                  </div>

                  <div className='flex'>

                      <CAutocomplete
                          itemsList={[{ value: 0, label: 'From' },
                            ...registerDate]}
                          label={minRegisterDate}
                          onChange={setMinRegisterDate}
                          placeholder='From'
                          rounededSide='left'
                          variant='border'
                      />

                      <CAutocomplete
                          itemsList={[{ value: 0, label: 'To' },
                            ...registerDate]}
                          label={maxRegisterDate}
                          onChange={setMaxRegisterDate}
                          placeholder='To'
                          rounededSide='right'
                          variant='border'
                      />
                  </div>
              </div>

              <div>
                  <div className='mt-5 mb-1 text-sm font-semibold text-slate-700'>
                      KMS DRIVEN
                  </div>

                  <div className='flex'>

                      <CAutocomplete
                          itemsList={kmsDriven}
                          label={minKmsDriven}
                          onChange={setMinKmsDriven}
                          placeholder='From'
                          rounededSide='left'
                          variant='border'
                      />

                      <CAutocomplete
                          itemsList={kmsDriven}
                          label={maxKmsDriven}
                          onChange={setMaxKmsDriven}
                          placeholder='To'
                          rounededSide='right'
                          variant='border'
                      />
                  </div>
              </div>

              <div>
                  <div className='flex items-end justify-between'>
                      <div className='mt-5 mb-1 text-sm
                           font-semibold text-slate-700'
                      >
                          TRANSMISSION
                      </div>

                      { selectedTransmissin.length >= 1
                      && <div className='
                           mb-1 h-6 w-6 rounded-full
                           bg-blue-600 text-center font-semibold text-white'
                         >
                          {selectedTransmissin.length}
                      </div>}
                  </div>

                  <CCheckboxGroup
                      mainOptions={['Manual', 'Automatic']}
                      onChange={onChangeTransmission}
                      options={transmissin}
                      values={selectedTransmissin}
                  />
              </div>

              <div className='mb-4'>
                  <div className='flex items-end justify-between'>
                      <div className='mt-5 mb-1 text-sm
                           font-semibold text-slate-700'
                      >
                          FUEL
                      </div>

                      { selectedFuels.length >= 1
                      && <div className='
                           mb-1 h-6 w-6 rounded-full
                           bg-blue-600 text-center font-semibold text-white'
                         >
                          {selectedFuels.length}
                      </div>}
                  </div>

                  <CCheckboxGroup
                      mainOptions={['Diesel', 'Petrol']}
                      onChange={onChangeFuels}
                      options={fuels}
                      values={selectedFuels}
                  />
              </div>

              <div className='px-2'>
                  <CCheckbox>
                      VAT deducion
                  </CCheckbox>
              </div>

              <div>
                  <div className='mt-5 mb-1 text-sm
                           font-semibold text-slate-700'
                  >
                      EXTERIOR COLOR
                  </div>

                  <CColorPicker
                      colors={colors}
                      onChange={onChangeColor}
                      values={selectedColors}
                  />
              </div>

              <div>
                  <div className='mt-5 mb-1 text-sm
                           font-semibold text-slate-700'
                  >
                      FEATURES
                  </div>

                  <div className='flex flex-col gap-2 px-2 text-sm'>
                      <CCheckbox>
                          Air condtitioning
                      </CCheckbox>

                      <CCheckbox>
                          Navigation
                      </CCheckbox>

                      <CCheckbox>
                          Cruise control
                      </CCheckbox>

                      <CCheckbox>
                          Miltifunctional steering wheel
                      </CCheckbox>

                      <CCheckbox>
                          Xenon headlioghts
                      </CCheckbox>

                      <CCheckbox>
                          LED headlioghts
                      </CCheckbox>

                      <CCheckbox>
                          Heated front seats
                      </CCheckbox>

                      <CCheckbox>
                          Towbar
                      </CCheckbox>
                  </div>
              </div>

              <div>
                  <CButton variant='underline'>
                      <div className='mt-5 flex items-center
                           gap-3 text-sm font-semibold'
                      >
                          More features
                          <ChevronRightIcon className='h-5 w-5' />
                      </div>
                  </CButton>
              </div>

              <div className='mx-[-2.2rem] my-8 h-[1px] w-auto bg-slate-200' />

              <CButton
                  classes='py-3 rounded-md w-full flex justify-center'
                  variant='border'
              >
                  <span className='text-sm font-semibold text-indigo-600'>
                      Details search
                  </span>
              </CButton>

          </div>
      </div>
  )
}
