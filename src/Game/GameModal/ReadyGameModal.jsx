import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export default function ReadyGameModal({ onStartGame }) {
  let [isOpen, setIsOpen] = useState(true);

  const quitGame = () => {
    setIsOpen(false);
    sessionStorage.clear();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => ""}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Who will be the winner? Let's play !!!
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      If both players are ready to compete against each other,
                      press "Start" to enter the game
                    </p>
                  </div>

                  <div className="mt-4 float-right">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsOpen(false);
                        onStartGame();
                      }}
                    >
                      Start now !
                    </button>
                    <Link to='/'>
                      <button
                        type="button"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-100-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={quitGame}
                      >
                        Quit Game
                      </button>
                    </Link>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* <audio ref={ref} src={music} autoPlay loop></audio> */}
    </>
  );
}
