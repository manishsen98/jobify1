const FormRow = ({type, name, value, handleChange, labelText}) => {
    return(
        <div className="form-row">
          <label className="form-label" htmlFor="name">
           {labelText || name}
          </label>
          <input
            type={type}
            value={value}
            name={name}
            className="form-input"
            onChange={handleChange}
          />
          </div>
    )
}
export default FormRow