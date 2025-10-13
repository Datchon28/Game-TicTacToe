import classNames from "classnames/bind";
import style from "./style.module.scss";

import ava1 from "../assets/img/ava1.svg";

import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Label,
  Input,
  Description,
} from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Player from "../Players";
import CardPlayer from "./CardPlayer";
import { Link, useParams } from "react-router-dom";
import { dispatchStore } from "../store/function-store";
import { listCharacters } from '../constants/list-characters'

const cx = classNames.bind(style);

function ChoiceCharacter() {
  const idRoom = useParams();
  const [characters, setCharacters] = useState(listCharacters);

  const defaultPlayer1 = listCharacters.find(char => char.name === "x");
  const defaultPlayer2 = listCharacters.find(char => char.name === "o");

  let [isOpen, setIsOpen] = useState(false);
  const [choicedCharacter, setChoicedCharacter] = useState(defaultPlayer1);
  const [currentChoicedCharacter, setCurrentChoicedCharacter] = useState(0);
  const [player1, setPlayer1] = useState(defaultPlayer1);
  const [player2,setPlayer2] = useState(defaultPlayer2);

  useEffect(() => {
    localStorage.setItem("pl1", JSON.stringify(defaultPlayer1));
    localStorage.setItem("pl2", JSON.stringify(defaultPlayer2));
  }, []);

  const choosePlayer = (indexPlayer, infoCharPlayer) => {
    setCurrentChoicedCharacter(indexPlayer);
    setChoicedCharacter(infoCharPlayer);
  }

  const handleChooseCharacter = (char) => {
    setChoicedCharacter(char)
     if (currentChoicedCharacter === 0) {
      setPlayer1(char);
      localStorage.setItem("pl1", JSON.stringify(char));
    } else {
      setPlayer2(char);
      localStorage.setItem("pl2", JSON.stringify(char));
    }
  }

  return (
    <div className={cx("choice-charater-wrapper")}>
      <Button
        className={cx("mt-3 ml-3 bg-[#391898] px-3 py-1 rounded-md text-white")}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </Button>
      <h2 className="text-white py-11 text-center text-3xl block mb-[3.5rem]">
        Choose your charater
      </h2>

      <div className="text-white mt-3 flex items-center justify-around">
        <div onClick={() => choosePlayer(0, player1)}>
          <CardPlayer
            currentChoiced={currentChoicedCharacter}
            shape={player1.character}
            player={{
              indexPlayer: 0,
              playerName: "Dat",
              avartar: ava1,
            }}
          />
        </div>

        <div onClick={() => choosePlayer(1, player2)}>
          <CardPlayer
            currentChoiced={currentChoicedCharacter}
            shape={player2.character}
            player={{
              indexPlayer: 1,
              playerName: "Dat 2",
              avartar: ava1,
            }}
          />
        </div>

        <Dialog
          open={false}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel
              transition
              className="max-w-lg space-y-4 border bg-white p-12"
            >
              <DialogTitle className="font-bold">
                Deactivate account
              </DialogTitle>

              <div className="w-full max-w-md px-4">
                <Field>
                  <Label className="text-sm/6 font-medium text-black">
                    Name
                  </Label>
                  <Description className="text-sm/6 text-white/50">
                    Use your real name so people will recognize you.
                  </Description>
                  <Input className="mt-3 block w-full rounded-lg border-none bg-black py-1.5 px-3 text-sm/6 text-whitefocus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25" />
                </Field>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setIsOpen(false)}>Cancel</button>
                <button onClick={() => setIsOpen(false)}>Deactivate</button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </div>

      <div className="mt-10 ">
        <div
          className={cx(
            "list-character",
            "flex items-center justify-center gap-10 py-10"
          )}
        >
          {characters.map((char, index) => (
            <button
              key={index}
              className={cx(
                `${
                  char.name === choicedCharacter.name && "selected-character"
                }`,
                "text-center"
              )}
              onClick={() => handleChooseCharacter(char)}
            >
              <img src={char.character} className="w-20 h-20" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 text-center">
        <Link to={`/game/${idRoom.id}`}>
          <Button
            className={cx(
              "text-white rounded-lg text-center px-16 py-4 font-semibold text-xl",
              "btn-choiced"
            )}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ChoiceCharacter;
