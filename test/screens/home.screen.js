class Buttons {
    get enterFormsPage(){
        return $('Forms')
    }
    async goToForms(){
        this.enterFormsPage.click()
    }
}


module.exports = new Buttons()