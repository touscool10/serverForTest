class Teacher{

    teachers = [];
    constructor(){
        
    }

    find(id) {
        console.log(`type of id of first teacher`, this.teachers[0].user.id);
        const teacher =  this.teachers.find(x => x.user.id == id);  
        if (!teacher) {
            return null;
        }
        return teacher;
        //return this.teachers.filter(x => x.id == id);         
    }
    findAll() {
        return this.teachers;  
       
    }
    create(teacher) {
        //teacher.user.id = 1;
        /*if (this.teachers.length !== 0) {
            let lastId = (this.teachers[this.teachers.length - 1]).user.id;
            teacher.user.id = parseInt(lastId)+1;
        }*/
        this.teachers.push(teacher);
        return this.teachers;
    }
    createMany(manyTeachers){
        manyTeachers.forEach(u => {
            this.teachers.push(u); 
        });
        return this.teachers;
    }
    update(id, teacher) {  
        let teacherFind = this.teachers.find(x => x.user.id == id);
        if (!teacherFind) { 
            return null ;
        } else{
            let index = this.teachers.indexOf(teacherFind);
            teacher.user.id = id;
            this.users[index] = teacher ;
            return this.teachers[index];
        } 
        
    }
    delete(id) {
        this.teachers = this.teachers.filter((x)=>{
            if(x.user.id != id){
                return x;
            }
        });
        return this.teachers;  
    }


} 
module.exports = Teacher ;
