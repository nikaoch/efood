import { Container } from "../../styles.ts";
import { BtnAdd, BtnClose, Card, CardContent, Description } from "./styles.ts";
import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/cart.ts";
import { Food } from "../../App.tsx";
import React from "react";

export type FoodItem = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    porcao: string;
    foto: string;
}

export type Props = {
    food: FoodItem
    onClose: () => void
    orderId: string
}

const FoodCard = ({food, onClose}: Props) => {
    const dispatch = useDispatch();

    const AddToCart = () => {
        const product: Food = {
            id: food.id,
            title: food.nome,
            preco: food.preco,
            quantidade: 1,
            image: food.foto,
        };
        dispatch(add(product));
    };

    return (
        <Card>
            <Container>
                <CardContent>
                    <div>
                        <img src={food.foto} alt={food.nome} />
                    </div>
                    <Description>
                        <h3>{food.nome}</h3>
                        <p>{food.descricao}</p>
                        <p>Serve: <strong>{food.porcao}</strong></p>
                        <BtnAdd type="button" onClick={AddToCart}>Adicionar ao carrinho - R$ {food.preco + '0'}</BtnAdd>
                        <BtnClose type="button" onClick={onClose}>X</BtnClose>
                    </Description>
                </CardContent>
            </Container>
        </Card>
    )
}


export default FoodCard