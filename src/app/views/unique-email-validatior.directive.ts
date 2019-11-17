import { Directive } from '@angular/core';
import {AsyncValidator, ValidationErrors, AbstractControl, AsyncValidatorFn, ValidatorFn, NG_ASYNC_VALIDATORS} from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from './../services/user.service';
import {  FormBuilder, FormGroup} from '@angular/forms';

export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.checkEmail(c.value).pipe(
      map(users => {
        console.log("printing users")
        console.log(users)
        return users ===null ?null  : { 'uniqueEmail': true } ;
      })
    );
  };
}


export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('password2').value)
    return null;
  else
    return {passwordMismatch: true};
};

@Directive({
  selector: '[uniqueEmail]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true }]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {

  constructor(private userService: UserService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueEmailValidator(this.userService)(c);
  }

}