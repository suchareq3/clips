import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class RegisterValidators {
  //the outer function is responsible for accepting names of the controls...
  static match(controlName: string, matchingControlName: string) : ValidatorFn {
    //...the inner function will have access to the information
    return (group: AbstractControl) : ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(matchingControlName);

      if(!control || !matchingControl) {
      //this returned value has nothing to do with the values themselves...
      //...but it's helpful for devs for debugging
        console.error('FormControls cannot be found in the FormGroup.')
        return { controlNotFound: false}
      }

      //if validation passes, we return 'null'
      const error = control.value === matchingControl.value 
        ? null 
        : { noMatch: true }

      //passing in 'null' will clear the error.
      matchingControl.setErrors(error)

      return error;
    }
  }
}