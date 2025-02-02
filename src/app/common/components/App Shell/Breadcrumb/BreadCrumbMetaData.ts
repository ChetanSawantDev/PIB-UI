export class BreadCrumbData{
    public title:string;
    public url:string;
    public icon:string;

    constructor(title:string, url:string, icon:string){
        this.title = title;
        this.url = url;
        this.icon = icon;
    }
}



export class BreadCrumbComponentList{
    readonly 'home' : BreadCrumbData = new BreadCrumbData('Home' , '' , 'assets/icons/breadcrumb/home.png');
    readonly 'admin' : BreadCrumbData = new BreadCrumbData('Admin' , '' , 'assets/icons/breadcrumb/admin.png');
    readonly 'user' : BreadCrumbData = new BreadCrumbData('User' , '' , 'assets/icons/breadcrumb/user.png');
    readonly 'finance' : BreadCrumbData = new BreadCrumbData('Finance' , '' , 'assets/icons/breadcrumb/finance.png');
    readonly 'inventory' : BreadCrumbData = new BreadCrumbData('Inventory' , '' , 'assets/icons/breadcrumb/inventory.png');
    readonly 'production' : BreadCrumbData = new BreadCrumbData('Production' , '' , 'assets/icons/breadcrumb/production.png');
    readonly 'quality' : BreadCrumbData = new BreadCrumbData('Quality' , '' , 'assets/icons/breadcrumb/quality.png');
    readonly 'sales' : BreadCrumbData = new BreadCrumbData('Sales' , '' , 'assets/icons/breadcrumb/sales.png');
    readonly 'crm' : BreadCrumbData = new BreadCrumbData('Customer Reltionship' , '' , '/app/breadcrumb/icons/crm.png');
    readonly 'retailers' : BreadCrumbData = new BreadCrumbData('Retailers' , '' , '/app/breadcrumb/icons/retailers.png');
    readonly 'logistics' : BreadCrumbData = new BreadCrumbData('Logistics' , '' , '/app/breadcrumb/icons/logistics.png');


    getBreadCrumb(activatedUrl : string) : BreadCrumbData[]{
        let l_breadcrumbList : BreadCrumbData[] = [];
        return l_breadcrumbList;
    }
}