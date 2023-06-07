import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentAvatarComponent } from './student-avatar.component';

describe('StudentAvatarComponent', () => {
  let component: StudentAvatarComponent;
  let fixture: ComponentFixture<StudentAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
