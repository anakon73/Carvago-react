import { CheckIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

/* eslint-disable react/jsx-closing-tag-location */
export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  colors: string[]
  values: string[]
}

export const CColorPicker = ({ colors, values, ...props }: Props) => {
  const [showColorName, setShowColorName] = useState(false)

  const show = () => {
    setTimeout(() => {
      setShowColorName(true)
    }, 300)
  }
  const hide = () => setShowColorName(false)

  return (
      <div className="grid max-w-[14rem] grid-cols-7 grid-rows-2 gap-1">
          {colors.map((color) => {
            return (
                <div
                    className="group relative"
                    key={color}
                >
                    <input
                        checked={values.includes(color)}
                        className="cursor-pointer rounded-full
                        border border-slate-600 p-2 ring-blue-400 ring-offset-2
                        checked:ring-2 focus:border"
                        id={color}
                        name="color-picker"
                        onMouseEnter={show}
                        onMouseLeave={hide}
                        style={{ background: color }}
                        type="checkbox"
                        value={color}
                        {...props}
                    />

                    { showColorName
                      ? <label
                              className="absolute mt-1 ml-5 hidden
                              bg-slate-700 p-1 text-xs text-white
                              transition-[display] delay-300 group-hover:block"
                              htmlFor={color}
                        >
                          {color}

                      </label>
                      : null}

                    { values.includes(color)
                    && <label
                        className="absolute top-[5px] left-[1px] z-10"
                        htmlFor={color}
                       >
                        <CheckIcon className={clsx(
                          'h-4 w-4',
                          color === 'white'
                            ? 'text-slate-700'
                            : 'text-slate-500',
                        )}
                        />
                    </label>}
                </div>
            )
          })}
      </div>
  )
}
