import { TEvents } from "../types/TEvent";

export default class CEvents {
  constructor(private readonly _events: TEvents[]) {}

  get = () => this._events;
}
