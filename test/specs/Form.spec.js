const buttons = require("../screens/home.screen");
const form = require("../screens/form.screen");



describe('Test Forms', async () =>{

    it('Should acess the form page', async () => {
        await buttons.goToForms()
        await form.inputText(nome)
        await form.turnSwitch()
        await form.selectOpt(5)
        await form.pushBtn()
        expect (await formScreen.getDropdownResult()).toEqual('webdriver.io is awesome')

     });
})

