const Pet = require("./models");
const path = require("path");
module.exports={
    allPets: function(request, response){
        console.log("all pets rout ###########################");
        Pet.find().sort({petType: 1})
        .then(Data=>response.json(Data))
        .catch(err=>response.json(err));
    },
    getOnePet: function (request, response){
        console.log("getOne rout ###########################");
        console.log(request.params.id);
        Pet.findOne({_id: request.params.id})
        .then(Data=>response.json(Data))
        .catch(err=>response.json(err));
    },
    newPet: function (request, response){
        console.log("add new route ###########################");
        Pet.create(request.body)
        .then(Data=>response.json(Data))
        .catch(err=>response.json(err));
    }, 
    editPet: function(request, response){
        console.log("edit rout &&&&&&&&&&&");
        console.log(request.params.id);
        Pet.updateOne({_id: request.params.id},request.body,{runValidators:true})
        .then(Data=>response.json(Data))
        .catch(err=>response.json(err));
    },
    addLike: function(request, response){
        console.log("like up !!!! in db");
        console.log(request.params.id);
        Pet.update({_id:request.params.id}, {$inc: {likes:1}})
        .then(Data=>response.json(Data))
        .catch(err=>response.json(err));
    },
    deletePet: function(request, response){
        console.log("delete route ###########################", request.params.id);
        Pet.findByIdAndDelete({_id: request.params.id})
        .then(Data=>response.json(Data))
        .catch(err=>response.json(err));
    },
    reRout: function(request, response){
        console.log("re route %%%%%%%%%%%%");
        response.sendFile(path.resolve("./public/dist/public/index.html"));
    } 
    
};