import { create } from 'zustand';
import { OrganizationStore } from '../interface/organization-store.interface';
import { OrganizationRequests } from '../api/organizationRequests';
import { handleStatusErrors } from '../utils/handleStatusCode';
import toast from 'react-hot-toast';

export const useOrganizationStore = create<OrganizationStore>((set, get) => ({
    organizations: [],
    loading: false,
    error: '',
    getOrganizations: async () => {
        set({ loading: true });
        const response = await OrganizationRequests.getOrganizations();
        if (response.status === 200) return set({ organizations: response.data, loading: false });
        get().handleError(response.status);

    },
    getOrganization: (id: string) => {
        set({ loading: true });
        const organization = get().organizations.find((org) => org._id === id);
        if (organization) {
            set({ loading: false });
            return organization;
        }
        return undefined;
    },
    createOrganization: async (organization) => {
        set({ loading: true });

        const response = await OrganizationRequests.createOrganizationItem(organization, get().getToken());
        if (response.status === 201) {
            set({ organizations: [...get().organizations, response.data], loading: false });
            toast.success('Organización creada');
            return
        }

        get().handleError(response.status);

    },
    updateOrganization: async (organization) => {
        set({ loading: true });
        const response = await OrganizationRequests.updateOrganizationItem(organization, get().getToken());
        if (response.status === 204) {
            const newOrganizations = get().organizations.map((org) => {
                if (org._id === organization._id) {
                    return organization;
                }
                return org;
            });
            set({ organizations: newOrganizations, loading: false });
            toast.success('Organización actualizada');
            return
        }
        get().handleError(response.status);
    },
    deleteOrganization: async (id) => {
        set({ loading: true });
        const response = await OrganizationRequests.deleteOrganizationItem(id, get().getToken());
        if (response.status === 204) {
            const newOrganizations = get().organizations.filter((org) => org._id !== id);
            set({ organizations: newOrganizations, loading: false });
            toast.success('Organización eliminada');
            return
        }
        get().handleError(response.status);
    },
    handleError: (statusCode) => {
        set({ loading: false });
        return handleStatusErrors(statusCode);
    },
    getToken: () => {
        const token = localStorage.getItem('token');
        return token ? token : '';
    }
}));