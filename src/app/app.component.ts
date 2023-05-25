import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hub-central';
  height: number=document.documentElement.clientHeight;
  width: number=document.documentElement.clientWidth;
  ngOnInit(): void {
    localStorage.removeItem("PageNo")
  }

  ngAfterViewInit() {
  setInterval(() => {
    this.height = document.documentElement.clientHeight;
    this.width = document.documentElement.clientWidth;
  },2000)
}
}
