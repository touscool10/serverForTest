class Teacher{

    teachers = [];
    schoolTeachers = [];
    unitTeachers = [];
    classTeachers = [];
    teacherByNameOrEmail = null;

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

    findBySchool(schoolId){
        console.log(`type of schoolId is: `, typeof(schoolId));
        this.schoolTeachers =  this.teachers.filter(x => x.user.schoolId == schoolId);  

        return this.schoolTeachers;
    }
    findByUnit(unitId){
        console.log(`type of unitId is: `, typeof(unitId));
        this.unitTeachers =  this.teachers.filter(x => x.user.unitId == unitId);  

        return this.unitTeachers;
    }
    findByClass(classId){

        this.teachers.forEach( t => {

            if(t.user.classId != null){
                if ( this.isArrayIncludeData(classId, t.user.classId) ) {

                    if( !this.isArrayIncludeData(t, this.classTeachers)  ){
                        this.classTeachers.push(t);  
                    }
                   
                }
            }
        });

        return this.classTeachers;
    }
    findByName(name){
        this.teacherByNameOrEmail =  this.teachers.find(x => x.user.name == name);  
        if (!this.teacherByNameOrEmail ) {
            return null;
        }
        return this.teacherByNameOrEmail; 
    }
    findByEmail(email){

        this.teacherByNameOrEmail =  this.teachers.find(x => x.user.email == email);  
        if (!this.teacherByNameOrEmail ) {
            return null;
        }
        return this.teacherByNameOrEmail;
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
            this.teachers[index] = teacher ;
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

    isArrayIncludeData(data, arr) {
        let result = (arr.filter(item => item == data)).length;
    
        if(result > 0){
          return true;
        } else{
          return false;
        }
    }


} 
module.exports = Teacher ;
