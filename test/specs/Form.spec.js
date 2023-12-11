const buttons = require("../screens/home.screen");
const form = require("../screens/form.screen");



describe('Test Forms', async () =>{

    it('Should acess the form page', async () => {
        await buttons.goToForms()
        await form.inputText(nome)
        await form.turnSwitch()
        await form.selectOpt(5)
        await form.pushBtn()
        await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]').click()

     });
})

