class Form {
    get #inputField(){
        return $('text-input')
    }
    get #switch(){
        return $('switch')
    }
    get #Dropdown(){
        return $('Dropdown')
    }
    get #btnActive(){
        return $('button-Active')
    }
    async inputText(text){
        this.#inputField.setVlue(text)
    }
    async turnSwitch(){
        this.#switch.click()
    }
    async selectOpt(index){
        this.#Dropdown.selectByIndex(index)
    }
    async pushBtn(){
        this.#btnActive.click()
    }

}


module.exports = new Form()