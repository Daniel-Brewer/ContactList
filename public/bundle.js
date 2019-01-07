(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//Given a single contact object, this component builds out the HTML and returns it
const contact = {
  contactBuilder(contactObject) {
    let contactArticle = document.createElement("article");
    let contactName = document.createElement("h3");
    contactName.textContent = contactObject.name;
    let contactNumber = document.createElement("p");
    contactNumber.textContent = contactObject.number;
    let contactAddress = document.createElement("p");
    contactAddress.textContent = contactObject.address;
    contactArticle.appendChild(contactName);
    contactArticle.appendChild(contactNumber);
    contactArticle.appendChild(contactAddress);
    return contactArticle;
  }

};
var _default = contact;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Component responsible for interacting with the API. All fetch calls for this application will be defined here
const contactCollection = {
  // This method returns a fetch, which means it is returning a promise. Which means to access the response from the asynchronous HTTP GET request that is being made by this fetch, we can chain a .then at the point where this method(getAllFoods) is called. The .then then is chained to the fetch inside the method is parsing the data from JSON to data structures Javascript will understand. In this case, because we have a collection of items, it will be an array of objects.
  getAllContacts() {
    return fetch("http://localhost:8088/contacts").then(response => response.json());
  },

  // This method will make a HTTP POST request to the API. Because a POST has a body with the data for the new item you want created, this method will take one argument which will be the object for the new food item we want to add to our collection in the API.
  postNewContact(newContactToSave) {
    // We want to return this fetch request so that at the point it is called, we can take advantage of the asynchronous nature of promises to wait for this to be done before getting the latest data and rerendering the DOM.
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContactToSave)
    });
  }

};
var _default = contactCollection;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactCollection = _interopRequireDefault(require("./ContactCollection"));

