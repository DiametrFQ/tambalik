import CQuests from "../Services/Classes/CQuests";
import { TQuest, TextReward } from "../Services/types/TQuest";
import store from "../store";
import Party from "./partys";
import partys from "./partys";

const politicalParty = store.getState().trends.politicalParty;
const politicalTitle = store.getState().trends.title;
const radicalism = store.getState().trends.radicalism;

let randomNameParty = "none";
if (politicalParty !== "none") {
  randomNameParty = partys.getRandomPartyNameSlice(politicalParty);
}

var quests: TQuest[] = [
  {
    questName: "Угроза населению",
    conditions: [
      {
        conditionText: `Поднимите уровень радикализма в стране до 30%`,
        condition: radicalism >= 30,
      },
    ],
    bonusText: () => {
      const obj: TextReward[] = [
        {
          reward: "10%",
          directory:
            "chels/chel_" +
            partys
              .getPartyBy("politica", politicalParty)
              ?.color.substring(5, 11)! +
            ".png",
        },
      ];
      return obj;
    },
    bonus: () => {
      console.log("asd");
    },
    conditionHidden: () => true,
    workInterval: 3,
    timeLeftToWork: 0,
    state: false,
  },
  {
    questName: "Политический переворот",
    conditions: [
      {
        conditionText: `Партия в тенденции не должен быть "${politicalTitle}"`,
        condition:
          store.getState().trends.politicalParty !==
          Party.getPartysOnSortedBy("par")[0].title,
      },
    ],
    bonusText: () => {
      const obj: TextReward[] = [
        {
          reward: "10%",
          directory:
            "chels/chel_" +
            partys
              .getPartyBy("politica", politicalParty) //store.getState().trends.politicalParty)
              ?.color.substring(5, 11)! +
            ".png",
        },
      ];
      return obj;
    },
    bonus: () => {
      Party.getPartysOnSortedBy("par")[0].par /= 2;
    },
    conditionHidden: () => true,
    workInterval: 2,
    timeLeftToWork: 0,
    state: false,
  },
  {
    questName: `Волна ${partys.getPartyBy("politica", randomNameParty)?.title}`,
    conditions: [
      {
        conditionText: `Политической партией в тенденции должен быть "${
          partys.getPartyBy("politica", randomNameParty)?.title
        }"`,
        condition: store.getState().trends.politicalParty === randomNameParty,
      },
    ],
    bonusText: () => {
      const obj: TextReward[] = [
        {
          reward: "15%",
          directory:
            "chels/chel_" +
            partys
              .getPartyBy("politica", randomNameParty)
              ?.color.substring(5, 11)! +
            ".png",
        },
        {
          reward: "5%",
          directory: "icons/Risunok1.png",
        },
      ];
      return obj;
    },
    bonus: () => {
      if (politicalParty !== "none") {
        partys.setPartyPower("pop", politicalParty, 1.15);
        partys.setPartyPower("par", politicalParty, 1.05);
      }
    },
    conditionHidden: () => politicalParty !== "none",
    workInterval: 0,
    timeLeftToWork: 0,
    state: false,
  },
];

var Quests = new CQuests(quests);
export default Quests;
