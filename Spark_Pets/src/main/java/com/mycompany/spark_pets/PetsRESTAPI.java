/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.spark_pets;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.HashMap;
import static spark.Spark.delete;
import static spark.Spark.get;
import static spark.Spark.post;
import static spark.Spark.put;
import java.util.Objects;
import database.EditPetsTable;
import database.EditPetOwnersTable;

public class PetsRESTAPI {
    public static void main(String[] args)
    {
        post("/pet/", (request, response) -> {
            response.type("application/json");
           
   
            Pet p= new Gson().fromJson(request.body(), Pet.class);
            ArrayList<PetOwner> owners = new EditPetOwnersTable().databaseToPetOwners();
            PetOwner petowner = new PetOwner();
            ArrayList<Pet> pets = new EditPetsTable().databaseToPets();
            Pet temp=new Pet();
            boolean exists=false;
            for(int i=0; i<pets.size(); i++)
            {
                temp=pets.get(i);
                if(temp.pet_id.equals(p.pet_id))
                {
                     response.status(400);
                    return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("To pet_id uparxei idi!")));
                }
                if(temp.owner_id==p.owner_id)
                {
                     response.status(400);
                    return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("O owner me auto to id exei idi katoikidio!")));
                }
            }
            if(p.pet_id.length()!=10 )
            {
                response.status(400);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("To pet_id prepei na einai 10 xarakthres!")));
            }
            if(p.weight<=0.0)
            {
                 response.status(400);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("To varos prepei na einai megalutero apo 0.0!")));
            }
            if(p.birthyear<=2000 )
            {
                 response.status(400);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("To birthyear prepei na einai megalytero tou 2000")));
            }
            if(!p.photo.startsWith("http"))
            {
                 response.status(400);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("H eikona prepei na arxizei me http")));
            }
            if (exists==true) {
                response.status(400);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("Error!")));

            } else {
                boolean valid_pet_owner=false;
                for(int i=0; i<owners.size(); i++)
                {
                    petowner=owners.get(i);
                    if(p.owner_id==petowner.owner_id)
                    {
                        valid_pet_owner=true;
                    }
                }
                if(valid_pet_owner==true)
                {
                    response.status(200);
                    EditPetsTable l = new EditPetsTable();
                    Gson k = new Gson();
                    l.addPetFromJSON(k.toJson(p));
                    return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("Ola valid")));
                }
                response.status(400);
                 return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("Den uaprxei tetoios owner_id")));
            }
        });
        
        
        get("/pets/:type/:breed",(request,response)->{
            
            response.type("application/json");
            String type= request.params(":type");
            //type=type.substring(1);
            String breed= request.params(":breed");
            //breed=breed.substring(1);
            String fromWeight = request.queryParams("fromWeight");
            String toWeight = request.queryParams("toWeight");
            
            
           
            ArrayList<Pet> pets = new EditPetsTable().databaseToPets();
            ArrayList<Pet> newP = new ArrayList<Pet>();
            Pet temp = new Pet();
            if("all".equals(breed))
            {
                for(int i=0; i<pets.size(); i++)
                {
                    temp=pets.get(i);
                    if(temp.type.equals(type))
                    {
                        newP.add(temp);
                    }
                }
            }else
            {
                for(int i=0; i<pets.size(); i++)
                {
                    temp=pets.get(i);
                    if(temp.type.equals(type) && temp.breed.equals(breed))
                    {
                        newP.add(temp);
                    }
                }
            }
            
                if(fromWeight!=null)
                {
                    double newFW = Double.parseDouble(fromWeight);
                    
                    for(int i=0; i<newP.size(); i++)
                    {
                        temp=newP.get(i);
                        if(temp.getWeight()<newFW)
                        {
                            newP.remove(temp);
                            i--;
                        }
                    }
                }
                
                 if(toWeight!=null)
                {
                    double newNW = Double.parseDouble(toWeight);
                    
                    for(int i=0; i<newP.size(); i++)
                    {
                        temp=newP.get(i);
                        if(temp.getWeight()>newNW)
                        {
                            newP.remove(temp);
                            i--;
                        }
                    }
                }
                
                
            
            return new Gson().toJson(new StandardResponse(new Gson().toJsonTree(newP)));
        });
        
        
        
        put("/petWeight/:pet_id/:weight",(request,response)->{
            response.type("application/json");
            String pet_id= request.params(":pet_id");
            //pet_id=pet_id.substring(1);
            String weight= request.params(":weight");
            //weight=weight.substring(1);
            Double newWeight =Double.parseDouble(weight);
            
            boolean exists=false;
             Pet temp = new Pet();
             ArrayList<Pet> pets = new EditPetsTable().databaseToPets();
            
            for(int i=0; i<pets.size(); i++)
            {
                temp=pets.get(i);
                 
                if(temp.pet_id.equals(pet_id))
                {
                    exists=true;
                }
            }
            if(exists==false)
            {
                response.status(400);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("Den uparxei to katoikidio me auto to id")));
            }else if(newWeight<=0)
            {
                response.status(400);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("To varos prepei na einai >0.0")));
            }else
            {
                response.status(200);
                EditPetsTable nW = new EditPetsTable();
                nW.updatePetWeight(pet_id, newWeight);
                return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("ola kala")));
            }
            
        });

        delete("/petDeletion/:pet_id",(request,response)->{
            response.type("application/json");
            String pet_id= request.params(":pet_id");
            //pet_id=pet_id.substring(1);
             boolean exists=false;
             Pet temp = new Pet();
             ArrayList<Pet> pets = new EditPetsTable().databaseToPets();
            
            for(int i=0; i<pets.size(); i++)
            {
                temp=pets.get(i);
                 
                if(temp.pet_id.equals(pet_id))
                {
                    exists=true;
                }
            }
             
             if(exists==false)
             {
                 response.status(400);
                 return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("Den uparxei auto to pet me auto to id")));
             }else
             {
                 EditPetsTable del = new EditPetsTable();
                 del.deletePet(pet_id);
                 response.status(200);
                 return new Gson().toJson(new StandardResponse(new Gson()
                        .toJson("ola ok")));
            }
        });
    }
}
