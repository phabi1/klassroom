import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpaceSelectors } from '@klassroom/client/store/space';
import { StudentActions } from '@klassroom/client/store/space-teacher-students';
import { Store, select } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { first } from 'rxjs';

@Component({
  selector: 'klassroom-space-teacher-students-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [{
    key: 'lastname',
    type: 'input',
    props: {
      label: 'Lastname',
      required: true
    }
  },
  {
    key: 'firstname',
    type: 'input',
    props: {
      label: 'Firstname',
      required: true
    }
  },
  {
    key: 'shortname',
    type: 'input',
    props: {
      label: 'Shortname'
    }
  }, {
    key: 'sex',
    type: 'radio',
    props: {
      label: 'sex',
      options: [{ value: 'boy', label: 'Boy' }, { value: 'girl', label: 'Girl' }, { value: 'unknow', label: 'Unknow' }],
    },
  }, {
    key: 'grade',
    type: 'select',
    props: {
      label: 'Grade',
      options: []
    }
  }];

  constructor(private store: Store) { }

  submit() {
    if (this.form.valid) {
      this.store.pipe(select(SpaceSelectors.selectCurrentSpace), first()).subscribe((space: any) => {
        const values = {
          ...this.model as any,
          grade: '6481c1481033327eb7b340fd',
          course: space.course
        };
        this.store.dispatch(StudentActions.addStudent({ data: values }));
      });
    }
  }
}
