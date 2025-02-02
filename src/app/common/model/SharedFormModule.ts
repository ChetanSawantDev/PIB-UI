
export class DropDownItem {
    label: string;
    value: any;
    rowObjData:Object;
    constructor(label: string, value: any, rowObjData:Object) {
        this.label = label;
        this.value = value;
        this.rowObjData=rowObjData;
    }
}
  