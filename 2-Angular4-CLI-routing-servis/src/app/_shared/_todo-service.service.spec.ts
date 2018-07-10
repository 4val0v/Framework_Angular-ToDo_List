import { TestBed, inject } from '@angular/core/testing';

import { TodoServiceService } from './_todo-service.service';

describe('TodoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoServiceService]
    });
  });

  it('should be created', inject([TodoServiceService], (service: TodoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
