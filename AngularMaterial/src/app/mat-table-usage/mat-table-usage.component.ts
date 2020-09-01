import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mat-table-usage',
  templateUrl: './mat-table-usage.component.html',
  styleUrls: ['./mat-table-usage.component.scss']
})


export class MatTableUsageComponent implements OnInit {
  displayedColumns=['order','name','color','group']
  dataSource=new MatTableDataSource<Food>(FOOD_DATA)
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Food{
  name:string;
  color:string;
  group:string;
  order:number;
}
const FOOD_DATA:Food[]=[
  {name:"Apple",color:"red",group:"Fruits",order:1},
  {name:"Banana",color:"yello",group:"Fruits",order:2},
  {name:"Pinapple",color:"green",group:"Fruits",order:3},
  {name:"Guava",color:"white",group:"Fruits",order:4},
  {name:"Grapes",color:"black",group:"Fruits",order:5}
];
