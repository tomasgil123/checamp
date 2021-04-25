import { DialogContent, DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import closeIcon from './cancel.svg'
import * as React from 'react'
import useCustomBackNavigation from 'src/hooks/useCustomBackNavigation'

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

  useCustomBackNavigation(closeModal)

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
          <DialogContent aria-label="dialog" className="m-auto md:mt-11 focus:outline-none">
            <div className="relative md:h-1/2 mt-20 bg-white w-full rounded-sm max-w-screen-md m-auto">
              <div className="flex justify-end w-full pt-3 px-3 sticky top-0 bg-white">
                <img className="h-4 w-4 cursor-pointer" onClick={closeModal} src={closeIcon} />
              </div>
              <div className="overflow-y-auto h-screen pb-8">{children}</div>
            </div>
          </DialogContent>
        </motion.div>
      </AnimatePresence>
    </DialogOverlay>
  )
}

export default Modal
