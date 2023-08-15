import { useState } from "react"

const useInputValidation = (initalValue) => {
    const [value, setValue] = useState(initalValue)
  
    const onChange = (e) => {
      setValue(e.target.value)
    }
  
    const validateInput = () => {
      return value.search(/\d/) >= 0
      }
  
  
      const validationColor = validateInput() ? 'text-danger' : null
  
  
      return {value, onChange, validateInput, validationColor}
    }
    export default useInputValidation