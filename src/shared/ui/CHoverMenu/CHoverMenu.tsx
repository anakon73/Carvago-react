import { Float } from '@headlessui-float/react'
import { useRef, useState } from 'react'

interface Props {
  button: (args: {
    open: () => void
    close: () => void
    delayClose: () => void
  }) => JSX.Element
  children: (args: {
    open: () => void
    close: () => void
    delayClose: () => void
  }) => React.ReactNode
}

export const CHoverMenu = ({ button, children }: Props) => {
  const [show, setShow] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const open = () => {
    if (timer.current !== null) {
      clearTimeout(timer.current)
      timer.current = null
    }
    setShow(true)
  }
  const close = () => {
    setShow(false)
  }

  const delayClose = () => {
    timer.current = setTimeout(() => {
      setShow(false)
    }, 50)
  }

  return (
      <Float
          // offset={8}
          placement="bottom"
          show={show}
      >

          {button({ open, close, delayClose })}

          <div className='pt-2'>
              {children({ open, delayClose, close })}
          </div>
      </Float>
  )
}
