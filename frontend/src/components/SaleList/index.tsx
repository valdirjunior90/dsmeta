import { Sale } from "../../models/sale";
import NotificationButton from "../NotificationButton";

interface props {
    sales:Array<Sale>
}

const SalesList = ({sales}:props):JSX.Element => {
    return (
        <>
            {sales.map(sale=>
                <tr key={sale.id}>
                    <td className="show992">#{sale.id}</td>
                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                    <td>{sale.sellerName}</td>
                    <td className="show992">{sale.visited}</td>
                    <td className="show992">{sale.deals}</td>
                    <td>R$ {sale.amount.toFixed(2)}</td>
                    <td>
                        <div className="dsmeta-red-btn-container">
                            <NotificationButton/>
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}

export default SalesList;