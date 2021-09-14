import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const intialValues = {
    firstName: "bill",
    lastName: "",
    email: "",
    age: ""
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="lastName">名前</label>
      <input
        defaultValue={intialValues.lastName}
        placeholder=""
        {...register("lastName", {
          validate: (value) => value.length > 3
        })}
      />
      {errors.lastName && <p>名前は3文字以上、入力してください</p>}

      <label htmlFor="email">Email</label>
      <input
        defaultValue={intialValues.email}
        placeholder=""
        type="email"
        {...register("email")}
      />
      <label htmlFor="age">年齢</label>
      <input
        defaultValue={intialValues.age}
        placeholder=""
        type="text"
        {...register("age", {
          validate: {
            positiveNumber: (value) => parseFloat(value) > 0,
            lessThanHundred: (value) => parseFloat(value) < 200
          }
        })}
      />
      {errors.age && errors.age.type === "positiveNumber" && (
        <p>年齢が正しく入力されていません</p>
      )}
      {errors.age && errors.age.type === "lessThanHundred" && (
        <p>Your age should be greater than 200</p>
      )}

      <input type="submit" />
    </form>
  );
}

export default Form;

