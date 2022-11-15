import { ConsultantViewComponent } from './../consultant-view/consultant-view.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  data:any={}

  constructor( private router: Router ){}
  
  fnClick(){
    console.log(this.data);
  }

  calculateScore(){
    //Gathers up the entire data set of radio buttons
    let Value = this.data


    //Starts every advisor at 0 tally. Must be initialized at 1 for comparison operator to work.
    let x = 2
    let y = 3
    let marieScore = 1;
    let peterScore = 1;
    let angelaScore = 1;
    let kathyScore = 1;
    let stevenScore = 1;
    [this.data.service, this.data.age, this.data.risk, 
    this.data.exp, this.data.port, this.data.invest].forEach(Value => {
  if (Value === 'Marie') {
    marieScore ++ ;
  } else if (Value === 'Peter') {
    peterScore ++  ;
  } else if (Value === 'Angela') {
    angelaScore ++ ;
  } else if (Value === 'Steven') {
    stevenScore ++ ;
  } else if (Value === 'Kathy') {
    kathyScore ++ ;
  
// Weighted values to lower chances of a tie
  } else if (Value === 'Peter2') {
    peterScore = peterScore + y   ;
  } else if (Value === 'Angela2') {
    angelaScore = angelaScore + y ;
  } else if (Value === 'Steven2') {
    stevenScore = stevenScore + y ;
  } else if (Value === 'Kathy2'){
    kathyScore = kathyScore + y ;
  } else if (Value === 'Marie2'){
    marieScore = marieScore + y ;}


let scoreList = [peterScore, angelaScore, stevenScore, kathyScore, marieScore]
    console.log(scoreList)



    // compares radio scores and routes to highest scoring advisor calendar
    if (marieScore && stevenScore && kathyScore && angelaScore < peterScore ) {
      console.log("Peter wins")
      this.router.navigate(['/blackcal'])
    } else if (marieScore && stevenScore && peterScore && angelaScore < kathyScore ) {
      console.log("Kathy Wins")
      this.router.navigate(['/whitecal'])
    } else if (kathyScore && stevenScore && peterScore && angelaScore < marieScore ) {
      console.log("Marie Wins")
      this.router.navigate(['/erkelcal'])
    } else if (kathyScore && marieScore && peterScore && angelaScore < stevenScore ) {
      console.log("Steven Wins")
      this.router.navigate(['/greencal'])
    } else  {
      console.log("Angela Wins")
      this.router.navigate(['/bleucal'])
    }

    console.log(peterScore)
  return console.log(scoreList)
        
  }
)}



  ngOnInit(): void {
  }

 

}
