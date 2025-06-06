import './Contacts.css';
import {useForm} from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
function Contacts(){
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm()
  function doSubmit(data){
    console.log(data);
  }
    return <form onSubmit={handleSubmit(doSubmit)} >
        <h1>SEND US A MESSAGE</h1>
        <input type="text" placeholder="Name" {...register('name',
            {
                required:true,
                minLength:{value:2,message:"Name should be atleast 2 chars long"}
            }
        )
        
        } />
        <input type="email" placeholder="Enter your E-Mail" {...register('email')} />
        <input type="text" placeholder="Subject" {...register('subject')} />
        <textarea name="message" id="message" placeholder="Message" rows={10} cols={20} {...register('message')}></textarea>
        <div className="btn">
            <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting' : 'Submit'}</button>
        </div>
    </form>
    //TODO 
    //TODO1 : to make send functionality work  
}
export default Contacts;