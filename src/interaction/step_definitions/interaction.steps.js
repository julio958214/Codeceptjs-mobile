const { I, pages } = inject();

Given('que o usuário acesse o app', async() => {
    pages.interation.accessAplication();
    await pages.interation.validHome();
});

When('ele clicar na visualização de saldo', () => {
    pages.interation.clickSeeBalance();
});

Then('ele consegue ver o quanto de saldo que ele tem no app', async() => {
    await pages.interation.iSeeMyBalance();
});