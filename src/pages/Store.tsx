import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap";
import { StoreItem } from "../components/StoreItem.tsx";

function Store() {
    return (
        <Row md={2} xs={1} className="g-3">
            {storeItems.map(item => (
            <Col key={item.id}>
                <StoreItem {...item} />
            </Col>
            ))}
        </Row>
    );
}

export default Store;