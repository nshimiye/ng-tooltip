import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  isLeftOffScreen = false;
  isRightOffScreen = false;

  @ViewChild('tip') tipRef: ElementRef
  @ViewChild('tipContent') tipContentRef: ElementRef

  checkOffScreen() {
    const tipElement = this.tipRef.nativeElement;
    const tipContent = this.tipContentRef.nativeElement;
    const { left: tipElementLeft } = tipElement.getBoundingClientRect();
    const { width: tipContentWidth } = tipContent.getBoundingClientRect();
    const { right: bodyRight } =  document.body.getBoundingClientRect();

    this.isLeftOffScreen = tipElementLeft < tipContentWidth / 2;
    this.isRightOffScreen = tipElementLeft + (tipContentWidth / 2) > bodyRight;
  }

}
