class RecipeGenerator {
    constructor(invoice, plays) {
        this.invoice = invoice;
        this.plays = plays;
    }

    generateRecipe() {
        Recipe.appendRecipeFor(this.invoice.customer);

        for (let perf of this.invoice.performance) {
            const play = this.plays[perf.playId];
            Recipe.appendPlayAttributes(
                this.rubOf(this.countAmount(play, perf)),
                perf.audience,
                play.name);
        }
        Recipe.appendTotalAmount(this.rubOf(this.countTotal(this.countAmount)));
        Recipe.appendTotalBonuses(this.countTotal(this.countCredits));

        return Recipe.print();
    }

    countTotal(counter) {
        let total = 0;
        for (let perf of this.invoice.performance) {
            const play = this.plays[perf.playId];
            total += counter(play, perf);
        }
        return total;
    }

    countCredits(play, perf) {
        let volumeCredits = Math.max(perf.audience - 30, 0);
        // Дополнительный бонус
        let calcCredits = Calculators.getCreditsCalc(play.type);
        return calcCredits(volumeCredits, perf.audience);
    }

    countAmount(play, perf) {
        if (!Calculators.calcMap.has(play.type)) throw new Error(`неизвестный тип: ${play.type} `);
        let calculator = Calculators.getPriceCalc(play.type);
        return calculator(perf.audience);
    }

    rubOf(number) {
        return new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 2
        }).format(number / 100);
    }
}



