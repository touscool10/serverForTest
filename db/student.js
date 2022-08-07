class Student{

    students = [];
    classStudents = [];
    studentsByNameOrEmail = null;

    constructor(){
        
    }

    find(id) {
        console.log(`type of id of first student`, this.students[0].user.id);
        const student =  this.students.find(x => x.user.id == id);  
        if (!student) {
            return null;
        }
        return student;
        //return this.teachers.filter(x => x.id == id);         
    }

    /*findBySchool(schoolId){
        console.log(`type of schoolId is: `, typeof(schoolId));
        this.schoolTeachers =  this.teachers.filter(x => x.user.schoolId == schoolId);  

        return this.schoolTeachers;
    }
    findByUnit(unitId){
        console.log(`type of unitId is: `, typeof(unitId));
        this.unitTeachers =  this.teachers.filter(x => x.user.unitId == unitId);  

        return this.unitTeachers;
    }*/
    findByClass(classId){
        this.classStudents = [];
        this.students.forEach( std => {
            if(parseInt(std.user.class) === classId){
                this.classStudents.push(std);  
            }
        });

        return this.classStudents;
    }
    findByName(name){
        this.studentsByNameOrEmail =  this.students.find(x => x.user.name == name);  
        if (!this.studentsByNameOrEmail ) {
            return [];
        }
        return [this.studentsByNameOrEmail]; 
    }
    findByEmail(email){

        this.studentsByNameOrEmail =  this.students.find(x => x.user.email == email);  
        if (!this.studentsByNameOrEmail ) {
            return [];
        }
        return [this.studentsByNameOrEmail];
    }
    findAll() {
        return this.students;  
    }
    create(student) {
        //teacher.user.id = 1;
        /*if (this.teachers.length !== 0) {
            let lastId = (this.teachers[this.teachers.length - 1]).user.id;
            teacher.user.id = parseInt(lastId)+1;
        }*/
        this.students.push(student);
        return this.students;
    }
    createMany(manyStudents){
        manyStudents.forEach(u => {
            this.students.push(u); 
        });
        return this.students;
    }
    update(id, student) {  
        let studentFind = this.students.find(x => x.user.id == id);
        if (!studentFind) { 
            return null ;
        } else{
            let index = this.students.indexOf(studentFind);
            student.user.id = id;
            this.students[index] = student ;
            return this.students[index];
        } 
        
    }
    delete(id) {
        this.students = this.students.filter((x)=>{
            if(x.user.id != id){
                return x;
            }
        });
        return this.students;  
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
module.exports = Student ;
