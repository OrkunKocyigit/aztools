import {Component, Input, OnInit} from '@angular/core';
import {ShipByMap} from "../ship-by-map";

@Component({
  selector: 'app-ship-by-map',
  templateUrl: './ship-by-map.component.html',
  styleUrls: ['./ship-by-map.component.css']
})
export class ShipByMapComponent implements OnInit {

  @Input() shipByMap?: ShipByMap

  constructor() { }

  ngOnInit(): void {
  }

}
