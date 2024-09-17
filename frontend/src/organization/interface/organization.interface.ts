
export interface Organization {
    _id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    status?: boolean;
};


export interface OrganizationCreate {
    name: string;
    address: string;
    phone: string;
    email: string;
};

