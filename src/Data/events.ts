import CEvents from "../Services/Classes/CEvents";
import { TEvents } from "../Services/types/TEvent";
import store from "../store";
import React from "react";
import {
  setActivePolsit,
  setActiveTrend,
} from "../store/redusers/modelWindowSlice";
import {
  setPoliticalParty,
  setRadicalism,
} from "../store/redusers/trendsSlice";
import Party from "./partys";
import partys from "./partys";

const dispatch = store.dispatch;

var events: TEvents[] = [
  {
    Newspaper: "Центральный квартал",
    content:
      "Политические действия принимают новую форму под которую нам нужно перестраиваться, если мы это конечно хотим...",
    answers: [
      {
        content: "Поддержать правящую партию",
        func() {
          partys.get()[0].pop *= Math.random() + 0.9;
          dispatch(setActivePolsit(true));
        },
      },
      {
        content: "Поддержать оппозиционную партию",
        func() {
          const summPop = partys.get().reduce((sum, elem) => sum + elem.pop, 0);

          partys.get()[1].pop += Math.random() * summPop;
          dispatch(setActivePolsit(true));
        },
      },
      {
        content: "Поддержать слабую партию",
        func() {
          const rbd = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min) + min);

          const summPop = partys.get().reduce((sum, elem) => sum + elem.pop, 0);

          partys.get()[rbd(2, partys.get().length - 1)].pop += 0.2 * summPop;

          dispatch(setActivePolsit(true));
        },
      },
    ],
  },
  {
    Newspaper: "Центральный квартал",
    content: `Время выборов! Настало время выяснить на кого же теперь возлагаются надежды и трудности правления страной?`,
    answers: [
      {
        content: "Провести выборы!",
        func() {
          partys.get().forEach((elem, i) => (elem.par = elem.pop / (i + 1)));
          dispatch(setActivePolsit(true));
          console.log(partys.get());
        },
      },
      {
        content: "Оппозиция должна выиграть!",
        func() {
          partys.get().forEach((elem, i) => (elem.par = elem.pop / (i + 1)));

          partys.get()[1].par *= Math.random() + 1;
          dispatch(setRadicalism(-3));
          dispatch(setActivePolsit(true));
        },
      },
      {
        content: "Пусть все останется как есть...",
        func() {
          partys.get().forEach((elem, i) => (elem.par = elem.pop / (i + 1)));

          partys.get()[0].par *= Math.random() + 2;
          dispatch(setRadicalism(8));
          dispatch(setActivePolsit(true));
        },
      },
    ],
  },
  {
    Newspaper: "Центральный квартал",
    content: `
      Настало время перен! Популярность нынешних политик изменилась!`,
    answers: [
      {
        content: "Стадо так глупо...",
        func() {
          let randomNameParty = "";

          if (Math.random() > 0.2) randomNameParty = Party.getRandomPartyName();
          else randomNameParty = "none";

          dispatch(setPoliticalParty(randomNameParty));
          dispatch(setActiveTrend(true));
        },
      },
    ],
  },
];

var Events = new CEvents(events);
export default Events;
function JSXElementConstructor(): any {
  throw new Error("Function not implemented.");
}
