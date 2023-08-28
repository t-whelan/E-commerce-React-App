const ValidateAddress = (values) => {
    const errors = {}
    const name_pattern = /^[A-Z][a-z]+\s[a-zA-Z\s.]+$/

    if(values.name === ""){
        errors.name = "Name is Required"
    }else if(!name_pattern.test(values.name)){
        errors.name = "Name must start with a capital letter"
    }
    if(values.streetname === ""){
        errors.streetname = "Street name is Required"
    }
    if(values.city === ""){
        errors.city = "City is Required"
    }
    if(values.province === ""){
        errors.province = "State / Province is Required"
    }
    if(values.country === ""){
        errors.country = "State / Province is Required"
    }

    return errors
}

const ValidatePayment= (values) => {
    const errors = {}
    const name_pattern = /^[A-Z][A-Za-z]{1,30} [A-Z][A-Za-z]{1,30}$/
    //const cardnumber_pattern = /^[0-9]$/
    const cvc_pattern = /^[0-9]{3,4}$/
    
    if(values.name === ""){
        errors.name = "Name is Required"
    }else if(!name_pattern.test(values.name)){
        errors.name = "Name(s) & Surname must start with a capital letter and space between them"
    }
    if(values.cardnumber === ""){
        errors.cardnumber = "Card number is Required"
    } //else if(!cardnumber_pattern.test(values.cardnumber)){
        //errors.cardnumber = "Invalid card number"
    //}
    if(values.date === ""){
        errors.date = "Expiry date is Required"
    }
    if(values.cvc === ""){
        errors.cvc = "CVC number is Required"
    }else if(!cvc_pattern.test(values.cvc)){
        errors.cvc = "Invalid cvc number"
    }

    return errors
}


export { ValidateAddress, ValidatePayment };