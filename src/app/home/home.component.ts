import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoardService } from '../service/board.service';
import { Subscription } from 'rxjs';
import { Board } from '../model/board';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private boardService:BoardService) { }

  ngOnInit() {
    this.boardSubscription();
  }

  ngOnDestroy(){
    this.boardSubs.unsubscribe();
  }

  boardSubs:Subscription;
  boards:Board[];
  isBoards:boolean = false;

  boardSubscription(){
    this.boardSubs = this.boardService.boardObs.subscribe((boards:Board[]) => {
      if(boards){
        this.boards = boards;
        console.log('this.boards',this.boards);
        this.isBoards = true;
      }
    });
  }

}
