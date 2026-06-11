import { FormDiv, FormContent } from "./styles.ts";
import { Props } from "../FoodCard/index.tsx";
import { useState } from "react";
import Payment from "../Payment/index.tsx";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Delivery = ({onClose}: Props) => {
    const [goPayment, setGoPayment] = useState(false)
    const form = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            cep: '',
            number: '',
            complement: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .min(3, 'O nome deve ter pelo menos 3 caracteres!')
            .required('O campo é obrigatório!'),
            address: Yup.string()
            .min(10, 'O endereço deve ter pelo menos 10 caracteres!')
            .required('O campo é obrigatório!'),
            city: Yup.string()
            .min(3, 'O nome da cidade deve ter pelo menos 3 caracteres!')
            .required('O campo é obrigatório!'),
            cep: Yup.string()
            .min(9, 'O CEP deve ter 9 caracteres!')
            .required('O campo é obrigatório!'),
            number: Yup.string()
            .required('O campo é obrigatório!')
        }),
        onSubmit: () => {}
})

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors

        if (isTouched && isInvalid) return message
    }

    const goPay = () => {
        const hasErrors = Object.keys(form.errors).length > 0
        if (hasErrors) return ''
        setGoPayment(true)
    }

    const closePay = () => {
        setGoPayment(false)
    }

    return (
        <FormDiv>
                <FormContent>
                    <form onSubmit={form.handleSubmit}>
                        <h4>Entrega</h4> <br />
                        <label htmlFor="name">Quem irá receber</label> <br />
                        <input id="name" type="text" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                        <small>{getErrorMessage('name', form.errors.name)}</small> <br />
                        <label htmlFor="address">Endereço</label> <br />
                        <input id="address" type="text" name="address" value={form.values.address} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                        <small>{getErrorMessage('address', form.errors.address)}</small> <br />
                        <label htmlFor="city">Cidade</label> <br />
                        <input id="city" type="text" name="city" value={form.values.city} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                        <small>{getErrorMessage('city', form.errors.city)}</small> <br />
                        <label htmlFor="cep">CEP</label> <br />
                        <input className="small" id="cep" type="text" name="cep" value={form.values.cep} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                        <small>{getErrorMessage('cep', form.errors.cep)}</small> <br />
                        <label htmlFor="number">Número</label> <br />
                        <input className="small" id="number" type="number" name="number" value={form.values.number} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                        <small>{getErrorMessage('number', form.errors.number)}</small> <br />
                        <label htmlFor="complement">Complemento (opcional)</label> <br />
                        <input id="complement" type="text" name="complement" value={form.values.complement} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                        <button type="submit" onClick={goPay}>Continuar com o pagamento</button> <br />
                        {goPayment &&<Payment deliveryData={form.values} onBackDelivery={closePay} onFinish={() => {closePay(); onClose()}}/>}
                        <button type="button" onClick={onClose}>Voltar para o carrinho</button>
                    </form>
                </FormContent>
            </FormDiv>
    )
}

export default Delivery