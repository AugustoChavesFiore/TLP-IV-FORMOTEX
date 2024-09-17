
export interface Inventory {
    _id: string;
    name: string;
    description: string;
    section: string;
    status: string;
    adquisitionDate: Date;
    category: string
    organization: string
};


export interface InventoryCreate {
    name: string;
    description: string;
    section: string;
    status: string;
    adquisitionDate: Date;
    category: string
    organization: string
};

