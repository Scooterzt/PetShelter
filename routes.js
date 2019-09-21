const controller = require("./controller");

module.exports=function(app){
    app.get("/api/pets", controller.allPets);
    app.get("/api/pet/:id", controller.getOnePet);
    app.post("/api/pet", controller.newPet);
    app.patch("/api/pet/:id", controller.editPet);
    app.patch("/api/pet/like/:id", controller.addLike);
    app.delete("/api/pet/:id/", controller.deletePet);
    app.all("*", controller.reRout);

};