import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-inbox-screen',
  templateUrl: './pure-inbox-screen.component.html',
  styleUrls: ['./pure-inbox-screen.component.css']
})
export class PureInboxScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() error: any;
}
