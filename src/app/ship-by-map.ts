import {Ship} from "./ship";

export class ShipByMap {
  map: number;
  ships: Ship[];

  constructor(map: number) {
    this.map = map;
    this.ships = []
  }
}
