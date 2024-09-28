import { Category } from "../Enums/category.enum";

export interface IJourney{
    id : number;
    description : string;
    country : string;
    destination : string;
    price : number;
    date : Date;
    category : Category;
    imageName : string;
}