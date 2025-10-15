import {
  faMusic,
  faRadio,
  faVolumeLow,
  faVolumeXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { Fragment, useEffect, useRef, useState } from "react";

function SettingModal({ isOpenModal, onSave }) {
  const [isOpen, setIsOpen] = useState(isOpenModal);
  const [isOpenMusic, setIsOpenMusic] = useState(true);

  const refMusic = useRef();

  const handleMusic = () => {
    setIsOpenMusic(!isOpenMusic);
    const music = document.getElementById("music-game");
    music.muted = !music.muted;
    refMusic.current.value = isOpenMusic ? 0 : 50;
  };

  useEffect(() => {
    setIsOpen(isOpenModal);
  }, [isOpenModal]);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
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
              <DialogPanel className="w-full max-w-xs transform overflow-hidden rounded-2xl border-2 text-[#f9fafd] bg-[#081342] border-solid border-[#223781] p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-2xl text-center font-medium leading-6 text-[#ffd56c]"
                >
                  Settings
                </DialogTitle>
                <div className="mt-7">
                  <div className="flex items-center">
                    <div className="">
                      <button
                        className="p-1 rounded-md text-white hover:bg-gray-200 hover:text-black"
                        onClick={handleMusic}
                      >
                        {isOpenMusic ? (
                          <FontAwesomeIcon
                            className="w-6 "
                            icon={faVolumeLow}
                          />
                        ) : (
                          <FontAwesomeIcon
                            className="w-6 "
                            icon={faVolumeXmark}
                          />
                        )}
                      </button>
                      <span className="mx-3">Music</span>
                    </div>
                    <input ref={refMusic} type="range" className="flex-1" />
                  </div>

                  <div className="flex items-center mt-3">
                    <div className="">
                      <button className="p-1 rounded-md text-white hover:bg-gray-200 hover:text-black">
                        <FontAwesomeIcon className="w-6 " icon={faRadio} />
                      </button>
                      <span className="mx-3">SFX</span>
                    </div>
                    <input type="range" className="flex-1" />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => onSave()}
                  >
                    Save
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default SettingModal;
