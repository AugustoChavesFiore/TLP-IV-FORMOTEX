import { enviroments } from "../config/envs";
import { CategoryService } from "../inventory-category/category.service";
import { ICategory } from "../inventory-category/interface/category.interface";


class CategorySeed {

    constructor(private categoryService: CategoryService) { };
    private categories: ICategory[] = [
        {
            name: "Notebooks",
            description: 'Categoria de notebooks'
        },
        {
            name: "Smartphones",
            description: 'Categoria de smartphones'
        },
        {
            name: "Tablets",
            description: 'Categoria de tablets',
        },
        {
            name: "Accesorios",
            description: "Categoria de accesorios"
        }
    ];
    async seed() {
        if (enviroments.ENVIROMENT !== 'development') return

        const cateogiesDb = await this.categoryService.findAll()
        if (cateogiesDb.length !== 0) return
        await Promise.all(
            this.categories.map(async category => {
                await this.categoryService.create(category)
            })
        )

    };

};

const categoryService = new CategoryService();
export const categorySeed = new CategorySeed(categoryService);
