import { IEvents } from "../Interfaces/IEvent";
import partys from "./partys";

const events: IEvents[] = [
  {
    Newspaper: "Центральный квартал",
    src: "https://cdn.maximonline.ru/36/f2/63/36f2637ef294455f33494ac1ee827aff/583x417_0xac120005_3457988091527733829.jpg",
    content:
      "Политические действия принимают новую форму под которую нам нужно перестраиваться, если мы это конечно хотим...",
    answers: [
      {
        content: "Поддержать правящую партию",
        func() {
          partys.get()[0].pop *= Math.random() + 0.9;
        },
      },
      {
        content: "Поддержать оппозиционную партию",
        func() {
          const summPop = partys.get().reduce((sum, elem) => sum + elem.pop, 0);

          partys.get()[1].pop += Math.random() * summPop;
        },
      },
      {
        content: "Поддержать слабую партию",
        func() {
          const rbd = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min) + min);

          const summPop = partys.get().reduce((sum, elem) => sum + elem.pop, 0);

          partys.get()[rbd(2, partys.get().length - 1)].pop += 0.2 * summPop;
        },
      },
    ],
  },
  {
    Newspaper: "Высшая гласность",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4f0GbYI-MnOY5H0yvErAdWdcUkOR7z3jmA&usqp=CAU",
    content: `Сегодня стало известно о гибели нашего лидера ${
      partys.get()[0].firstName
    } ${
      partys.get()[0].lastName
    } неизвестным террористом. Детективы расследуют это дело...`,
    answers: [
      {
        content: "О боже!",
        func() {
          partys
            .get()
            .map((elem, i) => (i === 0 ? elem.pop * 1.1 : elem.pop * 0.9));
          partys.get()[0].firstName = "dead";
          partys.get()[0].lastName = "inside";
        },
      },
    ],
  },
  {
    Newspaper: "Центральный квартал",
    src: "https://cdn22.img.ria.ru/images/155775/02/1557750258_1:0:1000:562_600x0_80_0_0_9d1b638a93e7294df563e0f1f096a4c1.png",
    content: `Время выборов! Настало время выяснить на кого же теперь возлагаются надежды и трудности правления страной?`,
    answers: [
      {
        content: "Провести выборы!",
        func() {
          partys.get().forEach((elem, i) => (elem.par = elem.pop / (i + 1)));
        },
      },
      {
        content: "Оппозиция должна выиграть!",
        func() {
          partys.get().forEach((elem, i) => (elem.par = elem.pop / (i + 1)));

          partys.get()[1].par *= Math.random() + 1;
        },
      },
      {
        content: "Пусть все останется как есть...",
        func() {
          partys.get().forEach((elem, i) => (elem.par = elem.pop / (i + 1)));

          partys.get()[0].par *= Math.random() + 2;
        },
      },
    ],
  },
];

export default events;