var _ContactList = _interopRequireDefault(require("./ContactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A Contact component that displays a person's name, phone number, and address.
const contactForm = {
  createHTML() {
    let inputForm = `
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
        `;
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
    };

    _ContactCollection.default.postNewContact(contactObject).then(function () {
      _ContactList.default.getAllContacts();
    });
  }

};
var _default = contactForm; // const contactForm = {
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

exports.default = _default;

},{"./ContactCollection":2,"./ContactList":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ContactCollection = _interopRequireDefault(require("./ContactCollection"));

var _Contact = _interopRequireDefault(require("./Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This component will get the data, build the HTML from the data and append it to the DOM.
// To get the data, we will use the contactCollection component.
// To build the HTML for each object in the array of contact(which is what the data coming from the API becomes once we parse it), we will use the contact component.
const contactList = {
  contactify() {
    // 1. Get data
    // The getAllContacts method will do a fetch and return a promise. This call will return the data from the API in the response.
    _ContactCollection.default.getAllContacts().then(allContacts => {
      // An empty document fragment
      let contactDocFragment = document.createDocumentFragment();
      allContacts.forEach(currentContact => {
        let contactDOM = _Contact.default.contactBuilder(currentContact);

        contactDocFragment.appendChild(contactDOM);
      });
      let outputArticle = document.querySelector(".output"); //This while loop essentially removes all child nodes of an element until the element has no child nodes left. It is equivalent to the following:
      // outputArticle.innerHTML = ""
      // If we do not do this, each time we add a new contact item using our form, all the contact items will be appended to the bottom of our list so that we will have duplicates. To understand why this while loop is needed, try commenting it out and observe the behavior of the application. Essentially, we are clearing out our output container (our article tag with class "output") so that we repopulate it.

      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }

      outputArticle.appendChild(contactDocFragment);
    });
  }

};
var _default = contactList;
exports.default = _default;

},{"./Contact":1,"./ContactCollection":2}],5:[function(require,module,exports){
"use strict";

var _ContactForm = _interopRequireDefault(require("./ContactForm"));

var _ContactList = _interopRequireDefault(require("./ContactList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ContactForm.default.createHTML();

_ContactList.default.contactify();

},{"./ContactForm":3,"./ContactList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3QuanMiLCIuLi9zY3JpcHRzL0NvbnRhY3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9Db250YWN0Rm9ybS5qcyIsIi4uL3NjcmlwdHMvQ29udGFjdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUNBLE1BQU0sT0FBTyxHQUFHO0FBRWQsRUFBQSxjQUFjLENBQUMsYUFBRCxFQUFnQjtBQUM1QixRQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixhQUFhLENBQUMsSUFBeEM7QUFFQSxRQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFwQjtBQUNBLElBQUEsYUFBYSxDQUFDLFdBQWQsR0FBNEIsYUFBYSxDQUFDLE1BQTFDO0FBQ0EsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLEdBQTZCLGFBQWEsQ0FBQyxPQUEzQztBQUdBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsV0FBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGFBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixjQUEzQjtBQUdBLFdBQU8sY0FBUDtBQUNEOztBQXBCYSxDQUFoQjtlQXVCZSxPOzs7Ozs7Ozs7O0FDdkJmO0FBRUEsTUFBTSxpQkFBaUIsR0FBRztBQUN0QjtBQUNBLEVBQUEsY0FBYyxHQUFHO0FBQ2YsV0FBTyxLQUFLLENBQUMsZ0NBQUQsQ0FBTCxDQUNOLElBRE0s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dCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL0dpdmVuIGEgc2luZ2xlIGNvbnRhY3Qgb2JqZWN0LCB0aGlzIGNvbXBvbmVudCBidWlsZHMgb3V0IHRoZSBIVE1MIGFuZCByZXR1cm5zIGl0XHJcbmNvbnN0IGNvbnRhY3QgPSB7XHJcblxyXG4gIGNvbnRhY3RCdWlsZGVyKGNvbnRhY3RPYmplY3QpIHtcclxuICAgIGxldCBjb250YWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXHJcbiAgICBcclxuICAgIGxldCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgY29udGFjdE5hbWUudGV4dENvbnRlbnQgPSBjb250YWN0T2JqZWN0Lm5hbWVcclxuXHJcbiAgICBsZXQgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBjb250YWN0TnVtYmVyLnRleHRDb250ZW50ID0gY29udGFjdE9iamVjdC5udW1iZXJcclxuICAgIGxldCBjb250YWN0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBjb250YWN0QWRkcmVzcy50ZXh0Q29udGVudCA9IGNvbnRhY3RPYmplY3QuYWRkcmVzc1xyXG5cclxuXHJcbiAgICBjb250YWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChjb250YWN0TmFtZSlcclxuICAgIGNvbnRhY3RBcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXIpXHJcbiAgICBjb250YWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChjb250YWN0QWRkcmVzcylcclxuXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3RBcnRpY2xlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0IiwiXHJcbi8vIENvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgQVBJLiBBbGwgZmV0Y2ggY2FsbHMgZm9yIHRoaXMgYXBwbGljYXRpb24gd2lsbCBiZSBkZWZpbmVkIGhlcmVcclxuXHJcbmNvbnN0IGNvbnRhY3RDb2xsZWN0aW9uID0ge1xyXG4gICAgLy8gVGhpcyBtZXRob2QgcmV0dXJucyBhIGZldGNoLCB3aGljaCBtZWFucyBpdCBpcyByZXR1cm5pbmcgYSBwcm9taXNlLiBXaGljaCBtZWFucyB0byBhY2Nlc3MgdGhlIHJlc3BvbnNlIGZyb20gdGhlIGFzeW5jaHJvbm91cyBIVFRQIEdFVCByZXF1ZXN0IHRoYXQgaXMgYmVpbmcgbWFkZSBieSB0aGlzIGZldGNoLCB3ZSBjYW4gY2hhaW4gYSAudGhlbiBhdCB0aGUgcG9pbnQgd2hlcmUgdGhpcyBtZXRob2QoZ2V0QWxsRm9vZHMpIGlzIGNhbGxlZC4gVGhlIC50aGVuIHRoZW4gaXMgY2hhaW5lZCB0byB0aGUgZmV0Y2ggaW5zaWRlIHRoZSBtZXRob2QgaXMgcGFyc2luZyB0aGUgZGF0YSBmcm9tIEpTT04gdG8gZGF0YSBzdHJ1Y3R1cmVzIEphdmFzY3JpcHQgd2lsbCB1bmRlcnN0YW5kLiBJbiB0aGlzIGNhc2UsIGJlY2F1c2Ugd2UgaGF2ZSBhIGNvbGxlY3Rpb24gb2YgaXRlbXMsIGl0IHdpbGwgYmUgYW4gYXJyYXkgb2Ygb2JqZWN0cy5cclxuICAgIGdldEFsbENvbnRhY3RzKCkge1xyXG4gICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvY29udGFjdHNcIilcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgfSxcclxuICBcclxuICAgIC8vIFRoaXMgbWV0aG9kIHdpbGwgbWFrZSBhIEhUVFAgUE9TVCByZXF1ZXN0IHRvIHRoZSBBUEkuIEJlY2F1c2UgYSBQT1NUIGhhcyBhIGJvZHkgd2l0aCB0aGUgZGF0YSBmb3IgdGhlIG5ldyBpdGVtIHlvdSB3YW50IGNyZWF0ZWQsIHRoaXMgbWV0aG9kIHdpbGwgdGFrZSBvbmUgYXJndW1lbnQgd2hpY2ggd2lsbCBiZSB0aGUgb2JqZWN0IGZvciB0aGUgbmV3IGZvb2QgaXRlbSB3ZSB3YW50IHRvIGFkZCB0byBvdXIgY29sbGVjdGlvbiBpbiB0aGUgQVBJLlxyXG4gICAgcG9zdE5ld0NvbnRhY3QobmV3Q29udGFjdFRvU2F2ZSkge1xyXG4gICAgICAvLyBXZSB3YW50IHRvIHJldHVybiB0aGlzIGZldGNoIHJlcXVlc3Qgc28gdGhhdCBhdCB0aGUgcG9pbnQgaXQgaXMgY2FsbGVkLCB3ZSBjYW4gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGFzeW5jaHJvbm91cyBuYXR1cmUgb2YgcHJvbWlzZXMgdG8gd2FpdCBmb3IgdGhpcyB0byBiZSBkb25lIGJlZm9yZSBnZXR0aW5nIHRoZSBsYXRlc3QgZGF0YSBhbmQgcmVyZW5kZXJpbmcgdGhlIERPTS5cclxuICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2NvbnRhY3RzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0NvbnRhY3RUb1NhdmUpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbnRhY3RDb2xsZWN0aW9uIiwiaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRhY3RDb2xsZWN0aW9uXCI7XHJcbmltcG9ydCBjb250YWN0TGlzdCBmcm9tIFwiLi9Db250YWN0TGlzdFwiO1xyXG5cclxuLy8gQSBDb250YWN0IGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGEgcGVyc29uJ3MgbmFtZSwgcGhvbmUgbnVtYmVyLCBhbmQgYWRkcmVzcy5cclxuXHJcbmNvbnN0IGNvbnRhY3RGb3JtID0ge1xyXG4gICAgY3JlYXRlSFRNTCgpIHtcclxuICAgICAgICBsZXQgaW5wdXRGb3JtID1cclxuICAgICAgICBgXHJcbiAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgPGgyPkVudGVyIE5ldyBDb250YWN0PC9oMj5cclxuICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3ROYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29udGFjdE5hbWVcIiBuYW1lPVwiY29udGFjdE5hbWVcIiB0eXBlPVwidGV4dFwiIGF1dG9mb2N1cyAvPlxyXG4gICAgICAgICAgICA8L2ZpZWxkc2V0XHJcbiAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRhY3ROdW1iZXJcIj5OdW1iZXI6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbnRhY3ROdW1iZXJcIiBuYW1lPVwiY29udGFjdE51bWJlclwiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXRcclxuICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGFjdEFkZHJlc3NcIj5BZGRyZXNzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjb250YWN0QWRkcmVzc1wiIG5hbWU9XCJjb250YWN0QWRkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgYXV0b2ZvY3VzIC8+XHJcbiAgICAgICAgICAgIDwvZmllbGRzZXRcclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgYFxyXG4gICAgICAgIGxldCBkaXNwbGF5Q29udGFjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XHJcbiAgICAgICAgZGlzcGxheUNvbnRhY3RzQ29udGFpbmVyLmlubmVySFRNTCA9IGlucHV0Rm9ybTtcclxuICAgIH0sXHJcblxyXG4gICAgYnV0dG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdE5hbWVcIikudmFsdWU7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0TnVtYmVyXCIpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhY3RBZGRyZXNzXCIpLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWN0T2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICBudW1iZXI6IG51bWJlcixcclxuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWN0Q29sbGVjdGlvbi5wb3N0TmV3Q29udGFjdChjb250YWN0T2JqZWN0KVxyXG4gICAgICAgIC50aGVuIChmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgY29udGFjdExpc3QuZ2V0QWxsQ29udGFjdHMoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Rm9ybVxyXG5cclxuLy8gY29uc3QgY29udGFjdEZvcm0gPSB7XHJcbi8vICAgY3JlYXRlQW5kQXBwZW5kRm9ybSgpIHtcclxuLy8gICAgICAgbGV0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcclxuLy8gICAgICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIHRvIHlvdXIgY29udGFjdHNcIlxyXG5cclxuLy8gICAgICAgbGV0IGNvbnRhY3ROYW1lRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIilcclxuXHJcbi8vICAgICAgIGxldCBjb250YWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbi8vICAgICAgIGNvbnRhY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIlxyXG4vLyAgICAgICBjb250YWN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnRhY3QtbmFtZVwiKVxyXG4vLyAgICAgICBsZXQgY29udGFjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4vLyAgICAgICBjb250YWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1uYW1lXCIpXHJcbi8vICAgICAgIGNvbnRhY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNvbnRhY3QtbmFtZVwiKVxyXG5cclxuLy8gICAgICAgY29udGFjdE5hbWVGaWVsZC5hcHBlbmRDaGlsZChjb250YWN0TmFtZUxhYmVsKVxyXG4vLyAgICAgICBjb250YWN0TmFtZUZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lSW5wdXQpXHJcblxyXG4vLyAgICAgICBsZXQgY29udGFjdE51bWJlckZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXHJcblxyXG4vLyAgICAgICBsZXQgY29udGFjdE51bWJlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXHJcbi8vICAgICAgIGNvbnRhY3ROdW1iZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyXCJcclxuLy8gICAgICAgY29udGFjdE51bWJlckxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbnRhY3QtbnVtYmVyXCIpXHJcbi8vICAgICAgIGxldCBjb250YWN0TnVtYmVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuLy8gICAgICAgY29udGFjdE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdC1udW1iZXJcIilcclxuLy8gICAgICAgY29udGFjdE51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb250YWN0LW51bWJlclwiKVxyXG5cclxuLy8gICAgICAgY29udGFjdE51bWJlckZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXJMYWJlbClcclxuLy8gICAgICAgY29udGFjdE51bWJlckZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3ROdW1iZXJJbnB1dClcclxuXHJcbi8vICAgICAgIGxldCBjb250YWN0QWRkcmVzc0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpXHJcblxyXG4vLyAgICAgICBsZXQgY29udGFjdEFkZHJlc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxyXG4vLyAgICAgICBjb250YWN0QWRkcmVzc0xhYmVsLnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCJcclxuLy8gICAgICAgY29udGFjdEFkZHJlc3NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb250YWN0LWFkZHJlc3NcIilcclxuLy8gICAgICAgbGV0IGNvbnRhY3RBZGRyZXNzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuLy8gICAgICAgY29udGFjdEFkZHJlc3NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiY29udGFjdC1hZGRyZXNzXCIpXHJcbi8vICAgICAgIGNvbnRhY3RBZGRyZXNzSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiY29udGFjdC1hZGRyZXNzXCIpXHJcblxyXG4vLyAgICAgICBjb250YWN0QWRkcmVzc0ZpZWxkLmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzTGFiZWwpXHJcbi8vICAgICAgIGNvbnRhY3RBZGRyZXNzRmllbGQuYXBwZW5kQ2hpbGQoY29udGFjdEFkZHJlc3NJbnB1dClcclxuXHJcbi8vICAgICAgIC8vIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbi8vICAgICAgIC8vIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIENvbnRhY3RcIlxyXG4vLyAgICAgICAvLyBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb250YWN0LXNhdmVcIilcclxuXHJcbi8vICAgICAgIC8vIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVBZGROZXdGb29kKVxyXG5cclxuLy8gICAgICAgbGV0IGNvbnRhY3RGb3JtRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcclxuLy8gICAgICAgY29udGFjdEZvcm1GcmFnbWVudC5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxyXG4vLyAgICAgICBjb250YWN0Rm9ybUZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lRmllbGQpXHJcbi8vICAgICAgIGNvbnRhY3RGb3JtRnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGFjdE51bWJlckZpZWxkKVxyXG4vLyAgICAgICBjb250YWN0Rm9ybUZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RBZGRyZXNzRmllbGQpXHJcblxyXG4vLyAgICAgICBsZXQgZm9ybUFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIilcclxuLy8gICAgICAgZm9ybUFydGljbGUuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1GcmFnbWVudClcclxuXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBjb250YWN0Rm9ybSIsIi8vIFRoaXMgY29tcG9uZW50IHdpbGwgZ2V0IHRoZSBkYXRhLCBidWlsZCB0aGUgSFRNTCBmcm9tIHRoZSBkYXRhIGFuZCBhcHBlbmQgaXQgdG8gdGhlIERPTS5cclxuXHJcbi8vIFRvIGdldCB0aGUgZGF0YSwgd2Ugd2lsbCB1c2UgdGhlIGNvbnRhY3RDb2xsZWN0aW9uIGNvbXBvbmVudC5cclxuaW1wb3J0IGNvbnRhY3RDb2xsZWN0aW9uIGZyb20gXCIuL0NvbnRhY3RDb2xsZWN0aW9uXCJcclxuLy8gVG8gYnVpbGQgdGhlIEhUTUwgZm9yIGVhY2ggb2JqZWN0IGluIHRoZSBhcnJheSBvZiBjb250YWN0KHdoaWNoIGlzIHdoYXQgdGhlIGRhdGEgY29taW5nIGZyb20gdGhlIEFQSSBiZWNvbWVzIG9uY2Ugd2UgcGFyc2UgaXQpLCB3ZSB3aWxsIHVzZSB0aGUgY29udGFjdCBjb21wb25lbnQuXHJcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIlxyXG5cclxuY29uc3QgY29udGFjdExpc3QgPSB7XHJcbiAgY29udGFjdGlmeSgpe1xyXG4gICAgLy8gMS4gR2V0IGRhdGFcclxuICAgIC8vIFRoZSBnZXRBbGxDb250YWN0cyBtZXRob2Qgd2lsbCBkbyBhIGZldGNoIGFuZCByZXR1cm4gYSBwcm9taXNlLiBUaGlzIGNhbGwgd2lsbCByZXR1cm4gdGhlIGRhdGEgZnJvbSB0aGUgQVBJIGluIHRoZSByZXNwb25zZS5cclxuICAgIGNvbnRhY3RDb2xsZWN0aW9uLmdldEFsbENvbnRhY3RzKClcclxuICAgIC50aGVuKGFsbENvbnRhY3RzID0+IHtcclxuXHJcbiAgICAgIC8vIEFuIGVtcHR5IGRvY3VtZW50IGZyYWdtZW50XHJcbiAgICAgIGxldCBjb250YWN0RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcclxuICAgICAgYWxsQ29udGFjdHMuZm9yRWFjaChjdXJyZW50Q29udGFjdCA9PiB7XHJcbiAgICAgICAgbGV0IGNvbnRhY3RET00gPSBjb250YWN0LmNvbnRhY3RCdWlsZGVyKGN1cnJlbnRDb250YWN0KVxyXG4gICAgICAgIGNvbnRhY3REb2NGcmFnbWVudC5hcHBlbmRDaGlsZChjb250YWN0RE9NKVxyXG4gICAgICB9KVxyXG4gICAgICBcclxuICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKVxyXG5cclxuICAgICAgLy9UaGlzIHdoaWxlIGxvb3AgZXNzZW50aWFsbHkgcmVtb3ZlcyBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCB1bnRpbCB0aGUgZWxlbWVudCBoYXMgbm8gY2hpbGQgbm9kZXMgbGVmdC4gSXQgaXMgZXF1aXZhbGVudCB0byB0aGUgZm9sbG93aW5nOlxyXG4gICAgICAvLyBvdXRwdXRBcnRpY2xlLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgICAgIC8vIElmIHdlIGRvIG5vdCBkbyB0aGlzLCBlYWNoIHRpbWUgd2UgYWRkIGEgbmV3IGNvbnRhY3QgaXRlbSB1c2luZyBvdXIgZm9ybSwgYWxsIHRoZSBjb250YWN0IGl0ZW1zIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIGJvdHRvbSBvZiBvdXIgbGlzdCBzbyB0aGF0IHdlIHdpbGwgaGF2ZSBkdXBsaWNhdGVzLiBUbyB1bmRlcnN0YW5kIHdoeSB0aGlzIHdoaWxlIGxvb3AgaXMgbmVlZGVkLCB0cnkgY29tbWVudGluZyBpdCBvdXQgYW5kIG9ic2VydmUgdGhlIGJlaGF2aW9yIG9mIHRoZSBhcHBsaWNhdGlvbi4gRXNzZW50aWFsbHksIHdlIGFyZSBjbGVhcmluZyBvdXQgb3VyIG91dHB1dCBjb250YWluZXIgKG91ciBhcnRpY2xlIHRhZyB3aXRoIGNsYXNzIFwib3V0cHV0XCIpIHNvIHRoYXQgd2UgcmVwb3B1bGF0ZSBpdC5cclxuICAgICAgd2hpbGUgKG91dHB1dEFydGljbGUuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIG91dHB1dEFydGljbGUucmVtb3ZlQ2hpbGQob3V0cHV0QXJ0aWNsZS5maXJzdENoaWxkKTtcclxuICAgICAgfVxyXG4gICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKGNvbnRhY3REb2NGcmFnbWVudClcclxuXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdExpc3QiLCJpbXBvcnQgY29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdEZvcm1cIlxyXG5pbXBvcnQgY29udGFjdExpc3QgZnJvbSBcIi4vQ29udGFjdExpc3RcIlxyXG5cclxuY29udGFjdEZvcm0uY3JlYXRlSFRNTCgpXHJcbmNvbnRhY3RMaXN0LmNvbnRhY3RpZnkoKSJdfQ==
