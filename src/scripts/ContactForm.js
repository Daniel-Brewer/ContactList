import contactCollection from "./ContactCollection";


// A Contact component that displays a person's name, phone number, and address.

const contactForm = {
    createHTML() {
        let inputForm =
        `
        <article>
        <h2>Enter New Contact</h2>
            <fieldset>
                <label for="contactName">Name:</label>
                <input id="contactName" name="contactName" type="text" autofocus />
            </fieldset
            <br>
            <fieldset>
                <label for="contactNumber">Number:</label>
                <input id="contactNumber" name="contactNumber" type="text" autofocus />
            </fieldset
            <br>
            <fieldset>
                <label for="contactAddress">Address:</label>
                <input id="contactAddress" name="contactAddress" type="text" autofocus />
            </fieldset
            </article>
            
            
        `
        let submitButton=document.createElement("button")
        submitButton.textContent="Add Contact"
        submitButton.setAttribute("class", "contact-save")

        submitButton.addEventListener("click", contactForm.buttonClick)



        let displayContactsContainer = document.querySelector(".form");
        
        displayContactsContainer.innerHTML = inputForm;
        displayContactsContainer.appendChild(submitButton)
    },

    buttonClick() {
        const inputName = document.querySelector("#contactName").value;
        const inputNumber = document.querySelector("#contactNumber").value;
        const inputAddress = document.querySelector("#contactAddress").value;
        let contactObject = {
            name: inputName,
            number: inputNumber,
            address: inputAddress
        }
        contactCollection.postNewContact(contactObject)

        
    }
};
export default contactForm