import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-newcat',
  templateUrl: './newcat.component.html',
  styleUrls: ['./newcat.component.css']
})
export class NewcatComponent implements OnInit {

  formObj: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    
    this.formObj = this.fb.group ({
    });

  }

    sendForm = function (){
      console.log("TCL: NewcatComponent -> sendForm -> this.formObj", this.formObj)
        this.doAJAX("create" , JSON.stringify(this.formObj.value ) , "Cat", this.callback);
        
    }

    reset = function (){
        this.formObj.value = {};
    }
    

    callback = function (arr){
        alert("Successfully sent.");
        // window.location.assign("customer.html");
    }

    serverURL() {
      return "http://localhost:3000/api?"; // here to change DB
    }
  
    doAJAXCall(partialLink, dataToSend, callback, callbackFailed ,dis ) {
  
      let url = this.serverURL() + partialLink;
  
      let data = dataToSend;
      $.ajax({
          url: url,
          type: 'GET',
          data: data,
          dataType: 'json',
          contentType: "application/json; charset=utf-8",
          success: function (arr) {
              callback(arr);
              return "Success";
          },
          error: function (arr) {
            callbackFailed(arr);
              return "Failed";
          }
      });
  
  }
  doAJAX(action , data , entity , callback ,dis ){
      let sentString = "action=" + action + "&data=" + data + "&entity=" + entity;
      let url = this.serverURL() + sentString;
      $.ajax({
          url: url,
          type: 'GET',
          data: null,
          success: function (arr) {
              callback(arr , dis);
              return "Success";
          },
          error: function (arr) {
              callback(arr , dis);
              return "Failed";
          }
      });
      // $.get(url    , callback);
  }

}
