import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {

  constructor(private _ds: DataService, public _dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  user_fname: any
  user_mname: any
  user_lname: any
  user_username: any
  user_password: any
  user_email: any
  user_phone: any
  user_data: any = {}

  register() {
    this.user_data.user_fname = this.user_fname
    this.user_data.user_mname = this.user_mname
    this.user_data.user_lname = this.user_lname
    this.user_data.user_username = this.user_username
    this.user_data.user_password = this.user_password
    this.user_data.user_email = this.user_email
    this.user_data.user_phone = this.user_phone
    
    this._ds.sendApiRequest('register/', this.user_data).subscribe((data: {payload: any}) =>{
      this._dialog.closeAll()
    })
  }

}
