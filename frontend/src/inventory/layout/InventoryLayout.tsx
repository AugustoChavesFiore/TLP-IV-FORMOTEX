
import { InventoryList } from '../components/InventoryList';


import { DialogForm } from '../components/DialogForm';

export const InventoryLayout = () => {

   


    return (
        <div className='p-2 grid grid-cols-5 gap-2 '>
            <main className='col-span-5'>
                <div className='my-5'>
                    <DialogForm />
                </div>
                <InventoryList />
            </main>
          
        </div>
    )
}
