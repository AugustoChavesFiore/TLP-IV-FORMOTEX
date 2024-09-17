export interface IOrganization {
    name: string;
    address: string;
    phone: string;
    email: string;
    status?: boolean;
};

export interface IOrganizationService {
    create(organization: IOrganization): Promise<IOrganization>;
    findAll(): Promise<IOrganization[]>;
    findOne(id: string): Promise<IOrganization>;
    update(id: string, organization: IOrganization): Promise<void>;
    remove(id: string): Promise<void>;
};