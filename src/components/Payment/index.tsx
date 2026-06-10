import { useState } from "react";
import { PayFormContent, PayFormDiv } from "./styles.ts";
import Message from "../Message/index.tsx";
import { useFormik } from "formik";
import * as Yup from 'yup'

type Props = {
    onBackDelivery: () => void
    onFinish: () => void
}

const Payment = ({onFinish, onBackDelivery}: Props) => {
    const [endPay, setEndPay] = useState(false)
    const goEndPayment = () => {
        setEndPay(true)
    }
    const form = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cvv: '',
            month: '',
            year: ''
        },
        validationSchema: Yup.object({
            cardName: Yup.string()
            .min(6, 'O nome deve ter pelo menos 6 caracteres!')
            .required('O campo é obrigatório!'),
            cardNumber: Yup.string()
            .required('O campo é obrigatório!'),
            cvv: Yup.string()
            .min(3, 'O CVV tem que ter 3 caracteres!')
            .max(3, 'O CVV tem que ter 3 caracteres!')
            .required('O campo é obrigatório!'),
            month: Yup.string()
            .min(2, 'O mês deve ter 2 caracteres!')
            .max(2, 'O mês deve ter 2 caracteres!')
            .required('O campo é obrigatório!'),
            year: Yup.string()
            .min(2, 'O ano deve ter 2 caracteres!')
            .max(2, 'O ano deve ter 2 caracteres!')
            .required('O campo é obrigatório!'),
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    const getErrorMessage = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors

        if (isTouched && isInvalid) return message
    }

    return (
        <PayFormDiv>
                <PayFormContent>
                    <h4>Pagamento - Valor a pagar: R$</h4> <br />
                    <label htmlFor="cardName">Nome do cartão</label> <br />
                    <input id="cardName" type="text" name="cardName" value={form.values.cardName} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                    <small>{getErrorMessage('cardName', form.errors.cardName)}</small> <br />
                    <label htmlFor="cardNumber">Número do cartão</label> <br />
                    <input id="cardNumber" type="number" name="cardNumber" value={form.values.cardNumber} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                    <small>{getErrorMessage('cardNumber', form.errors.cardNumber)}</small> <br />
                    <label htmlFor="cvv">CVV</label> <br />
                    <input className="small" id="cvv" type="number" name="cvv" value={form.values.cvv} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                    <small>{getErrorMessage('cvv', form.errors.cvv)}</small> <br />
                    <label htmlFor="month">Mês de vencimento</label> <br />
                    <input className="small" id="month" type="number" name="month" value={form.values.month} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                    <small>{getErrorMessage('month', form.errors.month)}</small> <br />
                    <label htmlFor="year">Ano de vencimento</label> <br />
                    <input className="small" id="year" type="text" name="year" value={form.values.year} onChange={form.handleChange} onBlur={form.handleBlur}/> <br />
                    <small>{getErrorMessage('year', form.errors.year)}</small> <br />
                    <button type="button" onClick={() => {form.submitForm(); goEndPayment()}}>Finalizar pagamento</button> <br />
                    {endPay &&<Message onClose={onFinish} food={{
                        id: 0,
                        nome: "",
                        descricao: "",
                        preco: 0,
                        porcao: "",
                        foto: ""
                    }}/>}
                    <button type="button" onClick={onBackDelivery}>Voltar para edição o endereço</button>
                </PayFormContent>
            </PayFormDiv>
    )
}

export default Payment