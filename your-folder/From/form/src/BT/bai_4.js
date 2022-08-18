import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup'
function App() {



    const formik = useFormik({

        initialValues: {

            title: '',
            quantity:3,
        },

        validationSchema: Yup.object().shape({



            title: Yup.string()
                .required("Fill something")
            ,
            quantity: Yup.number().required('required'),



        }),

        onSubmit: (values,{setSubmitting}) => {

            window.alert("Form submitted");
            console.log(values);
            setBooks(prev => [...prev, values])
            setSubmitting(false)
        }


    });





    const [books, setBooks] = useState([])
    const renderBooksList = () => {
        return books.map((book, i) => {
            return (
                <tr key={i}>
                    <td>{i}</td>
                    <td>{book.title}</td>
                    <td>{book.quantity}</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>

                </tr>
            )
        })
    }

    // const [form, setForm] = useState({})
    // const [indexSelected, setIndexSelected] = useState(-1)

    // function handleChange(e) {
    //     setForm({ ...form, [e.target.name]: e.target.value })

    // }

    // function handleValidate() {
    //     let errors = {};
    //     if (!form.title) {
    //         errors.title = 'required'
    //     }
    //     if (!form.number) {
    //         errors.number = 'required'
    //     }

    // }

    // function handleSelect(book, index) {
    //     setForm(book)
    //     setIndexSelected(index)
    // }
    // function handleDelete(index) {
    //     const newBooks = JSON.parse(JSON.stringify(books))
    //     newBooks.splice(index, 1)
    //     setBooks(newBooks)

    // }

    // function handleSubmit() {
    //     const newBooks = JSON.parse(JSON.stringify(books))
    //     if (indexSelected > -1) {
    //         newBooks.splice(indexSelected, 1, form)
    //     } else { newBooks.push(form) }


    //     console.log(books)



    //     setBooks(newBooks)
    //     setForm({})
    //     setIndexSelected(-1)
    // }

    return (
        <div>
            <h1> Library</h1>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name='title'
                        id="title"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.title}
                    />
                    {formik.errors.title && formik.touched.title && <p>{formik.errors.title}</p>}

                </div>

                <div>
                    <label htmlFor="number">Number</label>
                    <input
                        name='number'
                        id="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.quantity}

                    />
                    {formik.errors.quantity && formik.touched.quantity && <p>{formik.errors.quantity}</p>}
                </div>
                <input type='submit' disabled={formik.isSubmitting} />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBooksList()}
                </tbody>
            </table>



        </div>

    )

}
export default App;