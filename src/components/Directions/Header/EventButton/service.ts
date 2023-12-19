import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import Party from "../../../../Data/partys";
import partys from "../../../../Data/partys";
import quests from "../../../../Data/quests";
import { TParty, partysNames } from "../../../../Services/types/TParty";
import store from "../../../../store";
import {
  setMoney,
  setPeople,
  setWarPower,
} from "../../../../store/redusers/resursersSlice";
import { setRadicalism } from "../../../../store/redusers/trendsSlice";

export function questsBonus() {
  quests.get().forEach((quest) => {
    if (
      quest.conditions.every((cond) => cond.condition && quest.timeLeftToWork)
    ) {
      quest.bonus();

      if (quest.timeLeftToWork > 0) quest.timeLeftToWork -= 1;
    }
  });
}

export function trendInfluence(partyName: partysNames | "none") {
  if (partyName !== "none") {
    partys.setPartyPower("pop", partyName, 1.25);
  }
}

export function economicImpact() {
  const { discipline, tax } = store.getState().inputsState;
  const { people, warPower, money } = store.getState().resurses;

  const democraticParty = Party.getForChange().find(
    (party) => (party.politica as partysNames) === "democratic"
  )!;
  const socialistParty = Party.getForChange().find(
    (party) => (party.politica as partysNames) === "socialist"
  )!;
  const nationalistParty = Party.getForChange().find(
    (party) => (party.politica as partysNames) === "nationalist"
  )!;
  const liberalParty = Party.getForChange().find(
    (party) => (party.politica as partysNames) === "liberal"
  )!;

  setPower(
    tax,
    democraticParty,
    socialistParty,
    setPeople,
    setMoney,
    ((people * -tax) / 10000) * (1 - warPower / 100),
    ((people / 100) * money * tax) / 10000,
    tax
  );
  setPower(
    discipline,
    nationalistParty,
    liberalParty,
    setWarPower,
    setMoney,
    discipline / 100,
    (discipline / 1000) * money,
    discipline / 3
  );
}

function setPower(
  inputsState: number,
  partyYes: TParty,
  partyNo: TParty,
  set1: ActionCreatorWithPayload<
    any,
    | "resursersSlice/setMoney"
    | "resursersSlice/setPeople"
    | "resursersSlice/setWarPower"
  >,
  set2: ActionCreatorWithPayload<
    any,
    | "resursersSlice/setMoney"
    | "resursersSlice/setPeople"
    | "resursersSlice/setWarPower"
  >,
  formula1: number,
  formula2: number,
  impactOnSociety: number
) {
  const dispatch = store.dispatch;
  const power = 1 + inputsState / (inputsState >= 0 ? 50 : -50);
  const charDemSoc: ["par", "pop"] | ["pop", "par"] =
    inputsState >= 0 ? ["par", "pop"] : ["pop", "par"];

  Party.getForChange()[0].pop *= 2 - power;
  partyYes[charDemSoc[0]] *= power;
  partyNo[charDemSoc[1]] *= power;

  dispatch(set1(formula1));
  dispatch(set2(formula2));
  dispatch(setRadicalism(impactOnSociety / 100));
}
