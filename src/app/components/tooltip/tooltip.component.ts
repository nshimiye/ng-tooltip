import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  isLeftOffScreen = false;
  isRightOffScreen = false;

  @ViewChild('tip') tipRef: ElementRef

  constructor() {}

  ngOnInit() {}

  checkOffScreen() {
    const tipElement = this.tipRef.nativeElement;
    console.log(tipElement);

    this.isLeftOffScreen = tipElement.getBoundingClientRect().left < 0;
    this.isRightOffScreen = tipElement.getBoundingClientRect().right > document.body.getBoundingClientRect().right;
    console.log(tipElement.getBoundingClientRect().right, document.body.getBoundingClientRect().right);
  }
}
