import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public hideRequiredControl = new FormControl(true);
  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  public activePanel: boolean = false;

  public hidePassword: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {}

  login() {}

  register() {}

  getErrorMessage(type: string): string {
    return 'Error';
  }

  toggleScreen() {
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.activePanel = !this.activePanel;
    if (this.activePanel) {
      this.form.get('username')?.setValidators(Validators.required);
    } else {
      this.form.get('username')?.setValidators([]);
    }
  }
}
