import React, { useState, useEffect } from "react"
import { useFormik, Formik, Form, ErrorMessage, Field } from "formik"
import Layout from "../components/layout"

export default function Home() {
  const [mydata, setData] = useState("")

  return (
    <Layout>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          name: "",
          fatherName: "",
          number: 0,
        }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = "name"
          } else if (!values.fatherName) {
            errors.fatherName = "fatherName"
          } else if (!values.number) {
            errors.number = "number"
          }
          return errors
        }}
        onSubmit={values => {
          console.log(values)
          fetch(`/.netlify/functions/add`, {
            method: "post",
            body: JSON.stringify(values),
          })
            .then(response => response.json())
            .then(data => {
              setData(data)
              console.log("Data: " + JSON.stringify(data))
            })
        }}
      >
        {formik => (
          <Form onSubmit={formik.handleSubmit}>
            <div>
              <Field
                type="text"
                variant="outlined"
                label="Name::"
                name="name"
                id="name"
              />
              <ErrorMessage
                name="name"
                render={() => <span style={{ color: "red" }}>Required!</span>}
              />
            </div>
            <div>
              <Field
                type="text"
                variant="outlined"
                label="Father's Name::"
                name="fatherName"
                id="fatherName"
              />
              <ErrorMessage
                name="fatherName"
                render={() => <span style={{ color: "red" }}>Required!</span>}
              />
            </div>
            <div>
              <Field
                type="number"
                label="number:: "
                variant="filled"
                name="number"
                id="number"
              />
              <ErrorMessage
                name="number"
                render={() => <span style={{ color: "red" }}>Required!</span>}
              />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}
