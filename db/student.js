class Student{

    students = [];
    schoolStudents = [];
    unitStudents = [];
    classStudents = [];
    studentByNameOrEmail = null;

    constructor(){
        
    }

    find(id) {
        const student =  this.student.find(x => x.user.id == id);  
        if (!student) {
            return null;
        }
        return student;
        //return this.student.filter(x => x.id == id);         
    }

    findBySchool(schoolId){
        console.log(`type of schoolId is: `, typeof(schoolId));
        this.schoolStudents =  this.student.filter(x => x.user.schoolId == schoolId);  

        return this.schoolStudents;
    }
    findByUnit(unitId){
        console.log(`type of unitId is: `, typeof(unitId));
        this.unitStudents =  this.student.filter(x => x.user.unitId == unitId);  

        return this.unitStudents;
    }
    findByClass(classId){
        console.log(`type of classId is: `, typeof(classId));

        this.student.forEach( t => {
            if ( this.isArrayIncludeData(classId, t.user.classId) ) {
                this.classStudents.push(t);  
            }
        });

        return this.classStudents;
    }
    findByName(name){
        this.studentByNameOrEmail =  this.student.find(x => x.user.name == name);  
        if (!this.studentByNameOrEmail ) {
            return null;
        }
        return this.studentByNameOrEmail; 
    }
    findByEmail(email){

        this.studentByNameOrEmail =  this.student.find(x => x.user.email == email);  
        if (!this.studentByNameOrEmail ) {
            return null;
        }
        return this.studentByNameOrEmail;
    }
    findAll() {
        return this.students;  
    }
    create(student) {
        //student.user.id = 1;
        /*if (this.student.length !== 0) {
            let lastId = (this.student[this.student.length - 1]).user.id;
            student.user.id = parseInt(lastId)+1;
        }*/
        this.students.push(student);
        return this.students;
    }
    createMany(manystudent){
        manystudent.forEach(u => {
            this.students.push(u); 
        });
        return this.students;
    }
    update(id, student) {  
        let studentFind = this.students.find(x => x.user.id == id);
        if (!studentFind) { 
            return null ;
        } else{
            let index = this.student.indexOf(studentFind);
            student.user.id = id;
            this.students[index] = student ;
            return this.student[index];
        } 
        
    }
    delete(id) {
        this.student = this.student.filter((x)=>{
            if(x.user.id != id){
                return x;
            }
        });
        return this.student;  
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
