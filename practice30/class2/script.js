class user{
  constructor(name, address, username, email){ 
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }
  checkrole(){
    return `You are a ${this.role}`;
  }

  write(text){
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1);
    }
  }
  class Admin extends user{
    constructor(name, address, username, email,){
      super(name, address, username, email,);
      this.role = "admin";
    }

    remove(user){
      document.querySelectorAll("h1").forEach((elem) => {
        elem.remove();
      });
  }
  }


let u1 = new user("Ankit", "India", "ankit123", "ankit@example.com",);
let u2 = new user("ravi", "India", "ravi123", "ravi@example.com",);
let admin = new Admin("Admin", "India", "admin123", "admin@example.com",);