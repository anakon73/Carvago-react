/* eslint-disable react/jsx-max-depth */
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Combobox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import type React from 'react'

interface Option {
  value: number
  label: string
}

type ExtractProps<T> = T extends React.ComponentType<infer P> ? P : T

type ComboboxProps = ExtractProps<typeof Combobox>

export type Props<T extends Option> = ComboboxProps & {
  itemsList: T[]
  value: T
}

export const CAutocomplete = <T extends Option>
  ({ itemsList, ...props }: Props<T>) => {
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
      <div className="w-72">
          <Combobox
              {...props}
          >
              <div className="relative mt-1">
                  <div
                      className="relative w-full cursor-default
                      overflow-hidden rounded-lg
                      bg-white text-left shadow-md focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-white/75
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-teal-300
                      sm:text-sm"
                  >
                      <Combobox.Input
                          className="w-full border-none py-2 pl-3 pr-10
                          text-sm leading-5 text-gray-900 focus:ring-0"
                          displayValue={(person: T) => person.label}
                          onChange={event => setQuery(event.target.value)}
                      />

                      <Combobox.Button
                          className="absolute inset-y-0 right-0
                          flex items-center pr-2"
                      >
                          <ChevronUpDownIcon
                              aria-hidden="true"
                              className="h-5 w-5 text-gray-400"
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
                          className="absolute mt-1 max-h-60 w-full
                       overflow-auto rounded-md bg-white py-1 text-base
                        shadow-lg ring-1 ring-black/5
                        focus:outline-none sm:text-sm"
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
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`}
                                        key={person.value}
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate 
                                                    ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                                                >
                                                    {person.label}
                                                </span>

                                                {selected
                                                  ? (
                                                      <span
                                                          className={`absolute
                                                       inset-y-0 left-0 flex 
                                                       items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                                                      >
                                                          <CheckIcon
                                                              aria-hidden="true"
                                                              className="h-5
                                                               w-5"
                                                          />
                                                      </span>
                                                    )
                                                  : null}
                                            </>
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
