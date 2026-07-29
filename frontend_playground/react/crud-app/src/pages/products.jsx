import { useLoaderData, Link, Form } from "react-router-dom";
import { useState } from "react";
const Products = () => {
    const devices = useLoaderData()
    const [isAdding, setIsAdding] = useState(false)

    const [query, setQuery] = useState('')
    const search = query.trim().toLowerCase()
    const filteredDevices = devices.filter(device=>
       search === "" ?
       devices :
        device.name
        .trim()
        .toLowerCase()
        .includes(query.toLowerCase()) ||

        device.category
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    
    return ( 
        
        <div>
            
            <div>
                <search>
                    <input 
                    type="text"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    placeholder="serach here..."
                     />
                </search>

            <div className="bg-slate-200">
                { filteredDevices && 
                <div>
                    {
                        filteredDevices.map((device)=>(
                            <div key={device.id}>
                                <p>{device.name}</p>
                                <Link to={`/products/${device.id}`}>View</Link>
                            </div>
                        ))
                    }
                </div>
                    
                }
            </div>



            </div>
            
            <button onClick={()=>{setIsAdding(true)}}>ADD NEW</button>

            <div>
                {isAdding && <div>
                    <Form method="post">
                        <input type="text" name="name" placeholder="name" required />
                        <input type="text" name="category" placeholder="category" required />
                        <input type="number" name="price" placeholder="price" required/>
                        <button type="submit"  >ADD</button>
                    </Form>
                </div> }
            </div>
            
        </div>
     );
}
 
export default Products;