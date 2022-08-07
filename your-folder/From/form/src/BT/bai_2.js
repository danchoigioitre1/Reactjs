import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'



function App() {



    const formik = useFormik({

        initialValues: {
            To: '',
            Title: '',
            Message: '',
        },



        validationSchema: Yup.object().shape({
            To: Yup.string()
                .required("Fill something")
                .min(10, "Name is too short !!!")
                .max(50, "Name is too long !!!")
                .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Invalid email"),


            Title: Yup.string()
                .required("Fill something")
            ,


            Message: Yup.string()
                .required('fill something')

        }),

        onSubmit: (values) => {
            window.alert("Form submitted");
            console.log(values);
        }


    });
    const [previewImage, setPreviewImage] = useState('')
    const handleOnUpload = e => {
        // console.log(URL.createObjectURL(e.target.files[0]));
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
    }




    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>To</label>
                <input
                    type='text'
                    placeholder='Enter your name'
                    id='To'
                    name='To'
                    value={formik.values.To}
                    onChange={formik.handleChange} />
                {formik.errors.To && <p> {formik.errors.To}</p>}

                <label>Title</label>
                <input
                    type='text'
                    placeholder='Enter your title'
                    id='Title'
                    name='Title'
                    value={formik.values.Title}
                    onChange={formik.handleChange}
                />
                {formik.errors.Title && <p> {formik.errors.Title}</p>}

                <label>Message</label>

                <textarea
                    placeholder='Enter your phone Message'
                    id='Message'
                    name='Message'
                    value={formik.values.Message}
                    onChange={formik.handleChange}
                />
                {formik.errors.Message && <p> {formik.errors.Message}</p>}


                <label>Upload your image</label>
                <input
                    type='file'
                    onChange={handleOnUpload} />
                <div>
                    <div>
                        { previewImage && <img src={previewImage} alt="" />}
                    </div>
                </div>


                <button type='submit' >Submit</button>

            </form>


        </div>


    )




}
export default App