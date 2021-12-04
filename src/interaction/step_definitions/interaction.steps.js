const { I, pages } = inject();
// Add in your custom step files
  
Given('que o usuário acesse o app', () => {
  pages.interation.accessAplication()
  pages.interation.validHome()
});

When('ele clicar na viuslização de saldo', () => {
  pages.interation.clickSeeBalance()
});

Then('ele consegu ver o quanto de saldo que ele tem no app', () => {
  pages.interation.iSeeMyBalance()
});