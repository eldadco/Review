const HomePage=require('./HomePage')
let home = new HomePage('https://cakes-automation-course.herokuapp.com/index.html')

//FUNCTIONAL TEST 
async function Check_Search() 
{
    let inputs=['home','about','products','contact','store']
    for(let i in inputs)
    {
       
      await home.search(inputs[i])
        

    }
    home.close
}
    
 

    // Check_Search()

async function Check_Advanced_Search()
{
     await home.advancedSearch(["'Chocolate'","'Cheese'"],["'0-3'","'4'"], "30/10/2000", "Chocolate", "Choc")
    
    
}
//Check_Advanced_Search()


//Negative 

async function Negative_Check_Search() 
{
    let inputs=['212','abou3','product','story','contactasx']
    for(let i in inputs)
    {
       
      await home.search(inputs[i])
        

    }
    home.seleniumInfra.close()
}

// Negative_Check_Search() // Invoke the func 
async function stabilityCheck(func)   
{
    for(let i=0;i<1000;i++)
    {
         await func()

    }
}
async function stability()
{
    // 
    let Funcs=[Check_Search,Check_Advanced_Search]
    for(let func of Funcs)
    {
        await stabilityCheck(func)

    }}
    stability()


