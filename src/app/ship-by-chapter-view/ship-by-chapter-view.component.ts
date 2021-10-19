import {Component, Input, OnInit} from '@angular/core';
import {ShipByChapter} from "../ship-by-chapter";

@Component({
  selector: 'app-ship-by-chapter-view',
  templateUrl: './ship-by-chapter-view.component.html',
  styleUrls: ['./ship-by-chapter-view.component.css']
})
export class ShipByChapterViewComponent implements OnInit {

  @Input() shipByChapter?: ShipByChapter;

  constructor() { }

  ngOnInit(): void {
  }

}
