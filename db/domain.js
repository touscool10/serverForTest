class Domain{

    domains = [];
    constructor(){
        
    }

    find(id) { 

        const domain =  this.domains.find(x => x.id == id);  
        if (!domain) {   
            return null; 
        }
        return domain;
        //return this.domains.filter(x => x.id === id);         
    }
    findByDomain(schoolDomain){
       
        let domain =  this.domains.filter(x => x.domain == schoolDomain);  
        if (!domain) {   
            return null; 
        }
        return domain;
    }
    findAll() {
        return this.domains;  
    }
    create(domain) {
        domain.id = 1;
        if (this.domains.length !== 0) {
            let lastId = (this.domains[this.domains.length - 1]).id;
            domain.id = parseInt(lastId)+1;
        }
        this.domains.push(domain);
        return this.domains;
    }
    delete(id) {
        this.domains = this.domains.filter((x)=>{
            if(x.id != id){
                return x;
            }
        });
        return this.domains;  
    }
    deleteByName(domain) {
        this.domains = this.domains.filter((x)=>{
            if(x.domain != domain){
                return x;
            }
        });
        return this.domains;  
    }


} 

module.exports = Domain ;
