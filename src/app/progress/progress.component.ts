import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  bars = [];
  buttons = [];
  limit = "";
  progress = 0;

  constructor(private userService: AppService) 
  {
     console.log("called");
  }

  ngOnInit() {
    console.log("ufjjhuhuhk")
    this.getProgressBarData();
  }

  selectProgress(event) {
    this.progress = event.target.value;
  }

  getProgressBarData() {
    this.userService.getProgressBarData().subscribe((data) => {
      let j = 1, k = 1;;
      for (let i = 0; i < data.bars.length; i++) {
        this.bars.push({ id: i, value: data.bars[i], name: "#progress " + j, color: '#b2d7e6' });
        j++;
      }

      for (let i = 0; i < data.buttons.length; i++) {
        this.buttons.push({ id: i, value: data.buttons[i], name: "Button" + k });
        k++;
      }
      this.limit = data.limit;
    })

  }

  buttonProgress(buttonValue) {  
    this.bars[this.progress].value = this.bars[this.progress].value + buttonValue;
    if (this.bars[this.progress].value <= 0) {
      this.bars[this.progress].value = 0;
      this.bars[this.progress].color = '#b2d7e6';
    }
    if (this.bars[this.progress].value > 0) {
      this.bars[this.progress].color = '#b2d7e6';
    }
    if (this.bars[this.progress].value >= 100) {
      this.bars[this.progress].color = '#FF0000';
    }
    if (this.bars[this.progress].value >= this.limit) {
      this.bars[this.progress].color = '#FF0000';
      this.bars[this.progress].value = this.limit;
    }
  }

}
