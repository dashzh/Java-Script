function createInvoice() {
    let invoices = JSON.parse('[' +
        '  {' +
        '    "customer": "MDT",' +
        '    "performance": [' +
        '      {' +
        '        "playId": "Гамлет",' +
        '        "audience": 55,' +
        '        "type": "tragedy"' +
        '      },' +
        '      {' +
        '        "playId": "Ромео и Джульетта",' +
        '        "audience": 35,' +
        '        "type": "tragedy"' +
        '      },' +
        '      {' +
        '        "playId": "Отелло",' +
        '        "audience": 40,' +
        '        "type": "comedy"' +
        '      }' +
        '    ]' +
        '  }' +
        ']');
    return invoices[0];
}

function createPlays() {
    return JSON.parse('{' +
        '"Гамлет": {"name": "Гамлет", "type": "tragedy"},' +
        '"Ромео и Джульетта": {"name": "Ромео и Джульетта", "type": "tragedy"},' +
        '"Отелло": {"name": "Отелло", "type": "comedy"}' +
        '}');
}

function callRecipeGenerator() {
    let plays = createPlays();
    let invoice = createInvoice();
    let recipeGenerator = new RecipeGenerator(invoice, plays);
    console.log(recipeGenerator.generateRecipe());
}

callRecipeGenerator();