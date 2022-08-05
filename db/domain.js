class Domain{

    domains = [];
    constructor(){
        
    }

    find(id) { 

        const domain =  this.domains.find(x => x.id === id);  
        if (!domain) {   
            return null; 
        }
        return domain;
        //return this.domains.filter(x => x.id === id);         
    }
    findAll() {
        return this.domains;  
    }
    create(domain) {
        domain.id = 1;
        if (this.domains.length !== 0) {
            let lastId = (this.teachers[this.domains.length - 1]).id;
            domain.id = parseInt(lastId)+1;
        }
        this.domains.push(domain);
        return this.domains;
    }
    createMany(manyDomains){
        manyDomains.forEach(u => {
            this.domains.push(u); 
        });
        return this.domains;
    }
    update(id, domain) {  
        let domainFind = this.domains.find(x => x.id === id);
        if (!domainFind) return null ; 
        let index = this.domains.indexOf(domainFind);
        domain.id = id;
        this.domains[index] = domain ;
        return this.domains[index];
    }
    delete(id) {
        this.domains = this.domains.filter((x)=>{
            if(x.id !== id){
                return x;
            }
        });
        return this.domains;  
    }


} 
module.exports = Domain ;
