import { useFormik } from "formik";
import * as Yup from 'yup'
import { useState, useEffect } from "react";



const sicks = ['Ho','Sốt','Khó thở','Viểm phổi', 'Đau họng','Mệt mỏi']


function App() {




    const [checked, setChecked] = useState([])



    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)

            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id].sort()
            }
        })
    }






    const formik = useFormik({
        initialValues: {
            name: '',
            cmnd: '',
            date: '',
            country: '',
            company: '',
            work: '',
            tinh_thanh: '',
            quan_huyen: '',
            address: '',
            phone: '',
            email: '',
            sex: '',
            check: [],
            place: '',

        },

        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required('required')
                .min(10, "Name is too short !!!")
                .max(50, "Name is too long !!!"),
            cmnd: Yup.string().required('required'),
            date: Yup.number().min(1900, "date must be larger than 1900"),
            tinh_thanh: Yup.string().required('required'),
            quan_huyen: Yup.string().required('required'),
            address: Yup.string().required('required'),
            phone: Yup.string(),
            email: Yup.string().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'invalid email'),




        }),

        onSubmit: (values) => {
            window.alert("Form submitted");
let info = {...values,'checked':{...checked}}
            console.log(info);
        }

    })
    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <h1>Tờ khai y tế </h1>
                <div>
                    <label htmlFor="name">Name:</label><br></br>
                    <input
                        type='text'
                        placeholder="Enter your name"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange} />
                    {formik.errors.name && <p style={{ color: 'red' }}> {formik.errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="cmnd">CMND:</label><br></br>
                    <input
                        type='text'
                        placeholder="Enter your CMND"
                        id="cmnd"
                        name="cmnd"
                        value={formik.values.cmnd}
                        onChange={formik.handleChange}
                    />

                    {formik.errors.cmnd && <p style={{ color: 'red' }}> {formik.errors.cmnd}</p>}
                </div>

                <div>
                    <label htmlFor="date">Date of birth:</label><br></br>
                    <input
                        type='number'
                        placeholder="Enter your date of birth"
                        id="date"
                        name="date"
                        value={formik.values.date}
                        onChange={formik.handleChange} />
                    {formik.errors.date && <p style={{ color: 'red' }}> {formik.errors.date}</p>}
                </div>

                <div>
                    <label>Sex:</label>
                    <input
                        type='radio' value='male' name="sex" id="sex" onChange={formik.handleChange} />Male
                    <input
                        type='radio' value='female' name="sex" id="sex" onChange={formik.handleChange} />Female

                </div>

                <div>

                    <label htmlFor="country">Country:</label><br></br>
                    <input
                        type='text'
                        placeholder="Enter your country"
                        id="country"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange} />
                    {formik.errors.country && <p style={{ color: 'red' }}> {formik.errors.country}</p>}
                </div>


                <div>
                    <label htmlFor="company">Company:</label><br></br>
                    <input
                        type='text'
                        placeholder="Enter your company"
                        id="company"
                        name="company"
                        value={formik.values.company}
                        onChange={formik.handleChange} />
                    {formik.errors.company && <p style={{ color: 'red' }}> {formik.errors.company}</p>}
                </div>



                <div>
                    <label htmlFor="work">Working part:</label><br></br>
                    <input
                        type='text'
                        placeholder="Enter your working part"
                        id="work"
                        name="work"
                        value={formik.values.work}
                        onChange={formik.handleChange} />
                    {formik.errors.work && <p style={{ color: 'red' }}> {formik.errors.work}</p>}
                </div>

                <div>
                    Có thẻ bảo hiểm y tế:
                    <input type='checkbox' name='check' id='check' onChange={formik.handleChange} />
                </div>


                <h1>Địa chỉ liên lạc tại Viêt Nam</h1>

                <div>
                    <label htmlFor="tinh_thanh">Tỉnh thành:</label><br></br>
                    <input
                        type='text'
                        placeholder="nhập tỉnh thành bạn ở"
                        id="tinh_thanh"
                        name="tinh_thanh"
                        value={formik.values.tinh_thanh}
                        onChange={formik.handleChange} />
                    {formik.errors.tinh_thanh && <p style={{ color: 'red' }}> {formik.errors.tinh_thanh}</p>}
                </div>

                <div>
                    <label htmlFor="quan_huyen">Quận/huyện:</label><br></br>
                    <input
                        type='text'
                        placeholder="nhập quận/huyện bạn ở"
                        id="quan_huyen"
                        name="quan_huyen"
                        value={formik.values.quan_huyen}
                        onChange={formik.handleChange} />
                    {formik.errors.quan_huyen && <p style={{ color: 'red' }}> {formik.errors.quan_huyen}</p>}
                </div>

                <div>
                    <label htmlFor="address">Địa chỉ:</label><br></br>
                    <input
                        type='text'
                        placeholder="nhập địa chỉ nhà bạn ở"
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange} />
                    {formik.errors.address && <p style={{ color: 'red' }}> {formik.errors.address}</p>}
                </div>

                <div>
                    <label htmlFor="phone">Phone number:</label><br></br>
                    <input
                        type='tel'
                        placeholder="nhập số điện thoại"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange} />
                    {formik.errors.phone && <p style={{ color: 'red' }}> {formik.errors.phone}</p>}
                </div>


                <div>
                    <label htmlFor="email">Email:</label><br></br>
                    <input
                        type='email'
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange} />
                    {formik.errors.email && <p style={{ color: 'red' }}> {formik.errors.email}</p>}
                </div>


                <div>
                    <h1>Trong 14 ngày qua ,anh/chị có đến những nơi nào:</h1>
                    <textarea
                        id="place"
                        name="place"
                        value={formik.values.place}
                        onChange={formik.handleChange} />
                </div>


                <div>
                    <h1>Trong 14 ngày qua, anh/chị có những biểu hiện nào dưới đây không ?</h1>

                    {sicks.map(sick => (
                        <div key={sick}>
                            <input
                                onChange={() => handleCheck(sick)}
                                checked={checked.includes(sick)}
                                type='checkbox' />
                            {sick}

                        </div>
                    ))
                    }


                </div>




                <button type='submit' >Submit</button>
            </form>
        </div >
    )
}

export default App