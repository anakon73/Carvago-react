import type React from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import type { roundedVariant } from './types'

type Option = number | string

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T

type ListboxProps = ExtractProps<typeof Listbox>

export type Props<T extends Option> = ListboxProps & {
  rounededSide?: roundedVariant
  itemsList: T[]
  value: T
}

export const CSelect = <T extends Option>(
  { rounededSide, itemsList, value, ...props }: Props<T>,
) => {
  return (
      <Listbox
          {...props}
          value={itemsList}
      >
          <Listbox.Button className={clsx(
            'flex w-52 items-center justify-between',
            'border border-blue-800 p-2 text-sm',
            [
              rounededSide === 'left' && 'rounded-l-md',
              rounededSide === 'right' && 'rounded-r-md',
            ],
          )}
          >
              <p className="text-blue-600">
                  {value <= 0 ? 'To' : value}
              </p>

              <ChevronDownIcon className="h-6 w-6 text-blue-600" />
          </Listbox.Button>

          <Listbox.Options className="
           absolute mt-1 max-h-40 w-52 overflow-auto
           rounded-md bg-white py-1 text-base shadow-lg
           ring-1 ring-black/5 focus:outline-none sm:text-sm
           "
          >
              {itemsList.map(item => (
                  <Listbox.Option
                      className="
                      relative cursor-default select-none py-1
                      pl-2 text-sm text-blue-600
                       "
                      key={item}
                      value={item}
                  >
                      {({ selected }) => (
                          <span
                              className={`block truncate ${
                          selected ? 'font-bold' : 'font-normal'
                        }`}
                          >
                              {item}
                          </span>
                      )}
                  </Listbox.Option>
              ))}
          </Listbox.Options>
      </Listbox>
  )
}