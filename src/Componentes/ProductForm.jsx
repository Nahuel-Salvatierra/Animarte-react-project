import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProducts } from "./../api/productos.API";
import { handleSubmitError } from "./../api/handleErrors";

export default function ProductForm() {
    const queryClient = useQueryClient();
    const addProductMutation = useMutation({
        mutationFn: createProducts,
        onSuccess: () => {
            queryClient.invalidateQueries("products");
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData);
        console.log(product);
        addProductMutation.mutate({
            ...product,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="row">
                <div className="p-2 col-4">
                    <label htmlFor="name">Nombre :</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="p-2 col-4">
                    <label htmlFor="price">Precio :</label>
                    <input type="number" name="price" id="price" />
                </div>

                <div className="p-2 col-4">
                    <label htmlFor="category">Categoria :</label>
                    <input type="text" name="category" id="category" />
                </div>

                <div className="p-2 col-12 form-floating mb-3 ">
                    <label htmlFor="description" className="p-2">
                        Descripcion
                    </label>
                    <textarea
                        className="form-control "
                        placeholder="Leave a comment here"
                        id="description"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Subir
                </button>
            </div>
        </form>
    );
}
