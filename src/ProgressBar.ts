import {Component, Input} from "angular2/core";

@Component({
    selector: "progress-bar",
    template: `
<div class="progress">
    <div class="progress-bar"
        role="progressbar"
        [attr.aria-valuenow]="value / max * 100"
        aria-valuemin="0"
        [attr.aria-valuemax]="value / max * 100" [ngStyle]="{ width: value / max * 100 + '%' }">
        <span class="sr-only">{{ value / max * 100 }}% Complete</span>
    </div>
</div>
`
})
export class ProgressBar {

    @Input()
    value = 0;

    @Input()
    max = 100;

}