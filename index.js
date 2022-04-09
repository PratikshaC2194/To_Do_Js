function addpop() {


    document.getElementById("popup").style.display = "block"




    document.getElementById("trip").style.display = "none"
}

const tasklist = [] 

const addlist = () => {

    document.getElementById("popup").style.display = "none"
    const name = document.getElementById("card").value; 
    console.log(name); 

    const tempObj = {

            taskName: name


        } 
    tasklist.push(tempObj)
    console.log(tasklist)

    addtaskonscreen()

function addtaskonscreen() {
    const element = document.createElement("div");
    element.setAttribute("class", "child")

    element.innerText = tasklist[tasklist.length - 1].taskName;
    const existingelement = document.getElementById("parent");
    existingelement.appendChild(element)


}
}

