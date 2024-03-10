import { useEffect, useState } from 'react'
import './components/Commission'
import './App.css'
import { Commission } from './components/Commission'

function App() {
  const [commissions, setCommissions] = useState([] as Commission[])

  useEffect(() =>
  {
    fetch("http://127.0.0.1:5555/commissions")
    .then(response => response.json())
    .then(data => setCommissions(data));
  }, []);

  return <div>
    <table>
      <tr>
        <th>description</th>
        <th>price</th>
      </tr>
      {
        commissions.map(commission => <Commission description={commission.description} price={commission.price}/>)
      }
    </table>
    <br />
    <div>
      <input type="text" name="description" id="desc" placeholder="Description" /><br />
      <input type="number" name="price" id="price" placeholder="Price" /><br />
      <input type="submit" onClick={() => {
        let desc = document.getElementById("desc") as HTMLInputElement;
        let price = document.getElementById("price") as HTMLInputElement;
        fetch("http://127.0.0.1:5555/commission", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            description: desc.value, 
            price: price.value})
        });
      }}/>
    </div>
  </div>
}

export default App
