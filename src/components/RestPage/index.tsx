import { Container } from "../../styles.ts";
import logo from '../../images/logo.png'
import fundo from '../../images/fundo.png'
import { CarrinhoInfo, Food, FoodList, Fundo, HeaderContent, RestButton } from "./styles.ts";
import Footer from "../Footer/index.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FoodCard, { FoodItem } from "../FoodCard/index.tsx";
import FoodCart from "../Cart/index.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index.ts";
import React from "react";

type RestInfos = {
    id: number;
    titulo: string;
    tipo: string;
    capa: string;
}

export type RestsFood = {
    cardapio: [
        {
            foto: string
            preco: number
            id: number
            nome: string
            descricao: string
            porcao: string
    }
]
}

const RestPage = () => {
    const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
    const [infos, setInfos] = useState<RestInfos>()
    const [restaurant, setRestaurant] = useState<RestsFood | null>(null);
    const [mostrarCard, setMostrarCard] = useState(false)
    const [mostrarCart, setMostrarCart] = useState(false)
    const { id } = useParams<{ id: string }>()
    const items = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
        .then(res => res.json())
        .then(data => setRestaurant(data));

        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
        .then(res => res.json())
        .then(data => setInfos(data));
    }, [id]);

    const navigate = useNavigate()

    const Click = (food: FoodItem) => {
        setSelectedFood(food)
        setMostrarCard(true)
    }
    const Close = () => [
        setMostrarCard(false),
        setMostrarCart(false)
    ]

    const handleClick = () => {
        navigate('/')
    }

    const ShowCart = () => {
        setMostrarCart(true)
    }

    return (
        <>
        <Fundo style={{ backgroundImage: `url(${fundo})` }}>
            <Container>
                <HeaderContent>
                    <RestButton>
                        <button type="button" onClick={handleClick}>Restaurantes</button>
                    </RestButton>
                    <img src={logo} alt="Efood" />
                    <CarrinhoInfo>
                        <button type="button" onClick={ShowCart}>{items.length} produto(s) no carrinho</button>
                        {mostrarCart &&<FoodCart onClose={Close} food={{
                                id: 0,
                                nome: "",
                                descricao: "",
                                preco: 0,
                                porcao: "",
                                foto: ""
                            }} />}
                    </CarrinhoInfo>
                </HeaderContent>
            </Container>
        </Fundo>
        <Fundo style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${infos?.capa})` }}>
            <Container>
                <h2>{infos?.tipo}</h2>
                <h1>{infos?.titulo}</h1>
            </Container>
        </Fundo>
        <Container>
            <FoodList>
                {restaurant?.cardapio.map((food) => (
                    <Food key={food.id}>
                        <img src={food.foto} alt={food.nome} />
                        <h4>{food.nome}</h4>
                        <p className="description">{food.descricao}</p>
                        <button className="button" type="button" onClick={() => Click(food)}>Mais detalhes</button>
                    </Food>
                ))}
            </FoodList>
            {mostrarCard && selectedFood && (
                <FoodCard onClose={Close} food={selectedFood} />
                )}
        </Container>
        <Footer/>
        </>
    )
}

export default RestPage