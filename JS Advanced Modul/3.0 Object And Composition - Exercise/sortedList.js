function createSortedList(){

let sortedObj = {
    list: [],
    size: 0,

    add: function(number){
        this.list.push(number);
        this.list.sort((a, b) => a - b)
        this.size++
    },
    get: function(index){
        return this.list[index];
    },
    remove: function(index){
        if (index >= 0 && index < this.list.length){
            this.list.splice(index, 1)
            this.size--
        }
    }
}

return sortedObj

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
