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
  @ViewChild('tipContent') tipContentRef: ElementRef

  constructor() {}

  ngOnInit() {
    this.checkOffScreen()
  }
  // checkOffScreen(e) {
  //   console.log(e.target, e.currentTarget);
    
  //   const tipElement = this.tipRef.nativeElement;
  //   console.log(tipElement);

  //   this.isLeftOffScreen = tipElement.getBoundingClientRect().left < 0;
  //   this.isRightOffScreen = tipElement.getBoundingClientRect().right > document.body.getBoundingClientRect().right;
  //   console.log(tipElement.getBoundingClientRect().right, document.body.getBoundingClientRect().right);
  // }

  checkOffScreen() {
    const tipElement = this.tipRef.nativeElement;
    const tipContent = this.tipContentRef.nativeElement;
    const { left: tipElementLeft } = tipElement.getBoundingClientRect();
    const { width: tipContentWidth } = tipContent.getBoundingClientRect();
    const { right: bodyRight } =  document.body.getBoundingClientRect();

    this.isLeftOffScreen = tipElementLeft < tipContentWidth / 2;
    this.isRightOffScreen = tipElementLeft + (tipContentWidth / 2) > bodyRight;
    console.log(tipElementLeft + tipContentWidth, document.body.getBoundingClientRect().right);
  }

}
