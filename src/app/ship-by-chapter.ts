import {ShipByMap} from "./ship-by-map";
import {Ship} from "./ship";

export class ShipByChapter {
  chapter: number;
  maps: ShipByMap[];

  constructor(chapter: number) {
    this.chapter = chapter
    this.maps = []
  }

  addShip(map: number, ship: Ship) {
    let mapItem = this.maps.find(item => item.map === map);
    if (mapItem == undefined) {
      mapItem = new ShipByMap(map);
      this.maps.push(mapItem);
    }
    mapItem.ships.push(ship);
  }
}
