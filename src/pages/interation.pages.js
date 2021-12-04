const { I } = inject();

module.exports = {

  fields: {
      iconNubanck: "//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView",
      txtTopHeader: '~top-header',
      txtNuConta: '~card-hero',
      btnViewBalance: '~show-balance',
      txtTrasfer: "//*[@text='Transferencia de R$ 5.000 recebida do Tony Stark hoje as 09:00h']",
      txtIndicateFriends: "//*[@text='Indicar amigos']",
      txtDemand: "//*[@text='Cobrar']",
      txtDeposit: "//*[@text='Depositar']",
      txtTransfer: "//*[@text='Transferir']",
      txtPay: "//*[@text='Pagar']",
      txtBlockCard: "//*[@text='Bloquear cartão']",
      txtVirtualCard: "//*[@text='Bloquear cartão']",
      btnShowBalance: '//android.view.ViewGroup[@content-desc="show-balance"]/android.widget.TextView',
      btnUserBalance: '~user-balance'
  },

    accessAplication() {
      I.waitForElement(this.fields.iconNubanck, 10)
    },

    validHome() {
      //--> Validate app home fields.
      I.waitForElement(this.fields.txtTopHeader, 10)
      I.waitForElement(this.fields.txtNuConta)
      I.waitForElement(this.fields.btnViewBalance)
      I.waitForElement(this.fields.txtTrasfer)
      I.waitForElement(this.fields.txtIndicateFriends)
      I.waitForElement(this.fields.txtDemand)
      I.waitForElement(this.fields.txtDeposit)
      
      I.performSwipe({x:1045, y:1836}, {x:92, y:1836})

      I.wait(2)
      I.waitForElement(this.fields.txtTransfer)
      I.waitForElement(this.fields.txtPay)
      I.waitForElement(this.fields.txtBlockCard)
      I.waitForElement(this.fields.txtVirtualCard)

      //--> Validate app home text.
      I.waitForText('Papito', this.fields.txtTopHeader)
      I.waitForText('NuConta', this.fields.txtNuConta)
    },

    clickSeeBalance() {
      //--> I click on the view balance button.
      I.waitAndTap(this.fields.btnShowBalance)
    },

    iSeeMyBalance() {
      // //--> I see my balance on nubank.
      I.waitForText('R$', this.fields.btnUserBalance)
      I.seeElement(this.fields.btnUserBalance)
    }
}