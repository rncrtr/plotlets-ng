import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	characters = [
	  {"name":"Hugh",
	   "order":0,
	   "scenes":[
	    {"content":"Hugh walks into the forest","order":0},
	    {"content":"Hugh gets knocked out","order":1},
	    {"content":"","order":2}
	   ]
	  },
	  {
	    "name":"Ashley", 
	    "order":1,
	    "scenes":[
	      {"content":"Ashley looks into the lake","order":3},
	      {"content":"Ashley meets Hugh","order":4},
	      {"content":"Ashley convinces the council that Hugh is not dangerous","order":5}
	    ]
	  }
	];

}
