import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  filterTerm: any;
  searchQuery: string = '';
  list: any;
  edit:boolean = false;

  constructor(private router: Router) {
    this.initializeItems();
   }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(["/tabs/tab2"])
  }
  
  validar(){

    console.log(this.filterTerm);
    for (var index in this.list) {

      console.log(this.filterTerm);

      if (this.list[index].id == this.filterTerm)
        {console.log("true")}
      else
        {console.log("false")}
    }
  }

  initializeItems() {
     this.list = [{
        "id": "1",
        "name": "Leanne"
      },
      {
        "id": "2",
        "name": "Ervin"
      },
      {
        "id": "3",
        "name": "Clementine"
      },
      {
        "id": "4",
        "name": "Patricia"
      },
      {
        "id": "5",
        "name": "Chelsey"
      },
      {
        "id": "6",
        "name": "Dennis"
      },
      {
        "id": "7",
        "name": "Kurtis"
      },
      {
        "id": "8",
        "name": "Nicholas"
      },
      {
        "id": "9",
        "name": "Glenna"
      },
      {
        "id": "10",
        "name": "Clementina"
      }
    ]
  }

  userExists(input: any) {
    console.log("this.userExists"); // true
    console.log(input); // false
    return this.list.some(function(el) {
      return (el.id === input || el.name === input || el.email === input )
    }); 
  }

  getItems(ev: any) {

    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    console.log(val)
   
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.list = this.list.filter((data) => {
        console.log("hola");
        console.log(data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        if (!this.edit)
          this.edit = data.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        return (data.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    
    if (val.trim() == '')
      {document.getElementById("buscar").style.color="#666666"
       document.getElementById("buscar").style.backgroundColor="#FFFFFF"
       console.log("primero")
      }
    else if (!this.edit){
      document.getElementById("buscar").style.color="#ff4d4d"
      document.getElementById("buscar").style.backgroundColor="#ff4d4d"
      console.log("segund")
    }
    else{
        document.getElementById("buscar").style.color="#2dd36f"
        document.getElementById("buscar").style.backgroundColor="#2dd36f"
        console.log("tercer")
    }
  
    this.edit = false
  }
}
