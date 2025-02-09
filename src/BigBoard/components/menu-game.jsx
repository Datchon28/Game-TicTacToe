import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import AlertHaveWinner from "../../components/AlertHaveWinner";
import {
  ArrowRightEndOnRectangleIcon,
  Cog6ToothIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import music from "../../assets/music-game/music-game.mp3";
import { useEffect, useRef, useState, Fragment } from "react";

function MenuGame({ winner, playAgain, winnerIs }) {
  const ref = useRef();
  let [isOpen, setIsOpen] = useState(true);
  const [openSound, setOpenSound] = useState(true);

  function readyTheGame() {
    ref.current.play();
    setIsOpen(false);
  }

  useEffect(() => {
    if (openSound) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [openSound]);

  return (
    <div>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          <Cog6ToothIcon className=" w-6 h-6" />
        </MenuButton>
        <MenuItems
          transition
          anchor="top start"
          className="w-44 z-20 origin-top-right rounded-xl border border-white/5 p-1 text-sm/6 text-black bg-slate-300 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button
              className=" flex w-full justify-between items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-400"
              onClick={() => setOpenSound(!openSound)}
            >
              {openSound ? (
                <>
                  Tat Am Thanh
                  <SpeakerWaveIcon className=" w-4 h-4" />
                </>
              ) : (
                <>
                  Bat Am Thanh
                  <SpeakerXMarkIcon className=" w-4 h-4" />
                </>
              )}
            </button>
          </MenuItem>
          <MenuItem>
            <button className=" flex w-full justify-between items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-slate-400">
              <Link
                to={"/"}
                className="flex w-full justify-between items-center gap-2 text-black"
              >
                Thoat Game
                <ArrowRightEndOnRectangleIcon className=" w-4 h-4" />
              </Link>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>

      <AlertHaveWinner
        open={winner}
        playAgain={playAgain}
        winnerIs={winnerIs}
      />
      <ReadyGameModal isOpen={isOpen} closeModal={readyTheGame} />

      <audio ref={ref} src={music} autoPlay loop></audio>
    </div>
  );
}

function ReadyGameModal({ isOpen, closeModal }) {
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

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Start now !
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MenuGame;
