import { useFormik } from 'formik'
import * as Yup from 'yup'



function App() {
    const validation = {
       email :  '/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/'
    }
    const formik = useFormik({

        initialValues: {
            name: '',
            email: '',
            phone: '',
        },

       

        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("Fill something")
                .min(10, "Name is too short !!!")
                .max(50, "Name is too long !!!"),


            email: Yup.string()
                .required("Fill something")
                .min(10, "email is too short !!!")
                .max(50, "email is too long !!!")
                .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Invalid email"),

            phone:Yup.string()
            .required('fill something')
            .min(9,"Invalid phone number")
            .max(13,'Invalid phone number')    

        }),

        onSubmit: (values) => {
            window.alert("Form submitted");
            console.log(values);
        }


    }    )



    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>name</label>
                <input
                    type='text'
                    placeholder='Enter your name'
                    id='name'
                    name='name'
                    value={formik.values.name}
                    onChange={formik.handleChange} />
                    {formik.errors.name && <p> {formik.errors.name}</p>}

                <label>email</label>
                <input
                    type='text'
                    placeholder='Enter your email'
                    id='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && <p> {formik.errors.email}</p>}

                <label>phone</label>
                <input
                    type='text'
                    placeholder='Enter your phone number'
                    id='phone'
                    name='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                />
                {formik.errors.phone && <p> {formik.errors.phone}</p>}

                <button type='submit'>Submit</button>

            </form>


        </div>


    )




}
export default App