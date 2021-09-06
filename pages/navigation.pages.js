const { I, pages } = inject();

module.exports = {

  fields: {
    btnAccept: 'ACEITAR',
    btnOnlyThisTime: 'Only this time',
    btnHighlights: { id: 'com.ingresso.cinemas:id/tab_highlight' },
    btnFilm: { id: 'com.ingresso.cinemas:id/tab_movie' },
    btnThather: { id: 'com.ingresso.cinemas:id/tab_theater' },
    btnAccont: { id: 'com.ingresso.cinemas:id/tab_account' },
  },

  accessApp() {
    I.waitForElement(this.fields.btnAccept, 10)
    I.tap(this.fields.btnAccept)
    I.tap(this.fields.btnOnlyThisTime)
  },

  visibleBaseButtons() {
    I.waitForElement(this.fields.btnHighlights, 10)
    I.see('Próximas sessões:', { id: 'com.ingresso.cinemas:id/textview_next_sessions' }, true)
    I.tap(this.fields.btnFilm)
    I.see('Filmes', { id: 'com.ingresso.cinemas:id/toolbar_title' }, true)
    I.tap(this.fields.btnThather)
    I.see('Cinemas', { id: 'com.ingresso.cinemas:id/toolbar_title' }, true)
  },

  targetingToEachScreen() {
    I.tap(this.fields.btnAccont)
    I.see('Minha Conta', { id: 'com.ingresso.cinemas:id/toolbar_title' })
  }
}