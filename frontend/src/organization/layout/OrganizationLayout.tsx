import { InventoryList } from '../components/OrganizationList';

import { DialogFormOrganization } from '../components/DialogFormOrganization';


export const OrganizationLayout = () => {

    return (

        <main className='col-span-5'>
            <div className='my-5'>
                <DialogFormOrganization />
            </div>
            <InventoryList />
        </main>


    )
}
