import React from 'react'
import { useState } from "react";
import axios from 'axios'


import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


function Dayfive() {
    // axios , fetch (api hit garne duita tarika)
    //const [person, setPerson]= useState([])

    const Forms = [
        {
          name: "firstName",
          type: "text",
          placeholder: "firstname",
        },
        {
            name: "middleName",
            type: "text",
            placeholder: "middlename",
          },
          {
            name: "lastName",
            type: "text",
            placeholder: "lastname",
          },
          {
            name: "collegeName",
            type: "text",
            placeholder: "collegename",
          },
        {
          name: "email",
          type: "email",
          placeholder: "Enter your email",
        },
        {
            name: "phone",
            type: "number",
            placeholder: "Enter phone number",
          },
          {
            name: "subject",
            type: "text",
            placeholder: "Enter subject",
          },
        
      ];
      const [count, setCount] = useState(0);
  const Schemas = yup.object().shape({
    firstName: yup.string().required("firstname is required!!"),
    middleName: yup.string().required("middlename is required!!"),
    lastName: yup.string().required("lastname is required!!"),
    collegeName: yup.string().required("Collegename is required!!"),
    phone: yup.string().required("Number is required!!"),
    subject: yup.string().required("Subject is required!!"),




    email: yup
      .string()
      .email("please provide a valid  email")
      .required("please enter your email"),
    
  });


  return (
    <div>
      <div className="flex justify-center items-center min-h-screen h-lvh ">
      <div className="w-full max-w-md p-8">
        <Formik
          className=""
          initialValues={{
            firstName: "",
            middleName:"",
            lastName:"",
            collegeName:"",
            email: "",
            phone:"",
            subject:""

            
          }}
          validationSchema={Schemas}
          onSubmit={(values) => {
            console.log(values);

            //post method (create)
            axios.post("http://localhost:3000/person", values).then(result=>{
                console.log(result)
            })
            .catch((error)=>{
                console.log(error)
            })
          
          }}
        >
         {({setFieldValue,values})=>{
          return(
            <Form className=" bg-gray-200  flex  flex-col  p-2 shadow-lg rounded-xl">
            <div>
              <h1 className="text-black text-center font-bold text-3xl underline m-3">
                Backend connection!
              </h1>
            </div>
            {Forms.map((val, i) => {
              return (
                <div key={i} className="flex flex-col gap-1 px-2 py-3">
                  <Field
                    className="bg-white border  w-full rounded-md px-2 py-2 outline-none"
                    name={val.name}
                    type={val.type}
                    placeholder={val.placeholder}
                  />
                  <ErrorMessage
                    name={val.name}
                    component={"div"}
                    className="text-red-700 px-3"
                  />
                </div>
              );
            })}
            <div className="flex items-center justify-center mx-2 my-2">
              <button
                className="bg-green-600 text-white rounded-lg p-3 w-fit shadow-lg "
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
          )
         }}
        </Formik>
      </div>
    </div>
    </div>
  )
}

export default Dayfive