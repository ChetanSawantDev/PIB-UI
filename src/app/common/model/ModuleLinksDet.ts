export class ModuleLinksDet{
    MLD_faIcon:string;
    MLD_title:string;
    MLD_description:string;
    MLD_faIconSecondary?:string;
    MLD_href:string;
    constructor(faIcon:string, title:string, description:string, secondaryIcon:string, href:string){
        this.MLD_faIcon = faIcon;
        this.MLD_title =  title;
        this.MLD_description = description;
        this.MLD_faIconSecondary = secondaryIcon;
        this.MLD_href = href;
    }
}

export class ModuleMenuTreeModel{
    MMT_name : string = '';
    MMT_moduleName : string = '';
    MMT_modulePageTitle : string = '';
    MMT_modulePageUrl : string = '';
    MMT_modulePageIcon : string = '';
    MMT_childManu ?: ModuleMenuTreeModel[];

}
