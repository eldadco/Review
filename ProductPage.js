const InfraClass = require('./SeleniumInfraStructre') 

class ProductPage
{

    constructor()
    {
        this.seleniumInfra = new InfraClass()
        this.driver = this.seleniumInfra.driver
       
    }

    get_Url(url)
    {
        this.seleniumInfra.getURL(url)
    }
    
   async pressUp(cakeBefore,cakeAfter)
    {// Two arrayes of cakes before the click arrow up and after

       let cakes= await this.seleniumInfra.findElementListBy('class','itemContainer')     
        for(let cake of cakes)
        {
            console.log(await this.seleniumInfra.getTextFromElement("tagName",'h3',cake))
        }
        
       console.log(temp)
    // this.seleniumInfra.getTextFromElement
    
}




}

async function main() 
{
    let p = new ProductPage()
    await p.get_Url('https://cakes-automation-course.herokuapp.com/products.html')

   await p.pressUp()
}

main()