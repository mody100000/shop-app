import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Iuser } from './../../models/iuser';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userSer: UserService,
    private authSer: AuthService,
    private router: Router
  ) {}
  user: Iuser = {} as Iuser;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumbers: this.formBuilder.array([
        this.formBuilder.control('', Validators.pattern(/^01[0125][0-9]{8}$/)),
      ]),
      address: this.formBuilder.group({
        city: ['', Validators.required],
        postalCode: ['', Validators.required],
        street: ['', Validators.required],
      }),
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get fullName() {
    return this.userForm.get('fullName');
  }
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get mobileNumbers() {
    return this.userForm.get('mobileNumbers') as FormArray;
  }

  addMobileNumber() {
    this.mobileNumbers.push(
      this.formBuilder.control('', Validators.pattern(/^01[0125][0-9]{8}$/))
    );
  }

  removeMobileNumber(index: number) {
    this.mobileNumbers.removeAt(index);
  }

  get city() {
    return this.userForm.get('address.city');
  }
  get postalCode() {
    return this.userForm.get('address.postalCode');
  }
  get street() {
    return this.userForm.get('address.street');
  }
  addUser() {
    this.userSer.addUser(this.userForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.authSer.login('mody@gmail.com', '123');
        this.redirectToOrder();
      },
    });
  }
  redirectToOrder() {
    this.router.navigate(['/order']);
  }
}
