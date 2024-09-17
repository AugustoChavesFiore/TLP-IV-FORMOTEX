import { enviroments } from "../config/envs";
import { IOrganization } from "../organization/interface/organization.interface";
import { OrganizationService } from "../organization/organization.service";


class OrganizationSeed {

    constructor(private origanizationService: OrganizationService) { };
    private categories: IOrganization[] = [
        {
            name: 'Instituto Politecnico de Formosa',
            address: 'Ruta N° 81 km....',
            phone: '1234567890',
            email: 'ipf@ipf.com',
        },
    ];
    async seed() {
        if (enviroments.ENVIROMENT !== 'development') return

        const organizations = await this.origanizationService.findAll()
        if (organizations.length !== 0) return
        await Promise.all(
            this.categories.map(async category => {
                await this.origanizationService.create(category)
            })
        )

    };

};

export const organizationSeed = new OrganizationSeed(new OrganizationService());
