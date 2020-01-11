import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable }    from 'rxjs';
import { OnInit }    from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-jingbai',
  templateUrl: './jingbai.component.html',
  styleUrls: ['./jingbai.component.scss']
})
export class JingbaiComponent implements OnInit {
  jingbaiForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.jingbaiForm = this.fb.group({
      huangdi: '黄帝炎帝',
      shizu: '袁氏始祖',
      benzhiId: '本支始迁祖',
      yeye: '爺爺輩',
      fubei: '父母輩',
      pinbei: '平輩子',
      xiaobei: '小輩子',
    });
  }



  save() {
    console.log(this.jingbaiForm);
    console.log('Saved: ' + JSON.stringify(this.jingbaiForm.value));
    this.router.navigate(['pray',{huangdi: this.jingbaiForm.value.huangdi, shizu: this.jingbaiForm.value.shizu,
      benzhiId: this.jingbaiForm.value.benzhiId,
      yeye: this.jingbaiForm.value.yeye,
      fubei: this.jingbaiForm.value.fubei,
      pinbei: this.jingbaiForm.value.pinbei,
      xiaobei: this.jingbaiForm.value.xiaobei,
      xx: 'dbdd',
     }]).then( (e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
export class Customer {

  constructor(
    public huangdi = '',
    public shizu = '',
    public benzhiId = '',

    public yeye=  '',
    public fubei=  '',
    public pinbei=  '',
    public xiaobei=  '',
    ){}

}

