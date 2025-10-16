import { faRadio, faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

import { Fragment, useEffect, useRef, useState } from "react";
import styles from './style.moudule.scss'
import classNames from "classnames";

const cx = classNames.bind(styles);

function SettingModal({ isOpenModal, onSave }) {
  const musicRangeRef = useRef();
  const sfxRangeRef = useRef();
  const [isOpen, setIsOpen] = useState(isOpenModal);
  const [isOpenMusic, setIsOpenMusic] = useState(true);

  const handleMusic = () => {
    const musicGame = document.getElementById("music-game");
    musicGame.muted = !musicGame.muted;
    setIsOpenMusic(!isOpenMusic)
    musicRangeRef.current.value = isOpenMusic ? 0 : 50;
    musicRangeRef.current.style.setProperty("--fill", `${isOpenMusic ? 0 : 50}%`);
  }

  const handleInput = (e) => {
    const val = e.target.value;
    const percent = `${val}%`;
    e.target.style.setProperty("--fill", percent);
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
                    <div>
                      <button className="px-1 py-0.5 w-8 rounded-sm text-white hover:bg-gray-100 hover:text-black" onClick={() => handleMusic()}>
                        <FontAwesomeIcon icon={isOpenMusic ? faVolumeLow : faVolumeXmark} />
                      </button>
                      <span className="pl-2 pr-3">Music</span>
                    </div>
                    <input ref={musicRangeRef} type="range" min={0} max={100} onInput={handleInput} className={cx("range-volume flex-1 h-1")} />
                  </div>
                  <div className="flex items-center mt-4">
                    <div>
                      <button className="px-1 py-0.5 w-8 rounded-sm text-white hover:bg-gray-100 hover:text-black" onClick={() => handleMusic()}>
                        <FontAwesomeIcon icon={faRadio} />
                      </button>
                      <span className="pl-2 pr-3">SFX</span>
                    </div>
                    <input ref={sfxRangeRef} type="range" min={0} max={100} className={cx("range-volume flex-1 h-1")} />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#b33579] px-4 py-2 text-sm font-medium text-white hover:bg-[#d64190] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
