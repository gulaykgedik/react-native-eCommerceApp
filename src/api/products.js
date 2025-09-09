import api from '.';


const getAllProducts = () => 
    api.get('/products').then(response => response.data.products);

export {getAllProducts};