import { useMutation, useQueryClient } from "@tanstack/react-query";
import { crearProductos } from "./../api/productos.API";

export default ProductForm = () => {
    const queryClient = useQueryClient();
    const addProductMutation = useMutation({
        mutationFn: crearProductos,
        onSuccess: ()=>{
            queryClient.invalidateQueries('products')
        }
    });

    const handleSubmit =  (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData)
        addProductMutation.mutate({
            ...product,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" name="name" id="name">Nombre</label>
            <input type="text" />
            <label htmlFor="price" name="price" id="price">Precio</label>
            <input type="number" />
            <label htmlFor="description" name="description" id="description">Descripcion</label>
            <input type="text" />
            <label htmlFor="category">Categoria</label>
            <input type="text" />
            <button type="submit">Subir</button>
        </form>
    )

};




