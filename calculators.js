class Calculators {
    static tragedyCalc = {
        priceCalc: function (audience) {
            let amount = 40000;
            if (audience > 30) {
                amount += 1000 * (audience - 30);
            }
            return amount;
        },
        // Дополнительный бонус(в случае их наличия)
        creditsCalc: function (volumeCredits, audience) {
            return volumeCredits;
        }
    };

    static comedyCalc = {
        priceCalc: function (audience) {
            let amount = 30000;
            if (audience > 20) {
                amount += 10000 + 500 * (audience - 20);
            }
            amount += 300 * audience;
            return amount;
        },
        // Дополнительный бонус
        creditsCalc: function (volumeCredits, audience) {
            volumeCredits += Math.floor(audience / 5);
            return volumeCredits;
        }
    };

    // если добавится новый жанр, то добавить
    // новый набор калькуляторов по примеру comedyCalc и, в calcMap - новые ключ,значение
    static calcMap = new Map([
        ['tragedy', this.tragedyCalc],
        ['comedy', this.comedyCalc],
    ]);

    static getPriceCalc(type) {
        return Calculators.calcMap.get(type).priceCalc;
    }

    static getCreditsCalc(type) {
        return Calculators.calcMap.get(type).creditsCalc;
    }
}



