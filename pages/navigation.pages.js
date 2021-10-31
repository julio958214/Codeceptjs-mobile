const { I, pages } = inject();

module.exports = {

  fields: {
    btnAccept: 'ACEITAR',
    btnAllow: 'ALLOW',
    btnOk: 'OK',
    btnHighlights: '#com.ingresso.cinemas:id/largeLabel',
    btnFilm: '#com.ingresso.cinemas:id/tab_movie',
    btnMovieTheater: '#com.ingresso.cinemas:id/tab_theater',
    btnAccount: '#com.ingresso.cinemas:id/tab_account',
    btnPermission: 'Permitir durante o uso do app'
  },

  acceptTerms(){
      I.waitForElement(this.fields.btnAccept, 10)
      I.tap(this.fields.btnAccept)
    },

 async accessApp() {
   var location_permission = await tryTo(() => I.waitForElement(this.fields.btnAllow))
    
    if (location_permission) {
      I.tap(this.fields.btnAllow)
    } 
    else {
      I.tap(this.fields.btnPermission)
    }
  },

  async visibleBaseButtons() {        
    var result = await tryTo(() => I.waitForElement(this.fields.btnOk, 5))
    const textDest = 'Destaques'
    const textFilm = 'Filmes'
    const textCine = 'Cinemas'

      if (result) {
        I.waitForElement(this.fields.btnOk, 10)
        I.tap(this.fields.btnOk)
      
        I.waitForElement(this.fields.btnHighlights, 10)
        I.seeElement(this.fields.btnHighlights, textDest)
        I.tap(this.fields.btnFilm)
        I.waitForElement(this.fields.btnFilm, textFilm, 10)
        I.tap(this.fields.btnMovieTheater)
        I.waitForElement(this.fields.btnMovieTheater, textCine, 10) 
      } 
    
      else {
        I.waitForElement(this.fields.btnHighlights, 10)
        I.seeElement(this.fields.btnHighlights, textDest)
        I.tap(this.fields.btnFilm)
        I.waitForElement(this.fields.btnFilm, textFilm, 10)
        I.tap(this.fields.btnMovieTheater)
        I.waitForElement(this.fields.btnMovieTheater, textCine, 10) 
    }
  },

  targetingToEachScreen() {
    I.tap(this.fields.btnAccount)
    I.seeElement(this.fields.btnAccount, 'Minha Conta', 10)
  }
}