'use strict';
const store = (function() {
    const items = 
        [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ];
    const findById = function(ID){
       return store.items.find(element => element.id === ID)
        }; 
    const addItem = function(name){
        try{
            Items.validateName(name); 
            this.items.push(Items.create(name));
        }
        catch(error){
            console.log(error); 
        }
    }
    const findAndToggleChecked = function(id){
        this.findById(id).checked = !this.findById(id).checked; 
    }; 
    const findAndUpdateName = function(id, newName){
        try{
            Items.validateName(newName);
            store.findById(id).name = newName;
          }
          catch(error){
              console.log(`Cannot update name: ${error.message}`);
          }
    };
    const toggleCheckedFilter = function(){
        this.hideCheckedItems = !this.hideCheckedItems; 
    }
    const setSearchTerm = function(text){
        this.searchTerm += text; 
    };
    //finding an element by its ID. then remove from this.items
    const findAndDelete = function(id){
        const index = this.items.indexOf(findById(id)); 
        this.items.splice(index,1); 
    }
    //Make a findAndToggleChecked method, 
    //which accepts an id, then uses this.findById() to fetch the item and toggle its checked attribute
     let hideCheckedItems = false;
     let searchTerm = '';
    return {
        items, hideCheckedItems, searchTerm, findById, findAndToggleChecked, findAndUpdateName, findAndDelete, addItem, toggleCheckedFilter, setSearchTerm
    }
}());

