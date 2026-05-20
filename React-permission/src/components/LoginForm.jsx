import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./AuthContext";
export default function LoginForm() {

    const {register, handleSubmit, formState: {errors} } = useForm()
    const { user, Login} = useContext(AuthContext)

  function onSubmit(event,data) {
    event.preventDefault();
    
}

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "300px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Login Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="User Name"
          value={user.name}
          {...register('name', {
            required:'User Name Required ',
          })}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            background:'#fff',
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        {errors.name && <p> User Name required </p>}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          {...register('email',{
            required:'Email is required',
            pattern:{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:'Please enter valid email'
            }
          })}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            background:'#fff',
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            background:'#fff',
            borderRadius: "5px",
            fontSize: "16px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}