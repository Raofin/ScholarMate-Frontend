import { API_ENDPOINT } from '@/config';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const generatedStudentId = `23-${ randomNumber }-2`;

    const payload = {
      studentId: generatedStudentId,
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      creditsCompleted: 0,
      cgpa: 0,
      joinDate: new Date(),
      departmentId: parseInt(data.department)
    };

    fetch(`${ API_ENDPOINT }/students/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(() => window.location.href = '/students')
      .catch(error => console.error(error));
  };

  return (
    <div className="container w-80 mt-20 mx-auto">
      <h1 className="text-title">Register</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="mb-5">
          <label htmlFor="name" className="text-form-title">Name</label>
          <input type="text" id="name" className="grey-input"
                 placeholder="Enter your name here"
                 {...register('name', { required: true, minLength: 4, maxLength: 20 })} />
          {errors.name && errors.name.type === "required" && <span className="text-red-500">This field is required</span>}
          {errors.name && errors.name.type === "minLength" && <span className="text-red-500">Name should be at least 4 characters long</span>}
          {errors.name && errors.name.type === "maxLength" && <span className="text-red-500">Name should be no more than 20 characters long</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-form-title">Email</label>
          <input type="email" id="email" className="grey-input"
                 placeholder="name@email.com"
                 {...register('email', { required: true })} />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="text-form-title">Password</label>
          <input type="password" id="password" className="grey-input"
                 placeholder="Enter your password"
                 {...register('password', { required: true, minLength: 6, maxLength: 20 })} />
          {errors.password && errors.password.type === "required" && <span className="text-red-500">This field is required</span>}
          {errors.password && errors.password.type === "minLength" && <span className="text-red-500">Password should be at least 6 characters long</span>}
          {errors.password && errors.password.type === "maxLength" && <span className="text-red-500">Password should be no more than 20 characters long</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="text-form-title">Phone Number</label>
          <input type="tel" id="phone" className="grey-input"
                 placeholder="Your phone number"
                 {...register('phone', { required: true, minLength: 11, maxLength: 11 })} />
          {errors.phone && errors.phone.type === "required" && <span className="text-red-500">This field is required</span>}
          {errors.phone && errors.phone.type === "minLength" && <span className="text-red-500">Phone Number must be 11 characters long</span>}
          {errors.phone && errors.phone.type === "maxLength" && <span className="text-red-500">Phone Number must be 11 characters long</span>}
        </div>
        <div className="mb-5">
          <label htmlFor="department" className="text-form-title">Department</label>
          <select id="department" className="grey-input"
                  {...register('department', { required: true })}>
            <option value="">Select department</option>
            <option value="1">CSE</option>
            <option value="2">EEE</option>
            <option value="3">LLB</option>
            <option value="4">ME</option>
          </select>
          {errors.department && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="flex justify-center">
          <button type="submit" className="blue-button">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
