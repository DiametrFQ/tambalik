import CQuests from "../Services/Classes/CQuests";
import { TQuest } from "../Services/types/TQuest";
import store from "../store";
import partys from "./partys";

const politicalParty = store.getState().trends.politicalParty;
var quests: TQuest[] = [
  {
    questName: "Тест",
    conditions: [
      {
        conditionText: "нет",
        condition: true,
      },
    ],
    bonusText: () => "",
    bonus: () => {
      console.log("asd");
    },
    conditionHidden: () => true,
    workInterval: 3,
    timeLeftToWork: 0,
  },
  {
    questName: "Time Тест",
    conditions: [
      {
        conditionText: "нет",
        condition: true,
      },
    ],
    bonusText: () => "",
    bonus: () => {
      console.log("asd");
    },
    conditionHidden: () => true,
    workInterval: 2,
    timeLeftToWork: 0,
  },
  {
    questName: "Волна " + politicalParty,
    conditions: [
      {
        conditionText: `Политической партией в тенденции должна быть "${politicalParty}"`,
        condition: true,
      },
    ],
    bonusText: () =>
      `партия ${politicalParty} получает бонус в популярности и парламенте`,
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
