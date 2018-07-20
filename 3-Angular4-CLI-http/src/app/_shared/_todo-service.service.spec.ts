/*
import {TestBed, inject, async, getTestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'; //

import {TodoServiceService} from './_todo-service.service';
import {ObjectTypes} from './ObjectTypes';

describe('TodoServiceService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoServiceService]
    });
  });

  it('should be created', inject([TodoServiceService], (service: TodoServiceService) => {
      expect(service).toBeTruthy();
  }));


  it('should return arr base', inject([TodoServiceService, HttpTestingController], (service: TodoServiceService, backend: HttpTestingController) => {
    // console.log('- TEST "return base" TodoServiceService success');

    const dummyUsers: ObjectTypes[] = [
      new ObjectTypes(0, '1 test', true, 'body test id 0'),
      new ObjectTypes(1, '2 test', false, 'body test id 1')
    ];

    service.getDateBaseTodos().subscribe(users => {
      expect(users).toEqual(dummyUsers);
    });

    backend.expectOne({
      method: 'GET',
      url: 'api/_BD'
    }).flush(dummyUsers);

  }));

});
*/
