import React from 'react';
import Products from './Products';
import data from '../data/products.json';

class List extends React.Component{
    render(){
        const flowers=data;
        return <div>
            <ul>
               {
                   flowers.map(item=>(
                    //<div class="container" >
                    <div class="col-md-4">
                           <Products title={item.title}
                           description={item.description}
                           imageurl={item.imageurl}
                           unitprice={item.unitprice}
                           //quantity={item.quantity}
                           likes={item.likes}></Products>
                      </div>
                      //</div>   
                   )

                   )
               }
            

            </ul>
        </div>
    }
}

export default List;