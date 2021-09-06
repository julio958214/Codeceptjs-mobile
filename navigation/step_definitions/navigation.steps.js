const { I, pages } = inject();
// Add in your custom step files

Given('que o usuario acesse o app', () => {
  pages.navigation.accessApp()
})

When('ele interagir com os botões da home base',() => {
  pages.navigation.visibleBaseButtons()
})

Then('ele é direcionado para a tela de cada botão',() => {
  pages.navigation.targetingToEachScreen()
})