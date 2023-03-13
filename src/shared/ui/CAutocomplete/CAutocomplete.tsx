import { Combobox, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import type React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import type { roundedVariant, variant } from './types'

interface Option {
  value: number
  label: string
}

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T

type ComboboxProps = ExtractProps<typeof Combobox>

export type Props<T extends Option> = ComboboxProps & {
  itemsList: T[]
  value: T
  placeholder: string
  variant: variant
  rounededSide: roundedVariant
}

export const CAutocomplete = <T extends Option>
  ({ itemsList, placeholder, rounededSide, variant, ...props }: Props<T>) => {
  const [query, setQuery] = useState('')
  const filteredPeople
  = query === ''
    ? itemsList
    : itemsList.filter(item =>
      item.label
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, '')),
    )

  return (
      <div className={clsx(
        [
          variant === 'noBorder' && 'w-40',
          variant === 'border' && 'w-24',
        ],
      )}
      >
          <Combobox
              {...props}
          >
              <div className="relative mt-1">
                  <div
                      className={clsx(
                        variant === 'border' && [
                          'flex w-24 items-center justify-between',
                          'border border-slate-600 p-1 text-sm transition-all',
                          'hover:border-indigo-700',
                          'group',
                          [
                            rounededSide === 'left' && 'rounded-l-lg',
                            rounededSide === 'right' && 'rounded-r-lg',
                          ],
                        ],
                        variant === 'noBorder' && [
                          'relative w-full cursor-default',
                          'overflow-hidden rounded-lg',
                          'bg-white text-left shadow-md focus:outline-none',
                          'focus-visible:ring-2',
                          'focus-visible:ring-white/75',
                          'focus-visible:ring-offset-2',
                          'focus-visible:ring-offset-teal-300',
                          'sm:text-sm',
                        ],
                      )}
                  >
                      <Combobox.Input
                          className="w-full border-none py-2 pl-3
                          pr-0 text-sm leading-5 text-gray-900
                          focus:ring-0 disabled:bg-gray-200
                          disabled:placeholder:text-gray-400
                          group-hover:placeholder:text-indigo-700"
                          displayValue={(person: T) => person.label}
                          onChange={event => setQuery(event.target.value)}
                          placeholder={placeholder}
                      />

                      <Combobox.Button
                          className="absolute inset-y-0 right-0
                          flex items-center pr-2"
                      >
                          <ChevronDownIcon
                              className="
                              h-4 w-4 text-gray-600
                              group-hover:text-indigo-700 "
                          />
                      </Combobox.Button>
                  </div>

                  <Transition
                      afterLeave={() => setQuery('')}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <Combobox.Options
                          className="absolute z-10 mt-1 max-h-60
                       w-full overflow-auto rounded-md bg-white py-1
                        text-base shadow-lg ring-1
                        ring-black/5 focus:outline-none sm:text-sm"
                      >
                          {(filteredPeople.length === 0 && query !== '')
                            ? (
                                <div className="relative cursor-default
                            select-none py-2 px-4 text-gray-700"
                                >
                                    Nothing found.
                                </div>
                              )
                            : (
                                filteredPeople.map(person => (
                                    <Combobox.Option
                                        className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-4 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`}
                                        key={person.label}
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <span
                                                className={`block truncate 
                                                    ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                                            >
                                                {person.label}
                                            </span>
                                        )}
                                    </Combobox.Option>
                                ))
                              )}

                      </Combobox.Options>
                  </Transition>
              </div>
          </Combobox>
      </div>
  )
}
