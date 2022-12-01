import { AppPage } from './app.po';

describe('Arranque de la aplicacion', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('La aplicacion inicia correctamente', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Inicio');
  });
});
