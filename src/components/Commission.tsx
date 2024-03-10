export interface Commission
{
    description: string;
    price: number;
}

export function Commission(prop: Commission)
{
    return <tr>
        <td>{prop.description}</td>
        <td>{prop.price}</td>
    </tr>
}