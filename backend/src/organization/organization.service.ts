import { IOrganization, IOrganizationService } from "./interface/organization.interface";
import { Organization } from "./entities/organization.entity";
import { CustomError } from "../errors/custom.errors";

export class OrganizationService implements IOrganizationService {

    async create(organization: IOrganization): Promise<IOrganization> {
        const organizationCreated = new Organization(organization);
        return await organizationCreated.save();
    };

    async findAll(): Promise<IOrganization[]> {
        return await Organization.find();
    };

    async findOne(id: string): Promise<IOrganization> {
        const organization = await Organization.findOne({ _id: id });
        if (!organization) throw CustomError.NotFound('Organization not found');
        return organization;
    };

    async update(id: string, organization: IOrganization): Promise<void> {
        const organizationUpdated = await Organization.updateOne({ _id: id }, organization);
        if (organizationUpdated.modifiedCount === 0) throw CustomError.NotFound('Organization not found');

    };

    async remove(id: string): Promise<void> {
        const organizationDeleted = await Organization.deleteOne({ _id: id });
        if (organizationDeleted.deletedCount === 0) throw CustomError.NotFound('Organization not found');
    };
};