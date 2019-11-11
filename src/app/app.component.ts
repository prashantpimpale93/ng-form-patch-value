import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  form: FormGroup;

  obj: any = { name: "Prashant", surname: "Pimpale" };

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(""),
      surname: new FormControl("")
    });

    var obs = this.customPatchValue(['name'], this.obj, this.form);
    console.log(obs)
  }

  customPatchValue(keys: string[] = null, data: any, formGroup: FormGroup) {
    Object.keys(data).forEach(key => {
      if (!keys || keys.length == 0 || keys.some(x => x == key)) {
        formGroup.patchValue({ [key]: data[key] })
      } else {
        console.log("Non matching keys", key);
      }
    });
    return formGroup;
  }
}
