import { Dialog, DialogPanel, Button } from "@headlessui/react";
import { useEffect, useState } from "react";
import crownImg from "../../assets/img/crown.png";

function AlertHaveWinner({ open, close, playAgain, winnerIs }) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(open);
    }, 900);
  }, [open]);

  const closeModal = () => {
    playAgain();
    setIsOpen(false);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 bg-transparent">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#150b30] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="text-center flex items-center justify-center relative">
                <img
                  alt=""
                  src={crownImg}
                  className="w-12 absolute z-[1] -top-[15px] translate-x-[34px] rotate-[25deg]"
                />
                <img
                  alt=""
                  src="https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517171.jpg"
                  className=" w-32 h-auto z-[2] rounded-full mt-3 border-[5px] border-solid border-[#f3bf4f]"
                />
              </div>
              <p className="mt-2 text-sm/6 text-white text-center">
                Congratulations Dat. You are <br />
                <span className=" text-xl font-semibold">THE WINNER !!</span>
              </p>
              <div className="mt-4">
                <Button
                  className="w-full inline-flex justify-center items-center gap-2 rounded-md bg-[#fbcb5e] py-2 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#bd9947] data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={closeModal}
                >
                  Continue, Play Again!!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default AlertHaveWinner;
