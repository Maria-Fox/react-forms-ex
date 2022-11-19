import React, {useState} from "react";

const NewBoxForm = ({createBox}) => {

  let INITIALSTATE = {
    height: "",
    width: "",
    backgroundColor: ""
  }

  let [formData, setFormData] = useState(INITIALSTATE)

  const handleChange = (e) => {

    let {name, value} = e.target;

    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // all items in formData need to be sent. Otherwise,formdata.whatever needs to be sent.
    createBox({...formData});
    setFormData(INITIALSTATE);
  }
  
  return (
      <form className="boxForm" onSubmit = {handleSubmit}>
        <p>Create a Box</p>

        <label htmlFor = "height"> Box Height 
          <input 
            type = "number"
            placeholder = "89"
            id = "height"
            value = {formData.height}
            name = "height"
            onChange = {handleChange}
            required
          >
          </input>
        </label>

        <label htmlFor = "width"> Box Width 
          <input 
            type = "number"
            placeholder = "14"
            id = "width"
            value = {formData.width}
            name = "width"
            onChange = {handleChange}
            required
          >
          </input>
        </label>

        <label htmlFor = "backgroundColor"> Box Background Color 
          <input 
            type = "text"
            placeholder = "peachpuff"
            id = "backgroundColor"
            value = {formData.backgroundColor}
            name = "backgroundColor"
            onChange = {handleChange}
            required
          >
          </input>
        </label>

        <button className = "NewBoxForm-button">Create Box!</button>

      </form>

  )
};

export default NewBoxForm;