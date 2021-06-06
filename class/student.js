class Student {

    constructor(student, joinigDate) {

        console.log("constc calleed...")
        console.log("join", joinigDate)
        this.student = student;

    }

    getStudentDetail() {

        console.log("called,,")
        return this.student;
    }
    


}




var student = [
    {
        sId: 101,
        sName: "samir",
        sAge: 12
    },
    {
        sId: 102,
        sName: "raj",
        sAge: 25
    },
    {
        sId: 103,
        sName: "jay",
        sAge: 26
    }
]

d= new Date("16 May ,1999")
s1 = new Student(student, d);
console.log(s1.getStudentDetail())

console.log("js called..")

