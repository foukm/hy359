/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.spark_pets;

/**
 *
 * @author mountant
 */
public class Pet {
    int  owner_id,birthyear;
    String pet_id,type, breed, gender, name;
    double weight;
    public Pet()
    {
        
    }
    public Pet(String pet_id,int owner_id,String name,String type,String breed,String gender,int birthyear,double weight,String description,String photo)
    {
        this.birthyear=birthyear;
        this.breed=breed;
        this.description=description;
        this.gender=gender;
        this.name=name;
        this.owner_id=owner_id;
        this.pet_id=pet_id;
        this.photo=photo;
        this.type=type;
        this.weight=weight;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    String description, photo;

    public String getPet_id() {
        return pet_id;
    }

    public void setPet_id(String pet_id) {
        this.pet_id = pet_id;
    }

    public int getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(int owner_id) {
        this.owner_id = owner_id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getBirthyear() {
        return birthyear;
    }

    public void setBirthyear(int birthyear) {
        this.birthyear = birthyear;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
