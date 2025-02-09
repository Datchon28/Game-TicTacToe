import classNames from "classnames/bind";
import style from "./style.module.scss";

import xIcon from "../assets/img/x.png";
import oIcon from "../assets/img/o.png";
import alien from "../assets/img/alien.png";
import monster1 from "../assets/img/monster-1.png";
import monster2 from "../assets/img/monster.png";
import kitty from "../assets/img/kitty.png";
import rocket from "../assets/img/rocket.png";
import ufo from "../assets/img/ufo.png";

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

const cx = classNames.bind(style);

function ChoiceCharacter() {
  const idRoom = useParams();
  const [characters, setCharacters] = useState([
    {
      name: "x",
      character: xIcon,
    },
    {
      name: "o",
      character: oIcon,
    },
    {
      name: "alien",
      character: alien,
    },
    {
      name: "monster-1",
      character: monster1,
    },
    {
      name: "monster-2",
      character: monster2,
    },
    {
      name: "kitty",
      character: kitty,
    },
    {
      name: "rocket",
      character: rocket,
    },
    {
      name: "ufo",
      character: ufo,
    },
  ]);
  const defaultCharacter = {
    name: "x",
    character: xIcon,
  };
  let [isOpen, setIsOpen] = useState(false);
  const [choicedCharacter, setChoicedCharacter] = useState(defaultCharacter);
  const [currentChoicedCharacter, setCurrentChoicedCharacter] = useState(1);
  const [player1, setPlayer1] = useState(defaultCharacter);
  const [player2, setPlayer2] = useState(defaultCharacter);

  useEffect(() => {
    if (currentChoicedCharacter === 1) {
      setPlayer1(choicedCharacter);
      localStorage.setItem("pl1", JSON.stringify(choicedCharacter));
    } else {
      setPlayer2(choicedCharacter);
      localStorage.setItem("pl2", JSON.stringify(choicedCharacter));
    }
  }, [choicedCharacter]);

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
        <div onClick={() => setCurrentChoicedCharacter(1)}>
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

        <div onClick={() => setCurrentChoicedCharacter(2)}>
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
              onClick={() => setChoicedCharacter(char)}
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
