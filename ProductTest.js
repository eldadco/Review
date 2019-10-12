const ProductPage = require('./ProductPage')
let p = new ProductPage('https://cakes-automation-course.herokuapp.com/products.html')

async function Check_ArrowDown() {

    // await p.pressUp(['Chocolate Cake', 'Apple Pie'], ['Vanilla Cake', 'Red Valvet Cake'])
    await p.Press_Down(['Chocolate Cake', 'Apple Pie'], ['Lemon Blueberry Cake', 'New York Cheese Cake'])
    await p.driver.sleep(5000)
    await p.seleniumInfra.close()
}

// Check_ArrowDown() 

async function Check_ArrowUp() {
    await p.pressUp(['Chocolate Cake', 'Apple Pie'], ['Vanilla Cake', 'Red Valvet Cake'])
    await p.driver.sleep(5000)
    await p.seleniumInfra.close()

}

// Check_ArrowDown() 
// Check_ArrowUp() 
async function Check_CakesButton() {
    await p.clickCaksButton(['Chocolate Cake', 'Apple Pie'], ['Vanilla Cake', 'Red Valvet Cake'])
    await p.driver.sleep(5000)
    await p.seleniumInfra.close()
}


Check_CakesButton()
//negative 
// to complete 

async function check_If_ok_after_5_pressUp() {
    let arrLeft = []
    let arrRight = []
    let i
    try {

        for (i = 0; i < 5; i++) {
            await p.pressUp([arrLeft[i], arrRight[i]], [arrLeft[i + 1], arrRight[i + 1]])
        }
    }
    catch (error) {
        console.log(`The failed after ${i} times ${error}`)
    }


}


async function check_If_ok_after_5_pressDown() {
    let arrLeft = []
    let arrRight = []
    let i
    try {

        for (i = 0; i < 5; i++) {
            await p.Press_Down([arrLeft[i], arrRight[i]], [arrLeft[i + 1], arrRight[i + 1]])
        }
    }
    catch (error) {
        console.log(`The failed after ${i} times ${error}`)
    }



}
//stability 




async function stabilityCheck(func) {
    for (let i = 0; i < 1000; i++) {
        await func()

    }
}
async function stability() {
    // 
    let Funcs = [Check_ArrowUp, Check_ArrowDown, Check_CakesButton]
    for (let func of Funcs) {
        await stabilityCheck(func)

    }
}
stability()

