import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'radioButton';

  selectGender = '';
  genders: any = [
    'Female',
    'Male'];


    radioChangesevent(event: any){
      this.selectGender = event.target.value;
    }
}
