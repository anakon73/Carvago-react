/* eslint-disable react/jsx-closing-tag-location */
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Previots from './assets/previous.svg'
import { Stars } from './assets/stars'
import { CAutocomplete } from '@/shared/ui/CAutocomplete'
import { CCheckbox } from '@/shared/ui/CCheckbox'
import { CButton } from '@/shared/ui/CButton'

interface Option {
  value: number
  label: string
}

const carBrands: Option[] = [
  { value: 1, label: 'Mercedes-benz' },
  { value: 2, label: 'Tesla' },
  { value: 3, label: 'Audi' },
  { value: 4, label: 'BMW' },
  { value: 5, label: 'McLaren' },
  { value: 6, label: 'Ford' },
  { value: 7, label: 'Mazda' },
  { value: 8, label: 'Hennesey' },
]
const mileage: Option[] = [
  { value: 1, label: 'Mileage' },
  { value: 2, label: '2500' },
  { value: 3, label: '5000' },
  { value: 4, label: '10000' },
  { value: 5, label: '15000' },
  { value: 6, label: '20000' },
  { value: 7, label: '25000' },
  { value: 8, label: '30000' },
]
const registerDate: Option[] = [
  { value: 1, label: 'any' },
  { value: 2, label: '2023' },
  { value: 3, label: '2022' },
  { value: 4, label: '2021' },
  { value: 5, label: '2020' },
  { value: 6, label: '2019' },
  { value: 7, label: '2018' },
  { value: 8, label: '2017' },
  { value: 9, label: '2016' },
  { value: 10, label: '2015' },
]
const price: Option[] = [
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
]

export const HomeSearchForm = () => {
  const [selectedBrand, setSelectedBrand]
   = useState<Option>({ value: 0, label: '' })
  const [selectedModel, setSelectedModel]
   = useState<Option>({ value: 0, label: '' })
  const [selectedMileage, setSelectedMileage]
   = useState<Option>({ value: 0, label: '' })
  const [selectedRegisterDate, setSelectedRegisterDate]
   = useState<Option>({ value: 0, label: '' })
  const [selectedPrice, setSelectedPrice]
   = useState<Option>({ value: 0, label: '' })
  const [vat, setVat] = useState(false)

  const clearFilter = () => {
    setSelectedBrand({ value: 0, label: '' })
    setSelectedModel({ value: 0, label: '' })
  }

  return (
      <div className='max-w-xl'>
          <div className="mb-4 rounded-xl bg-slate-100">
              <div className='px-8 pb-2 pt-8'>
                  <div
                      className="mb-6 text-5xl font-extrabold
                    leading-tight text-slate-700"
                  >
                      You choose your car
                      <br />

                      online. We inspect it

                      <br />
                      and deliver it.
                  </div>

                  <form className='mb-7 grid grid-cols-3 gap-y-2'>
                      <CAutocomplete
                          itemsList={carBrands}
                          onChange={setSelectedBrand}
                          placeholder='Make'
                          value={selectedBrand}
                          variant='noBorder'
                      />

                      <CAutocomplete
                          disabled={selectedBrand.label.length === 0}
                          itemsList={carBrands}
                          onChange={setSelectedModel}
                          placeholder='Model'
                          value={selectedModel}
                          variant='noBorder'
                      />

                      <CAutocomplete
                          itemsList={mileage}
                          onChange={setSelectedMileage}
                          placeholder='Mileage'
                          value={selectedMileage}
                          variant='noBorder'
                      />

                      <CAutocomplete
                          itemsList={registerDate}
                          onChange={setSelectedRegisterDate}
                          placeholder='Registration from'
                          value={selectedRegisterDate}
                          variant='noBorder'
                      />

                      <CAutocomplete
                          itemsList={price}
                          onChange={setSelectedPrice}
                          placeholder='Price'
                          value={selectedPrice}
                          variant='noBorder'
                      />

                      <CCheckbox
                          checked={vat}
                          onChange={e => setVat(e.target.checked)}
                      >
                          VAT deduction
                      </CCheckbox>
                  </form>

                  <div className='mb-7 flex items-center justify-between'>
                      <CButton
                          classes='text-base font-bold flex items-center'
                          variant='underline'
                      >
                          Advanced search
                          <ChevronRightIcon className='h-5 w-5' />

                      </CButton>

                      <CButton
                          classes='font-bold py-3'
                          size='lg'
                          variant='primary'
                      >
                          0 Offers

                      </CButton>
                  </div>
              </div>

              { selectedModel.label
                ? <div className='bg-slate-200'>
                    <div className='flex px-8 py-5'>
                        <div className='flex gap-4'>
                            <CButton className='flex items-center gap-1'>
                                <img
                                    alt="previous filters"
                                    src={Previots}
                                />

                                <ChevronDownIcon
                                    className='h-5 w-5 text-blue-800'
                                />
                            </CButton>

                            <CButton
                                classes="font-bold text-md flex
                                items-center gap-2"
                                size='md'
                                variant='primary'
                            >
                                <span>
                                    {selectedBrand.label}
                                </span>

                                <span>
                                    {selectedModel.label }
                                </span>

                                <CButton onClick={clearFilter}>
                                    <XMarkIcon className='h-4 w-4' />
                                </CButton >
                            </CButton>
                        </div>

                        <CButton />
                    </div>
                </div>
                : null}
          </div>

          <div className='flex items-center justify-center gap-3'>
              <div className='text-2xl font-extrabold text-slate-50'>
                  4.8
              </div>

              <Stars />

              <CButton
                  classes='text-sm text-slate-50 font-bold'
                  variant='underline'
              >
                  805 reviews
                  <ChevronRightIcon className='h-4 w-4 text-slate-50' />
              </CButton>

          </div>
      </div>
  )
}
