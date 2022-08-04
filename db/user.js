class User{

    users = [];
    constructor(){
        
    }

    find(id) {

        const user =  this.users.find(x => x.id === id);  
        if (!user) {
            return null;
        }
        return user;
        //return this.users.filter(x => x.id === id);         
    }
    findAll() {
        return this.users;  
       
    }
    create(user) {
        user.id = 1;
        if (this.users.length !== 0) {
            let lastId = (this.users[this.users.length - 1]).id;
            user.id = parseInt(lastId)+1;
        }
        this.users.push(user);
        return this.users.indexOf(user);
    }
    createMany(manyUsers){
        manyUsers.forEach(u => {
            this.users.push(u); 
        });
        return this.users;
    }
    update(id, user) {  
        let userFind = this.users.find(x => x.id === id);
        if (!userFind) return null ; 
        let index = this.users.indexOf(userFind);
        user.id = id;
        this.users[index] = user ;
        return this.users[index];
    }
    delete(id) {
        this.users = this.users.filter((x)=>{
            if(x.id !== id){
                return x;
            }
        });
        return this.users;  
    }


} 
module.exports = User ;
