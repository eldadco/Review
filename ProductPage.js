const InfraClass = require('./SeleniumInfraStructre')

class ProductPage {

    constructor(url) {
        this.seleniumInfra = new InfraClass()
        this.driver = this.seleniumInfra.driver
        this.seleniumInfra.getURL(url)

    }

    // get_Url(url) {
    //     this.seleniumInfra.getURL(url)
    // }

    async pressUp(cakeBefore, cakeAfter) // Two arrayes of cakes before the click arrow up and after
    {
        let arr = await this.sort_array()

        if (arr[0] == cakeBefore[0] && arr[1] == cakeBefore[1]) 
        {
            await this.seleniumInfra.clickElement('id', 'arrow-up')
            arr = await this.sort_array()
            if (arr[0] == cakeAfter[0] && arr[1] == cakeAfter[1]) {
                console.log("The cake arrow up work good - The cakes have changed their locations as expected")
            }

        }
        else {
            console.error("The parameters are not ok ")
        }
    }

    async Press_Down(cakeBefore, cakeAfter) 
    {
    
        let arr = await this.sort_array()

        if (arr[0] == cakeBefore[0] && arr[1] == cakeBefore[1]) 
        {
            await this.seleniumInfra.clickElement('id', 'arrow-down')
            arr = await this.sort_array()
            if (arr[0] == cakeAfter[0] && arr[1] == cakeAfter[1]) 
            {
                console.log("The cake arrow down work good - The cakes have changed their locations as expected")
            }

        }
        else
        {
            console.error("The parameters are not ok ")
        }



    }


    async sort_array() {
        let cakes = await this.seleniumInfra.findElementListBy('className', "ItemContainerHeadline")
        let arr = []
        for (let cake of cakes) {
            cake = await this.seleniumInfra.getTextFromElement(null, null, cake)
            arr.push(cake)
        }

        return arr

    }


    async clickCaksButton(Cakes_Array)
    {//The button should refresh the page and all cakes should back to their original locations 
    this.driver.sleep(5000)
        await this.seleniumInfra.clickElement('className','buttonProducts')
        let i=0
        let actual_Cakes = await this.sort_array()
        while(i < Cakes_Array.length)
        {
            if(Cakes_Array[i] == actual_Cakes[i])
            {
                 i++
            
            }
            else
            {
                 return 
            }   
        }
        console.log("The page refresh as expected")
        return 
    }

}
module.exports=ProductPage
