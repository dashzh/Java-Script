// объект для вывода счета
let Recipe = {
    recipeFor: '',
    playAttributes: '',
    totalAmount: '',
    totalBonuses: '',

    appendRecipeFor: function (person) {
        this.recipeFor = `Счет для ${person} \n`;
    },
    appendPlayAttributes: function (playPrice, seats, playName) {
        this.playAttributes += `${playName}: ${playPrice} (${seats} мест)\n`;
    },
    appendTotalAmount: function (amount) {
        this.totalAmount = `Итого с вас ${amount}\n`;
    },
    appendTotalBonuses: function (bonuses) {
        this.totalBonuses = `Вы заработали ${bonuses} бонусов\n`;
    },
    print: function () {
        return (this.recipeFor + this.playAttributes + this.totalAmount + this.totalBonuses);
    }
}