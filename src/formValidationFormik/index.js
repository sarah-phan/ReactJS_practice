// npm i formik --save
// Validation = YUP library (formik + Yup)
// npm i yup --save

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"

const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('Field is required'),
    matKhau: yup.string().required('Field is required'),
    email: yup
    .string()
    .required('Field is required')
    .email('Email is invalid'),
    soDT: yup
    .string()
    .required('Field is required')
    .matches(/^[0-9]+$/),
    maNhom: yup.string().required('Field is required'),
})

export default function FormFormik() {
    const _handleSubmit = (values) => {
        console.log(values)
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='display-4 text-center'>
                Sign Up
            </h1>
            <Formik
                initialValues={{
                    taiKhoan: '',
                    matKhau: '',
                    hoTen: '',
                    email: '',
                    soDT: '',
                    maNhom: 'GP01'
                }}
                onSubmit={_handleSubmit}
                validationSchema={signupUserSchema}
                render={(formikProps) => (
                    <Form>
                        <div className='form-group'>
                            <label>Tài Khoản: </label>
                            <Field
                                type="text"
                                className='form-control'
                                name='taiKhoan'
                                onChange={formikProps.handleChange} 
                            />
                            <ErrorMessage name = 'taiKhoan'>
                                {
                                    (msg) => <div className='alert alert-danger'>{msg}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <div className='form-group'>
                            <label>Mật Khẩu: </label>
                            <Field
                                type="password"
                                className='form-control'
                                name='matKhau'
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Họ tên: </label>
                            <Field
                                type="text"
                                className='form-control'
                                name='hoTen'
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Email: </label>
                            <Field
                                type="email"
                                className='form-control'
                                name='email'
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Số điện thoại: </label>
                            <Field
                                type="number"
                                className='form-control'
                                name='soDT'
                                onChange={formikProps.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label>Mã nhóm: </label>
                            <Field
                            className="form-control" 
                            name="maNhom"
                            onChange={formikProps.handleChange}
                            component="select"
                            >
                                <option>GP01</option>
                                <option>GP02</option>
                                <option>GP03</option>
                                <option>GP04</option>
                                <option>GP05</option>
                                <option>GP06</option>
                                <option>GP07</option>
                                <option>GP08</option>
                                <option>GP09</option>
                            </Field>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-success'>Submit</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    )
}
