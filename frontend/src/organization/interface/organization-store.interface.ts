import { Organization, OrganizationCreate } from "./organization.interface";


export interface OrganizationStore {
    organizations: Organization[];
    loading: boolean;
    error: string;

    getOrganizations: () => Promise<void>;
    getOrganization: (id: string) => Organization | undefined;
    createOrganization: (organization: OrganizationCreate) => Promise<void>;
    updateOrganization: (organization: Organization) => Promise<void>;
    deleteOrganization: (id: string) => Promise<void>;
    handleError: (status: number) => void;
    getToken: () => string;
};