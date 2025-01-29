import { MessageService } from './message.service';

describe('MessageService ', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no message to start ', () => {
    expect(service.messages.length).toBe(0);
  });

  it('Should add a mesg when add is called ', () => {
    service.add('message 1');
    expect(service.messages.length).toBe(1);
  });

  it('Should clear the messages array when clear is called ', () => {
    service.add('message 1');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
