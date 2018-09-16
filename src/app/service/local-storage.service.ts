import {Injectable} from "@angular/core";
import {Board} from "../model/board";

@Injectable()
export class LocalStorageService{

    constructor(){}

    getData(key):any{
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
    }

    setData(key,data):void{
        localStorage.setItem(key,JSON.stringify(data));
    }



}