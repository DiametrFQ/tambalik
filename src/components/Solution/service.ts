import Party from "../../Data/partys";
import { TEvents } from "../../Services/types/TEvent";
import { partysNames } from "../../Services/types/TParty";
import store from "../../store";

export function defeat(): [boolean, TEvents] {
  const { people, warPower } = store.getState().resurses;
  const { radicalism } = store.getState().trends;

  let content = "";
  let defeat = false;
  if (people <= 1) {
    content =
      "Поздравляем, вы были понижены до могильщика, так как жить в вашем государстве не возможно жить...";
    defeat = true;
  }
  if (Math.random() * 100 < radicalism - warPower) {
    content = `Внимание, в дворец страны вовались граждане страны! 
      По последней информации глава государства был убит в своей же постели!`;
    defeat = true;
  }
  const StrongParty = Party.getForChange().find(
    (party) => (party.politica as partysNames) === "democratic"
  )!;
  if (
    Party.getPowerPersentParty(StrongParty.politica as partysNames, "par") > 85
  ) {
    content = `Внимание, в государстве произошел государственный переворот! 
        На данный момент власть пренадлежит партии ${StrongParty.politica}! `;
    defeat = true;
  }

  const event: TEvents = {
    Newspaper: "Центральный квартал",
    src: "",
    content,
    answers: [
      {
        content: "Вы проиграли...",
        func() {
          window.location.reload();
        },
      },
    ],
  };

  return [defeat, event];
}
