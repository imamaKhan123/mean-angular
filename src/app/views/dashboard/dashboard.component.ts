import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username:String='';
  constructor(private _user:UserService, private _router:Router) { 
    this._user.SingleUser()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addName(data){
    this.username = data.username;
  }

  ngOnInit() {  }
  toogle(){
  
    
    
  }

  myfun(){
    console.log("uadgudgawg");
    

    
  
const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
console.log(navExpand);
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`

navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})


// ---------------------------------------
// not-so-important stuff starts here

const ham = document.getElementById('ham')
ham.addEventListener('click', function() {
	document.body.classList.toggle('nav-is-toggled')
})

    

  }
  

}
