import { AddIngPipe } from './add-ing.pipe';

describe('AddIngPipe', () => {  //describe : on déclare une collection de test

  it('create an instance', () => {  // un test unitaire
    const pipe = new AddIngPipe();
    expect(pipe).toBeTruthy();
  });
});
