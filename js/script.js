const app = new Application({
    preparation: PreparationScene,
    computer: computerScene,
});

app.start("preparation");