import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-settingpage',
  templateUrl: './settingpage.component.html',
  styleUrls: ['./settingpage.component.css']
})
export class SettingpageComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  viewModel = {
    "exCount": [10, 20, 30, 40, 50],
    'rptCount': [1 , 2 , 3 ,4]
  };
  model = {
    'exCount': 10,
    'rptCount': 3
  }
  ngOnInit(): void {
  }
  SetExCount(){}

  SetRptCount(){}

  onSubmit(){
    const user =this.authService.getCurrentUser();
    const nm =user.name;
    console.log(user);
  }
}
