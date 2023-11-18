import { IParty } from "@Interfaces/IParty";

export default class Partys {
  constructor(private partys: IParty[]) {}

  private setPartyOnSortedFor(characteristic: "pop" | "par") {
    this.partys.sort((party1, party2) =>
      party1[characteristic] > party2[characteristic] ? -1 : 1
    );
  }

  private sortPartys(PartysFor: number[]) {
    const sortedPartys = new Int32Array(PartysFor).sort().reverse();
    return Array.from(sortedPartys);
  }

  private getSortFor(characteristic: "pop" | "par") {
    const partysForPop = this.partys.map((el) => el[characteristic]);

    return this.sortPartys(partysForPop);
  }

  private SumOf(characteristic: "pop" | "par") {
    const sum = this.getSortFor(characteristic).reduce(
      (sum, elem) => sum + elem,
      0
    );
    return sum;
  }

  getPartysName() {
    return this.partys.map((el) => el.politica);
  }

  get() {
    // console.log(this.partys);
    return this.partys;
  }

  getLeader() {
    return this.partys[0].firstName + " " + this.partys[0].lastName;
  }

  getPartyPower(characteristic: "pop" | "par") {
    const partyFrom = this.getSortFor(characteristic).map((el) => {
      const partyPower = {
        value: el,
        nameParty: this.partys.find(
          (party) => Math.floor(party[characteristic]) === el
        )!.politica,
      };

      return partyPower;
    });

    partyFrom.unshift({ value: 0, nameParty: "none" });

    const PartyPower = partyFrom.map((el, imap) => {
      const sumSome = partyFrom.reduce(
        (sum, value, ired) => (ired < imap + 1 ? sum + value.value : sum),
        0
      );
      // console.log(el.nameParty / this.SumOf("pop"));
      return {
        value: 2 * Math.PI * (1 - sumSome / this.SumOf(characteristic)),
        name: el.nameParty,
      };
    });

    return PartyPower;
  }

  powerPersent(
    partyName:
      | "monarchist"
      | "liberal"
      | "democratic"
      | "nationalist"
      | "green"
      | "socialist",
    characteristic: "pop" | "par"
  ) {
    const power = this.getPartyPower(characteristic);
    const sum = power.reduce((acc, el) => acc + el.value, 0);
    const partyPower = power.find((el) => el.name === partyName);
    const percent = partyPower!.value / sum;
    return percent;
  }
}
