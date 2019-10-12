const Store = require('./Store')
let S =  new Store('https://cakes-automation-course.herokuapp.com/store.html')
async function CheckThisday() 
{    
   await S.CheckCurrentDay() 
   await S.driver.sleep(5000)
    await S.Infra.close(4)
}

CheckThisday()


async function stability()
{
    let i=0 
    while(i<1000)
    {
        await CheckThisday() 
    }
}


stability()