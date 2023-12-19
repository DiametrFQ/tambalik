import {
  PartyKeys,
  PartyPower,
  partysNames,
} from "../../Services/types/TParty";
import { TParty } from "../types/TParty";

export default class Partys {
  constructor(private readonly _partys: TParty[]) {}

  private get partys() {
    return Array.from(this._partys);
  }

  get = () => this.partys;
  getForChange = () => this._partys;

  private getCopySortPowersBy(power: PartyPower) {
    const partysForChar = this.partys.map((el) => el[power]);
    const sortedPartys = Int32Array.from(partysForChar).sort().reverse();
    return sortedPartys;
  }

  private getSumOf = (power: PartyPower) =>
    this.getCopySortPowersBy(power).reduce((sum, elem) => sum + elem);

  getPartysOnSortedBy(power: PartyPower) {
    return this.partys.sort((party1, party2) =>
      party1[power] > party2[power] ? -1 : 1
    );
  }

  getPartysNameSortedBy = (power: PartyPower): string[] =>
    this.getPartysOnSortedBy(power).map((el) => el.politica);

  getLeader = () => this.partys[0].firstName + " " + this.partys[0].lastName;

  getCoordsCanvasFromPartyPowerBy(power: PartyPower): number[] {
    const partyFrom = this.getCopySortPowersBy(power);

    const coordsCanvas: number[] = partyFrom.reduce(
      (acc, val) => {
        acc[0] += val;
        const partyPower = acc[0];
        const partyPowerPersent = 1 - partyPower / this.getSumOf(power);
        const coordCanvas = 2 * Math.PI * partyPowerPersent;

        return [...acc, coordCanvas];
      },
      [0]
    );

    return coordsCanvas;
  }

  getPowerPersentParty(partyName: partysNames, power: PartyPower): number {
    const partyTrigger = this.getPartyBy("politica", partyName)!;
    const powerPercentPartyTrigger = partyTrigger[power] / this.getSumOf(power);

    return +powerPercentPartyTrigger.toFixed(2);
  }

  setPartyPower = (
    characteristic: PartyPower,
    partyName: partysNames,
    power: number
  ) => {
    const party = this.getPartyBy("politica", partyName)!;
    party[characteristic] *= power;
  };

  getPartysCharacteristics(Characteristic: PartyKeys) {
    return this.get().map((party) => party[Characteristic]);
  }

  getRandomPartyName(): string {
    return this.getPartysCharacteristics("politica")[
      Math.round(Math.random() * this.get().length - 1)
    ] as string;
  }

  getPartyBy(charKey: PartyKeys, char: string) {
    return this.getForChange().find((party) => party[charKey] === char);
  }

  getPartyWithColorAndPersent(
    char: PartyPower,
    fix: number
  ): [string, number][] {
    const statics: [string, number][] = this.get().map((party) => [
      party.color,
      party[char],
    ]);

    const summ = statics.reduce((acc, val) => acc + val[1], 0);
    const result: [string, number][] = statics.map((party) => [
      party[0].slice(4, -1),
      +(party[1] / summ).toFixed(fix),
    ]);
    return result;
  }
  getNamesPartyswithColor() {
    return this.getPartysOnSortedBy("par").map((p) => {
      return {
        politica: p.politica,
        color: p.color.substring(4, 11),
      };
    });
  }
}
