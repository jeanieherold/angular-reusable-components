//custom structural directive
import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    //args
    private viewContainer: ViewContainerRef, //ref to the element we applied our directive to - but its a version we can mutate
    private TemplateRef: TemplateRef<any> //ref to the elements that are inside the ViewContainerRef
  ) { }

  @Input('appTimes') set render(times: number) {
    //clear the container contents
    this.viewContainer.clear();

    //recreate the container contents
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.TemplateRef, {});
    }
  }
}
