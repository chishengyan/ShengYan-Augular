import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
  
})
export class MemberList {
    member:Array<any>
    
  //  memberEditPage:any = MemberEdit

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
    this.member = [
        {id:1,name:"Li,Xiaoming",sex:"Male"},
        {id:5,name:"Ai,Fu",sex:"Male"},
        {id:7,name:"Li,Ming",sex:"Male"},
        {id:3,name:"Guo,Lei",sex:"Male"},
        {id:6,name:"Wang,Shuai",sex:"Male"},
        ]
        
      
      }

  presentSort(){
          console.log('aaaaa');
          this.member.sort(function(a, b) {
          var nameA = a.id; // ignore upper and lowercase
          var nameB = b.id; // ignore upper and lowercase
          if (nameA < nameB) {
          return -1;
          }
          if (nameA > nameB) {
          return 1;
          }
          // names must be equal
          return 0;
          });
        }; 
  presentSort1(){
          console.log('aaaaa');
          this.member.sort(function(a, b) {
          var nameA = a.id; // ignore upper and lowercase
          var nameB = b.id; // ignore upper and lowercase
          if (nameA < nameB) {
          return 1;
          }
          if (nameA > nameB) {
          return -1;
          }
          // names must be equal
          return 0;
          });
        }; 
  presentSort2(){
        this.member.sort(function(a, b) {
        return Math.round( Math.random());
        });
        };

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}
