//Given a single contact object, this component builds out the HTML and returns it
const contact = {

  contactBuilder(contactObject) {
    let contactArticle = document.createElement("article")
    
    let contactName = document.createElement("h3")
    contactName.textContent = contactObject.name

    let contactNumber = document.createElement("p")
    contactNumber.textContent = contactObject.number
    let contactAddress = document.createElement("p")
    contactAddress.textContent = contactObject.address


    contactArticle.appendChild(contactName)
    contactArticle.appendChild(contactNumber)
    contactArticle.appendChild(contactAddress)


    return contactArticle
  }
}

export default contact