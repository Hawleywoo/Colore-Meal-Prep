import React, { useState, useEffect, useRef } from 'react'

function useCustomForm({ initialValues, onSubmit }) {
    const [values, setValues] = useState(initialValues || {})
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [onSubmitting, setOnSubmitting] = useState(false)
    const [onBlur, setOnBlur] = useState(false)

    const formRendered = useRef(true)
    
    useEffect(() => {
        if(formRendered.current){
            setValues(initialValues)
            setErrors({})
            setTouched({})
            setOnSubmitting(false)
            setOnBlur(false)
        }
        formRendered.current = false
    }, [initialValues])

    const handleChange = (event) => {
        const { target } = event
        const { name, value } = target
    }
    
    const handleBlur = (event) => {
        const { target } = event
        const { name } = event
        setTouched({ ...touched, [name]: true })
        setValues({ ...errors })
        
    }

    const handleSubmit = (event) => {
        if(event) event.preventDefault();
        setErrors({ ...errors })
        onSubmit({ values, errors })
    }
    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    }
}

export default useCustomForm
