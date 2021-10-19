import {Component, OnInit} from '@angular/core';
import {ShipDrop} from "../ship-drop";
import ShipDrops from "../../assets/ship_drops.json";
import {ShipByChapter} from "../ship-by-chapter";
import {Ship} from "../ship";

@Component({
  selector: 'app-drop-only-ships',
  templateUrl: './drop-only-ships.component.html',
  styleUrls: ['./drop-only-ships.component.css']
})
export class DropOnlyShipsComponent implements OnInit {
  ships: ShipDrop[] = ShipDrops
  shipsByChapter: ShipByChapter[]

  constructor() {
    this.shipsByChapter = this.createShipsByChapter(this.ships)
  }

  ngOnInit(): void {
  }

  private createShipsByChapter(ships: ShipDrop[]) {
    let result: ShipByChapter[] = [];
    for (let ship of ships) {
      let drops = ship.drops;
      for (let drop of drops) {
        let findItem = result.find(resultItem => resultItem.chapter === drop.chapter);
        if (findItem == undefined) {
          findItem = new ShipByChapter(drop.chapter);
          result.push(findItem);
        }
        findItem.addShip(drop.map, new Ship(ship.name, ship.image));
      }
    }
    result.sort((a, b) => a.chapter - b.chapter);
    result.forEach(value => value.maps.sort((a, b) => a.map - b.map));
    return result;
  }
}
