let person = {
    firstName: "Tuan",
    lastName: "Tran",
    cccd:123445654,
    dob: "03/03/2004",
    getFullname: function() {
        let fullname = this.lastName +""+this.firstName;
        return fullname;
    }
};

// person.lastName = "Tuan";
console.log(person.getFullname());

//class in js
class SinhVien{
    //create constructor cho class voi 5 thuoc tinh
    constructor(maSV, ho, ten, namsinh, email) {
        this.maSV = maSV;
        this.ho = ho;
        this.ten = ten;
        this.namsinh = namsinh;
        this.email = email;
    }
    //
    getAge(){
        const date = new Date();
        let currentYear = date.getFullYear();
        let age = currentYear - this.namsinh;
        return age;
    }
    //
    getFullname(){
        return this.ho +""+this.ten;
    }
}

let sv1 = new SinhVien('SV01','Tran','tuan',2004,'tranthanhtuan@gmail.com');
let sv2 = new SinhVien('SV02','Tran','phuc',2001,'tranthanhphuc@gmail.com');
let sv3 = new SinhVien('SV03','Tran','tu',2002,'tranthanhtu@gmail.com');

console.log(sv1.getFullname()+":"+sv1.getAge() +"tuổi.");
console.log(sv2.getFullname()+":"+sv2.getAge() +"tuổi.");
console.log(sv3.getFullname()+":"+sv3.getAge() +"tuổi.");
// window.open("https://tinhte.vn/", "kienThuc","");
let w = window.innerWidth;
let h = window.innerHeight;

console.log("width:"+ screen.width +"\n" +
"height"+ screen.height +"\n"+
"avaiWidth"+ screen.availWidth +"\n" +
"avaiHeight"+ screen.availHeight +"\n" +
"colorDepth"+ screen.colorDepth +"\n" +
"pixeldepth:"+ screen.pixelDepth +"\n");
