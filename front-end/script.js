//get the input from the form when the submit button is clicked
const myForm = document.getElementById("my-form")

myForm.onsubmit = (event) => {
    event.preventDefault()

    const fName = document.getElementById("firstName").value;

    const lName = document.getElementById("lastName").value;

    const email = document.getElementById("email").value;

    const role = document.getElementById("role").value;

    console.log({
        fName,
        lName,
        email,
        role
    });

    //send this employee to POST https

    axios.post("https://crud-practice-cp.herokuapp.com/employees", {
            fName,
            lName,
            email,
            role,
        })
        .then((res) => {
            console.log(res.data);
        });
};

// When the "Show all employees" button is clicked, show the list off all the employees
document.getElementById("showEmp").addEventListener("click", getEmployees)

function getEmployees() {
    axios.get("https://crud-practice-cp.herokuapp.com/employees").then((res) => {
            const emps = res.data

            for (let index = 0; index < emps.length; index++) {
                const {
                    fName,
                    lName,
                    email,
                    role
                } =
                employees[index];

                let newP = document.createElement("p")
                newP.innerHTML = `${lName}, ${fName} -${email} - ${role}`
            }

        }
    }


    function clearForm() {
        document.getElementById("firstName").value;

        document.getElementById("lastName").value;

        document.getElementById("email").value;

        document.getElementById("role").value;
    }