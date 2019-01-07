// This component will get the data, build the HTML from the data and append it to the DOM.

// To get the data, we will use the contactCollection component.
import contactCollection from "./ContactCollection"
// To build the HTML for each object in the array of contact(which is what the data coming from the API becomes once we parse it), we will use the contact component.
import contact from "./Contact"

const contactList = {
  contactify(){
    // 1. Get data
    // The getAllContacts method will do a fetch and return a promise. This call will return the data from the API in the response.
    contactCollection.getAllContacts()
    .then(allContacts => {

      // An empty document fragment
      let contactDocFragment = document.createDocumentFragment()
      allContacts.forEach(currentContact => {
        let contactDOM = contact.contactBuilder(currentContact)
        contactDocFragment.appendChild(contactDOM)
      })
      
      let outputArticle = document.querySelector(".output")

      //This while loop essentially removes all child nodes of an element until the element has no child nodes left. It is equivalent to the following:
      // outputArticle.innerHTML = ""

      // If we do not do this, each time we add a new contact item using our form, all the contact items will be appended to the bottom of our list so that we will have duplicates. To understand why this while loop is needed, try commenting it out and observe the behavior of the application. Essentially, we are clearing out our output container (our article tag with class "output") so that we repopulate it.
      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(contactDocFragment)

    })
  }
}

export default contactList