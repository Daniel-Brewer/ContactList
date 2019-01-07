import contactCollection from "./ContactCollection";
import contactList from "./ContactList";

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
          <button class="btn
        </article>
        `
        let displayContactsContainer = document.querySelector(".form");
        displayContactsContainer.innerHTML = inputForm;
    },

    buttonClick() {
        const name = document.querySelector("#contactName").value;
        const number = document.querySelector("#contactNumber").value;
        const address = document.querySelector("#contactAddress").value;

        const contactObject = {
            name: name,
            number: number,
            address: address
        }
        contactCollection.postNewContact(contactObject)
        .then (function (){
            contactList.getAllContacts();
        })
    }
};
export default contactForm

// const contactForm = {
//   createAndAppendForm() {
//       let formHeader = document.createElement("h3")
//       formHeader.textContent = "Add to your contacts"

//       let contactNameField = document.createElement("fieldset")

//       let contactNameLabel = document.createElement("label")
//       contactNameLabel.textContent = "Name"
//       contactNameLabel.setAttribute("for", "contact-name")
//       let contactNameInput = document.createElement("input")
//       contactNameInput.setAttribute("id", "contact-name")
//       contactNameInput.setAttribute("name", "contact-name")

//       contactNameField.appendChild(contactNameLabel)
//       contactNameField.appendChild(contactNameInput)

//       let contactNumberField = document.createElement("fieldset")

//       let contactNumberLabel = document.createElement("label")
//       contactNumberLabel.textContent = "Phone Number"
//       contactNumberLabel.setAttribute("for", "contact-number")
//       let contactNumberInput = document.createElement("input")
//       contactNumberInput.setAttribute("id", "contact-number")
//       contactNumberInput.setAttribute("name", "contact-number")

//       contactNumberField.appendChild(contactNumberLabel)
//       contactNumberField.appendChild(contactNumberInput)

//       let contactAddressField = document.createElement("fieldset")

//       let contactAddressLabel = document.createElement("label")
//       contactAddressLabel.textContent = "Address"
//       contactAddressLabel.setAttribute("for", "contact-address")
//       let contactAddressInput = document.createElement("input")
//       contactAddressInput.setAttribute("id","contact-address")
//       contactAddressInput.setAttribute("name","contact-address")

//       contactAddressField.appendChild(contactAddressLabel)
//       contactAddressField.appendChild(contactAddressInput)

//       // let submitButton = document.createElement("button")
//       // submitButton.textContent = "Add Contact"
//       // submitButton.setAttribute("class", "contact-save")

//       // submitButton.addEventListener("click", this.handleAddNewFood)

//       let contactFormFragment = document.createDocumentFragment()
//       contactFormFragment.appendChild(formHeader)
//       contactFormFragment.appendChild(contactNameField)
//       contactFormFragment.appendChild(contactNumberField)
//       contactFormFragment.appendChild(contactAddressField)

//       let formArticle = document.querySelector(".form")
//       formArticle.appendChild(contactFormFragment)

//   }
// }

// export default contactForm