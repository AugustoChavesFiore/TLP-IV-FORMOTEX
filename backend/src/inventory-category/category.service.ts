import { CustomError } from "../errors/custom.errors";
import { Category  } from "./entities/category.entity";
import { ICategory, ICategoryService } from "./interface/category.interface";



export class CategoryService implements ICategoryService {
    constructor() {};

    async findAll(): Promise<ICategory[]> {
        return await Category.find();
    };

    async findOne(id: string): Promise<ICategory> {
        const category = await Category.findOne({ _id: id });
        if(!category) throw CustomError.NotFound('Category not found');
        return category;
    };

    async create(category: ICategory): Promise<ICategory> {
        const newCategory = new Category(category);
        return await newCategory.save();
    };

    async update(id: string, category: ICategory): Promise<void> {
        const categoryUpdated = await Category.updateOne({ _id: id }, category);
        if(categoryUpdated.modifiedCount === 0) throw CustomError.NotFound('Category not found');
    };

    async delete(id: string): Promise<void> {
        const categoryDeleted = await Category.deleteOne({ _id: id });
        if(categoryDeleted.deletedCount === 0) throw CustomError.NotFound('Category not found');
    };
};