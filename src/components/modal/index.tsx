import { DialogContent, DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import closeIcon from './cancel.svg'
import * as React from 'react'
import { useRouter } from 'next/router'

type IncomingProps = {
  children?: JSX.Element
  queryParam?: string
  openModal?: boolean
  closeModal?: () => void
}

const Modal = ({ children, queryParam, openModal, closeModal }: IncomingProps): JSX.Element => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const router = useRouter()
  const [showModal, setShowModal] = React.useState(false)

  React.useEffect(() => {
    if (queryParam) {
      if (router.query?.[queryParam]) {
        setShowModal(true)
      } else {
        setShowModal(false)
      }
    }
  }, [router.asPath])

  return (
    <DialogOverlay
      isOpen={openModal ?? showModal}
      onDismiss={closeModal ? (): void => closeModal() : (): void => router.back()}
      aria-label="dialog"
      className="fixed bg-black bg-opacity-30 shadow-2xl top-0 right-0 bottom-0 left-0 z-10 overflow-y-scroll"
    >
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}
        >
          <DialogContent aria-label="dialog" className="m-auto md:mt-11 focus:outline-none">
            <div className="relative mt-20 bg-white w-full rounded-sm max-w-screen-md m-auto">
              <div className="flex justify-end w-full pt-3 px-3 sticky top-0 bg-white">
                <img
                  className="h-4 w-4 cursor-pointer"
                  onClick={closeModal ? (): void => closeModal() : (): void => router.back()}
                  src={closeIcon}
                />
              </div>
              <div className="pb-8">{children}</div>
            </div>
          </DialogContent>
        </motion.div>
      </AnimatePresence>
    </DialogOverlay>
  )
}

export default Modal
