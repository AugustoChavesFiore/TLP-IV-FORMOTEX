import { Product } from "./entities/products.entity";
import { IProductService, IProduct } from "./interfaces/products.interface";


export class ProductsService implements IProductService {

    async createProduct(product: IProduct): Promise<IProduct> {
        const newProduct = new Product(product);
        return await newProduct.save();
    };

    async getProducts(): Promise<IProduct[]> {
        return await Product.find();
    };

    async getProduct(id: string): Promise<IProduct> {
        const product = await Product.findOne({ _id: id });
        if (!product) throw new Error('Product not found');
        return product;
    };

    async updateProduct(id: string, product: IProduct): Promise<void> {
        const updatedProduct = await Product.updateOne({ _id: id }, product);
        if (updatedProduct.modifiedCount === 0) throw new Error('Product not found');
    };

    async deleteProduct(id: string): Promise<void> {
        const deletedProduct = await Product.deleteOne({ _id: id });
        if (deletedProduct.deletedCount === 0) throw new Error('Product not found');
    };


};