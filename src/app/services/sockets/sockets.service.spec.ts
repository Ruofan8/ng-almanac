import { TestBed } from '@angular/core/testing';

import { SocketService } from './sockets.service';

describe('SocketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SocketService = TestBed.get(SocketService);
    expect(service).toBeTruthy();
  });
});
