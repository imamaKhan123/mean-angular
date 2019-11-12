import { Directive } from '@angular/core';
import {AsyncValidator, ValidationErrors, AbstractControl, AsyncValidatorFn, NG_ASYNC_VALIDATORS} from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {UserService} from './../services/user.service';

export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.checkEmail(c.value).pipe(
      map(users => {
        return users && users !=null ? { 'uniqueEmail': true } : null;
      })
    );
  };
}
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