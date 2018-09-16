import {Injectable} from "@angular/core";
import {Board} from "../model/board";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class BoardService{

    constructor(
        private http:HttpClient
    ){
        this.fetchBoards();
    }

    boardSubject = new BehaviorSubject({});
    boardObs = this.boardSubject.asObservable();
    boards:Board[];

    private urls = {
        boards : "/api/boards"
    };


    fetchBoards(){
        this.http.get(this.urls.boards).subscribe((boards:Board[]) => {
            this.boards = boards;
            this.publishBoards();
        });        
    }

    publishBoards(){
        this.boardSubject.next(this.boards);
    }

    setBoards():void{

    }

}