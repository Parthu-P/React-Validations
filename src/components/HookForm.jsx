import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useForm} from "react-hook-form"

function HookForm() {
    const{register,handleSubmit, formState:{errors}}=useForm();
    const onSubmit=(values)=>{alert(JSON.stringify(values))};
  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <dt>Product Name</dt>
          <dd>
            <input type="text" {...register("Name",{required:true,minLength:4})} />
          </dd>
          <dd className="text-danger">{(errors.Name?.type==="required")?<span >Name required</span>:<span></span> && (errors.Name?.type==="minLength")?<span>Name too short</span>:<span></span>}</dd>
          <dt>Price</dt>
          <dd>
            <input type="number" {...register("Price", {required:true, min:100, max:10000})} />
          </dd>
          <dd className="text-danger">{(errors.Price?.type==="min")?<span>Price min 100 required</span>:<span></span> && (errors.Price?.type==="max")?<span>Price max 10000 only</span>:<span></span>}</dd>
        </dl>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HookForm;
