import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Injectable } from "@angular/core";
import { AsyncValidator, AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({providedIn: 'root'})
// ^^^ NECESSARY for dependency injection (BUT ONLY for regular .ts classes like this one)
// (NOTE: also, the 2nd benefit is being able to INJECT THIS CLASS into OTHER classes)
// (NOTE: the easiest way to enable this is byadding the 'providedIn' property)
export class EmailTaken implements AsyncValidator {
    constructor(private auth: AngularFireAuth) {
    }

    validate = (control: AbstractControl) : Promise<ValidationErrors | null> => {
        //used as an alternative to check if an email is taken.
        //the promise returned will be 'null' if an email is free
        return this.auth.fetchSignInMethodsForEmail(control.value).then(
            response => response.length ? { emailTaken: true } : null
        )

    }
}
