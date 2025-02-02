export class PlantBizServices{

    title: string;
    description:  string;
    imagePath:  string;

    constructor(title:string, desc:string,imagePath:string){
        this.title = title;
        this.description = desc;
        this.imagePath = imagePath;
    }
}