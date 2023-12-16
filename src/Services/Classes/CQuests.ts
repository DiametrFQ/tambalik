import { TQuest } from "../types/TQuest";

export default class CQuests {
  constructor(private readonly _quest: TQuest[]) {}

  get = () => this._quest;
}
