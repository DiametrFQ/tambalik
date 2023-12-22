import CQuests from "../Services/Classes/CQuests";
import { TQuest } from "../Services/types/TQuest";
import store from "../store";
import partys from "./partys";

const politicalParty = store.getState().trends.politicalParty;
const politicalTitle = store.getState().trends.title;
var quests: TQuest[] = [
  {
    questName: "Угроза населению",
    conditions: [
      {
        conditionText: `Поднимите уровень радикализма в стране до 30%`,
        condition: true,
      },
    ],
    bonusText: () => "10%",
    bonus: () => {
      console.log("asd");
    },
    conditionHidden: () => true,
    workInterval: 3,
    timeLeftToWork: 0,
  },
  {
    questName: "Политический переворот",
    conditions: [
      {
        conditionText: "Смените текущую правящую партию",
        condition: true,
      },
    ],
    bonusText: () => "10%",
    bonus: () => {
      console.log("asd");
    },
    conditionHidden: () => true,
    workInterval: 2,
    timeLeftToWork: 0,
  },
  {
    questName: `Волна ${politicalTitle}а`,
    conditions: [
      {
        conditionText: `Политической партией в тенденции должна быть "${politicalTitle}"`,
        condition: true,
      },
    ],
    bonusText: () => "10%",
    bonus: () => {
      if (politicalParty !== "none") {
        partys.setPartyPower("pop", politicalParty, 1.15);
        partys.setPartyPower("par", politicalParty, 1.05);
      }
    },
    conditionHidden: () => politicalParty !== "none",
    workInterval: -1,
    timeLeftToWork: -1,
  },
];

var Quests = new CQuests(quests);
export default Quests;
