import { IParty } from "@Interfaces/IParty";

export default class Partys {
  constructor(private partys: IParty[]) {}

  private setThisPartysOnSortedFor(characteristic: "pop" | "par") {
    this.partys.sort((party1, party2) =>
      party1[characteristic] > party2[characteristic] ? -1 : 1
    );
  }

  private getSortPowersFor(characteristic: "pop" | "par") {
    const partysForChar = this.partys.map((el) => el[characteristic]);
    const sortedPartys = Int32Array.from(partysForChar).sort().reverse();

    return Array.from(sortedPartys);
  }

  private SumOf = (characteristic: "pop" | "par") =>
    this.getSortPowersFor(characteristic).reduce((sum, elem) => sum + elem, 0);

  getPartysName = () => this.partys.map((el) => el.politica);

  get = () => this.partys;

  getLeader = () => this.partys[0].firstName + " " + this.partys[0].lastName;

  getCoordsCanvasFromPartyPowerBy(characteristic: "pop" | "par"): number[] {
    const partyFrom = this.getSortPowersFor(characteristic);

    const coordsCanvas: number[] = partyFrom.reduce(
      (acc, val) => {
        acc[0] += val;
        const partyPower = acc[0];
        const partyPowerPersent = 1 - partyPower / this.SumOf(characteristic);
        const coordCanvas = 2 * Math.PI * partyPowerPersent;

        return [...acc, coordCanvas];
      },
      [0]
    );

    return coordsCanvas;
  }

  powerPersentParty(
    partyName:
      | "monarchist"
      | "liberal"
      | "democratic"
      | "nationalist"
      | "green"
      | "socialist",
    characteristic: "pop" | "par"
  ): number {
    this.setThisPartysOnSortedFor(characteristic);
    const partys = Array.from(this.get());

    const partyTrigger = partys.find((party) => party.politica === partyName)!;
    const summByCharacteristic = partys.reduce(
      (acc, party) => acc + party[characteristic],
      0
    );
    const powerPercentPartyTrigger =
      partyTrigger[characteristic] / summByCharacteristic;

    return +powerPercentPartyTrigger.toFixed(2);
  }
}
