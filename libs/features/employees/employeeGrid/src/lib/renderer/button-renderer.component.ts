import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'button-renderer',
    templateUrl: 'button-renderer.component.html',
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
    params: any;
    label: string = 'Details';

    agInit(params: any): void {
        this.params = params;
        this.label = this.params.label || null;
    }

    refresh(params?: any): boolean {
        return true;
    }

    onClick($event: any) {
        if (this.params.onClick instanceof Function) {
            const params = {
                event: $event,
                rowData: this.params.node.data,
            };
            this.params.onClick(params);
        }
    }
}
