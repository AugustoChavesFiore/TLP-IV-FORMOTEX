import { Product } from "./entities/products.entity";
import { IProductService, IProduct } from "./interfaces/products.interface";
import { ObjectId } from "mongodb";


export class ProductsService implements IProductService {

    async createProduct(product: IProduct, idCategory: string): Promise<IProduct> {
        const newProduct = new Product({ ...product, category: new ObjectId(idCategory) });
        return await newProduct.save();
    };

    async getProducts(): Promise<IProduct[]> {
        return await Product.find()
            .populate('category', { name: 1 });
    };

    async getProduct(id: string): Promise<IProduct> {
        const product = await Product.findOne({ _id: id })
            .populate('category', { name: 1 });

        if (!product) throw new Error('Product not found');
        return product;
    };

    async getProductsByCategory(idCategory: string): Promise<IProduct[]> {
        return await Product.find({ category: idCategory })
            .populate('category', { name: 1 });
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