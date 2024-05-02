import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    countryName: "",
    streetAddress: "",
    cityName: "",
    stateName: "",
    zipCode: "",
    commentNotification: false,
    candidatesNotification: false,
    offersNotification: false,
    pushNotification: "",
  });

  function formChangeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      const newState = { ...prev };
      newState[name] = type === "checkbox" ? checked : value;
      return newState;
    });
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    //? One of the way to get all the data in an object after submit
    // let allFormInput = event.target
    // let formData = new FormData(allFormInput)
    // console.log(formData);
    // let formDataObj = Object.fromEntries(formData)
    // console.log(formDataObj);

    //? Another way to print all the form data after submit
    console.table(formData);
  }

  return (
    <div id="formContainer">
      <form id="personalForm" onSubmit={formSubmitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Evan"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="You"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.lastName}
        />

        <label htmlFor="emailId">Email address</label>
        <input
          type="email"
          id="emailId"
          name="emailId"
          placeholder="evanyou@mail.com"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.emailId}
        />

        <label htmlFor="countryName">Country</label>
        <select
          id="countryName"
          name="countryName"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.countryName}
        >
          <option value="India">India</option>
          <option value="United-States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>

        <label htmlFor="streetAddress">Street Address</label>
        <input
          type="text"
          id="streetAddress"
          name="streetAddress"
          placeholder="1234 Main road"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.streetAddress}
        />

        <label htmlFor="cityName">City</label>
        <input
          type="text"
          id="cityName"
          name="cityName"
          placeholder="Burdwan"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.cityName}
        />

        <label htmlFor="stateName">State / Province</label>
        <input
          type="text"
          id="stateName"
          name="stateName"
          placeholder="West Bengal"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.stateName}
        />

        <label htmlFor="zipCode">ZIP / Postal Code</label>
        <input
          type="number"
          id="zipCode"
          name="zipCode"
          placeholder="732213"
          className="formInputBox"
          onChange={formChangeHandler}
          value={formData.zipCode}
        />

        <label htmlFor="emailNotification">By Email</label>
        <div className="emailNotification">
          <input
            type="checkbox"
            id="commentNotification"
            name="commentNotification"
            onChange={formChangeHandler}
            value={formData.commentNotification}
          />
          <div>
            <label htmlFor="commentNotification">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>
        </div>
        <div className="emailNotification">
          <input
            type="checkbox"
            id="candidatesNotification"
            name="candidatesNotification"
            onChange={formChangeHandler}
            value={formData.candidatesNotification}
          />
          <div>
            <label htmlFor="candidatesNotification">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
        </div>
        <div className="emailNotification">
          <input
            type="checkbox"
            id="offersNotification"
            name="offersNotification"
            onChange={formChangeHandler}
            value={formData.offersNotification}
          />
          <div>
            <label htmlFor="offersNotification">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </div>

        <div>
          <label htmlFor="pushNotification">Push Notifications</label>
          <p>These are delivered via SMS to your mobile phone.</p>

          <div>
            <input
              type="radio"
              name="pushNotification"
              id="notifyEverything"
              onChange={formChangeHandler}
              value="Everything"
            />
            <label htmlFor="notifyEverything">Everything</label>
          </div>
          <div>
            <input
              type="radio"
              name="pushNotification"
              id="notifyEmail"
              onChange={formChangeHandler}
              value="Same as email"
            />
            <label htmlFor="notifyEmail">Same as email</label>
          </div>
          <div>
            <input
              type="radio"
              name="pushNotification"
              id="notifyOff"
              onChange={formChangeHandler}
              value="No push notification"
            />
            <label htmlFor="notifyOff">No push notification</label>
          </div>
        </div>

        <input type="submit" value="Submit" id="submitBtn" />
      </form>
    </div>
  );
}

export default App;
