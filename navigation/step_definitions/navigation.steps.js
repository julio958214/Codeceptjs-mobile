const { I, pages } = inject();
// Add in your custom step files

Given('que o usuario acesse o app', async () => {
  pages.navigation.accessApp()
  await pages.navigation.accessApp()
})

When('ele interagir com os botões da home base', async () => {
  await pages.navigation.visibleBaseButtons()
})

Then('ele é direcionado para a tela de cada botão',() => {
  pages.navigation.targetingToEachScreen()
})