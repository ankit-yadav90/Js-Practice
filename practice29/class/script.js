class CriatePancile{
    constructor(name, price, color, company){
        this.name = name;
        this.price = price;
        this.color = color;
        this.company = company;
    }

    erase(){
      document.body.querySelectorAll("h1").forEach((elem)=> {
      if(elem.style.color === this.color){
        elem.remove();
      }
    });
  }
    write(text){
      let h1 = document.createElement("h1");
      h1.textContent = text;
      h1.style.color = this.color;
      document.body.appendChild(h1);
    }
}
let panscil1 = new CriatePancile("Natraj", 10, "red", "Natraj");
let panscil2 = new CriatePancile("doms", 10, "black", "doms");

