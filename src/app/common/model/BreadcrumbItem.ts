export class BreadcrumbItem{
    label:string;
    link:string;
    isLast:boolean;

    constructor(label:string, link:string, isLast:boolean){
        this.label= label;
        this.link = link;
        this.isLast = isLast;
    }
}      