import { MessageDiv, MessageContent } from "./styles.ts";
import { Props } from "../FoodCard/index.tsx";

const Message = ({onClose, orderId}: Props) => (
    <MessageDiv>
        <MessageContent>
            <h4>Pedido realizado: {orderId}</h4>
            <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </p>
            <p>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </p>
            <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </p>
            <button type="button" onClick={onClose}>Concluir</button>
        </MessageContent>
    </MessageDiv>
)

export default Message