import { Button } from "antd";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" name="" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" name="" id="password" {...register("password")} />
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
