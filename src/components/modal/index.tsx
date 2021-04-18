import { DialogContent, DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import closeIcon from './cancel.svg'
import * as React from 'react'

type IncomingProps = {
  children?: JSX.Element
  showModal: boolean
  closeModal: () => void
  showSpinner?: boolean
}

const Modal = ({ children, showModal, closeModal }: IncomingProps): JSX.Element => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <DialogOverlay
      isOpen={showModal}
      onDismiss={closeModal}
      aria-label="dialog"
      className="bg-black bg-opacity-30 shadow-2xl fixed top-0 right-0 bottom-0 left-0 z-10"
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
          <DialogContent
            aria-label="dialog"
            className="m-auto md:mt-11 md:mx-5 lg:mx-36 focus:outline-none"
          >
            <div className="relative h-screen md:h-1/2 mt-20 bg-white w-full rounded-sm max-w-screen-md m-auto overflow-y-scroll">
              <div className="flex justify-end w-full pt-3 px-3 sticky top-0 bg-white">
                <img className="h-4 w-4 cursor-pointer" onClick={closeModal} src={closeIcon} />
              </div>
              <div>{children}</div>
            </div>
          </DialogContent>
        </motion.div>
      </AnimatePresence>
    </DialogOverlay>
  )
}

export default Modal